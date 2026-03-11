// get geral já está alterada
// pool está configurado para portgresql de SJ

const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const pool = new Pool({
    user: 'postgres', // Substitua pelo seu usuário do PostgreSQL
    // user: 'postgre', // Substitua pelo seu usuário do PostgreSQL
    // user: 'senai', // Substitua pelo seu usuário do PostgreSQL
    host: 'localhost',
    database: 'trunfo-dino', // Nome da sua database
    // password: 'senai', // Substitua pela sua senha
    password: 'senai', // Substitua pela sua senha
    port: 5433, // Porta padrão do PostgreSQL
});

// Habilitar CORS para todas as rotas
app.use(cors());
app.use(express.json());

// Rota para buscar todos os clientes
app.get('/dinos', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM DINO');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao buscar clientes' });
    }
});

// Rota para buscar um cliente por ID
app.get('/dinos/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM dino WHERE id_dino = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Dino não encontrado' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro interno ao buscar dino' });
    }
});

// Rota para adicionar um cliente
app.post('/dinos', async (req, res) => {
    const { nome, altura, comprimento, peso, velocidade, agilidade, longevidade, numero_magico, imagem } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO dino (NOME, ALTURA, COMPRIMENTO, PESO, VELOCIDADE, AGILIDADE, LONGEVIDADE, NUMERO_MAGICO, IMAGEM) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
            [nome, altura, comprimento, peso, velocidade, agilidade, longevidade, numero_magico, imagem]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao adicionar dino' });
    }
});

// Rota para atualizar um cliente
app.put('/dinos/:id', async (req, res) => {
    const { id } = req.params;
    const { nome, altura, comprimento, peso, velocidade, agilidade, longevidade, numero_magico, imagem } = req.body;
    try {
        const result = await pool.query(
            'UPDATE dino SET nome = $1, altura = $2, comprimento = $3, peso = $4, velocidade = $5, agilidade = $6, longevidade = $7, numero_magico = $8, imagem = $9 WHERE id_dino = $10 RETURNING *',
            [nome, altura, comprimento, peso, velocidade, agilidade, longevidade, numero_magico, imagem, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Dino não encontrado' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao atualizar dino' });
    }
});

// Rota para deletar um cliente
app.delete('/dinos/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('DELETE FROM dino WHERE id_dino = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Dino não encontrado' });
        }
        res.json({ message: 'Dino deletado com sucesso' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao deletar Dino' });
    }
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});


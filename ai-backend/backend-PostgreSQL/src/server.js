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



// Rota para buscar todos os dinos
app.get('/dinos', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM DINO');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao buscar dinos' });
    }
});

// Rota para buscar n dinos aleatórios
app.get('/dinos/random/:n', async (req, res) => {
    const { n } = req.params;
    const quantidade = parseInt(n);

    if (isNaN(quantidade) || quantidade <= 0) {
        return res.status(400).json({ error: 'O parâmetro n deve ser um número inteiro positivo' });
    }

    try {
        const result = await pool.query(
            'SELECT * FROM dino ORDER BY RANDOM() LIMIT $1',
            [quantidade]
        );
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao buscar dinos aleatórios' });
    }
});


// Rota para buscar os n dinos mais famosos
app.get('/dinos/top/fama/:n', async (req, res) => {
    const { n } = req.params;
    const quantidade = parseInt(n);

    if (isNaN(quantidade) || quantidade <= 0) {
        return res.status(400).json({ error: 'O parâmetro n deve ser um número inteiro positivo' });
    }

    try {
        const result = await pool.query(
            'SELECT * FROM dino ORDER BY fama DESC LIMIT $1',
            [quantidade]
        );
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao buscar os dinos mais famosos' });
    }
});

// Rota para buscar um dino por ID
app.get('/dinos/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM dino WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Dino não encontrado' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro interno ao buscar dino' });
    }
});

// Rota para adicionar um dino
app.post('/dinos', async (req, res) => {
    const { nome, altura, comprimento, peso, velocidade, agilidade, longevidade, numero_magico, imagem, fama, tipo } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO dino (NOME, ALTURA, COMPRIMENTO, PESO, VELOCIDADE, AGILIDADE, LONGEVIDADE, NUMERO_MAGICO, IMAGEM, FAMA, TIPO) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *',
            [nome, altura, comprimento, peso, velocidade, agilidade, longevidade, numero_magico, imagem, fama, tipo]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao adicionar dino' });
    }
});

// Rota para atualizar um dino
app.put('/dinos/:id', async (req, res) => {
    const { id } = req.params;
    const { nome, altura, comprimento, peso, velocidade, agilidade, longevidade, numero_magico, imagem, fama, tipo } = req.body;
    try {
        const result = await pool.query(
            'UPDATE dino SET nome = $1, altura = $2, comprimento = $3, peso = $4, velocidade = $5, agilidade = $6, longevidade = $7, numero_magico = $8, imagem = $9, fama = $10, tipo = $11 WHERE id = $12 RETURNING *',
            [nome, altura, comprimento, peso, velocidade, agilidade, longevidade, numero_magico, imagem, fama, tipo, id]
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

// Rota para deletar um dino
app.delete('/dinos/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('DELETE FROM dino WHERE id = $1 RETURNING *', [id]);
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
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'secreto',
    password: 'senai',
    port: 5433,
});

app.use(cors());
app.use(express.json());

// Buscar todos os contatinhos
app.get('/contatinhos', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM contatinhos ORDER BY id');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao buscar contatinhos' });
    }
});

// Buscar um contatinho por ID
app.get('/contatinhos/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const result = await pool.query(
            'SELECT * FROM contatinhos WHERE id = $1',
            [id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Contatinho não encontrado' });
        }

        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao buscar contatinho' });
    }
});

// Adicionar um contatinho
app.post('/contatinhos', async (req, res) => {
    const {
        nome,
        arroba,
        telefone,
        interesses,
        lembretes,
        ultimo_contato,
        de_onde_conheco
    } = req.body;

    try {
        const result = await pool.query(
            `INSERT INTO contatinhos 
            (nome, arroba, telefone, interesses, lembretes, ultimo_contato, de_onde_conheco)
            VALUES ($1, $2, $3, $4, $5, $6, $7)
            RETURNING *`,
            [
                nome,
                arroba,
                telefone,
                interesses,
                lembretes,
                ultimo_contato,
                de_onde_conheco
            ]
        );

        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao adicionar contatinho' });
    }
});

// Atualizar um contatinho
app.put('/contatinhos/:id', async (req, res) => {
    const { id } = req.params;

    const {
        nome,
        arroba,
        telefone,
        interesses,
        lembretes,
        ultimo_contato,
        de_onde_conheco
    } = req.body;

    try {
        const result = await pool.query(
            `UPDATE contatinhos
            SET nome = $1,
                arroba = $2,
                telefone = $3,
                interesses = $4,
                lembretes = $5,
                ultimo_contato = $6,
                de_onde_conheco = $7
            WHERE id = $8
            RETURNING *`,
            [
                nome,
                arroba,
                telefone,
                interesses,
                lembretes,
                ultimo_contato,
                de_onde_conheco,
                id
            ]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Contatinho não encontrado' });
        }

        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao atualizar contatinho' });
    }
});

// Deletar um contatinho
app.delete('/contatinhos/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const result = await pool.query(
            'DELETE FROM contatinhos WHERE id = $1 RETURNING *',
            [id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Contatinho não encontrado' });
        }

        res.json({ message: 'Contatinho deletado com sucesso' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao deletar contatinho' });
    }
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
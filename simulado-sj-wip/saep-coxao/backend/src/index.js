const express = require('express')
const cors = require('cors')
const { Pool } = require('pg')

const app = express()
const pool = new Pool({
    user: 'postgres',
    password: 'senai',
    host: 'localhost',
    port: '5433',
    database: 'saep_db'
})

app.use(cors());
app.use(express.json());

const ok = (res, data) => res.json(data);
const fail = (res, err, code=500) => {
    console.error(err);
    res.status(code).json({error: "erro interno"})
}

app.post('/login', async (req, res) => {
    const {login, senha} = req.body || {};
    try{
        const r = await pool.query(
            'SELECT login, senha FROM usuario where login=$1 AND senha=$2',
            [login, senha]
        )
        if(r.rows.length === 0) return fail(res, "Credenciais inválidas", 401)
        ok(res, r.rows[0])
    }catch (e){
        fail(res, e)
    }
});

app.get('/material', async (req, res) => {
    const q = (req.query.q || '').trim()
    // const hasQ = q.length > 0;
    const sql = `SELECT id, nome, categoria, preco FROM material ORDER BY nome`
    try{
        const r = await pool.query(sql, []) 
        ok(res, r.rows);
    } catch (e) { fail(res, e); }
})





//////////////////////////////////////////////
// obter 1 material
app.get('/material/:id', async (req, res) => {
  try {
    const r = await pool.query(
      `SELECT id, nome, categoria, preco FROM material WHERE id=$1`,
      [req.params.id]
    );
    if (!r.rows.length) return fail(res, 'Material não encontrado', 404);
    ok(res, r.rows[0]);
  } catch (e) { fail(res, e); }
});

// criar material
app.post('/material', async (req, res) => {
  const { nome, categoria, preco  } = req.body || {};
  if (!nome) return fail(res, 'Campo obrigatório: nome', 400);
  try {
    const r = await pool.query(
      `INSERT INTO material (nome, categoria, preco)
       VALUES ($1,$2,$3)`,
      [nome, categoria, preco]
    );
    ok(res, r.rows[0]);
  } catch (e) { fail(res, e); }
});

// atualizar material
app.put('/material/:id', async (req, res) => {
  const { nome, categoria, preco } = req.body || {};
  try {
    const r = await pool.query(
      `UPDATE material
          SET nome = $1,
              categoria = $2,
              preco = $3
            WHERE id=$4
        RETURNING id, nome, categoria, preco`,
      [nome, categoria, preco, req.params.id]
    );
    if (!r.rows.length){
        return res.status(404).json({error: "Não achei isso aí", err})
    }
        //  return fail(res, 'Produto não encontrado', 404);
    ok(res, r.rows[0]);
  } catch (e) { fail(res, e); }
});

// deletar material
app.delete('/material/:id', async (req, res) => {
  try {
    const r = await pool.query('DELETE FROM material WHERE id=$1 RETURNING id', [req.params.id]);
    if (!r.rows.length) return res.status(401).json({error: "Material não encontrado"})
    return res.status(200).json(r.rows[0]);
  } catch (e) { return res.status(500).json({error: "erro interno", err}) }
});

///////////////////////////////////////////

app.listen(3000, () => console.log('Rodando na porta 3000'))
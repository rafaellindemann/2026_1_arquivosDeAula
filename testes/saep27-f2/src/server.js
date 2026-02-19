require("dotenv").config();

const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

// Helpers simples (pra manter comportamento parecido com PHP)
function isEmpty(v) {
  return v === undefined || v === null || v === "";
}

// POST /add_produto
app.post("/add_produto", async (req, res) => {
  try {
    const { nome, quantidade, valor, data: dataCadastro } = req.body || {};

    if (isEmpty(nome) || isEmpty(quantidade) || isEmpty(valor) || isEmpty(dataCadastro)) {
      return res.status(422).json({ mensagem: "Preencha todos os campos!" });
    }

    const [exists] = await db.execute("SELECT * FROM produto WHERE nome = ?", [nome]);
    if (exists.length > 0) {
      return res.status(422).json({ mensagem: "Produto já cadastrado!" });
    }

    await db.execute(
      "INSERT INTO produto (nome, quantidade_estoque, valor_unitario, data_cadastro) VALUES (?, ?, ?, ?)",
      [nome, quantidade, valor, dataCadastro]
    );

    return res.status(201).json({ mensagem: "Produto cadastrado com sucesso!" });
  } catch (err) {
    return res.status(500).json({ mensagem: "Erro interno", detalhe: String(err?.message || err) });
  }
});

// GET /listar_produto  (no PHP: pega só 1 row)
app.get("/listar_produto", async (_req, res) => {
  try {
    const [rows] = await db.execute("SELECT * FROM produto");

    if (rows.length <= 0) {
      return res.status(422).json({ mensagem: "Nenhum produto encontrado!" });
    }

    const row = rows[0]; // replica o fetch_assoc único do PHP
    const valorTotal = Number(row.valor_unitario) * Number(row.quantidade_estoque);

    return res.json({
      produto: row.nome,
      valor: row.valor_unitario,
      quantidade: row.quantidade_estoque,
      "valor total": valorTotal
    });
  } catch (err) {
    return res.status(500).json({ mensagem: "Erro interno", detalhe: String(err?.message || err) });
  }
});

// GET /listar_produtos  (no PHP: dá echo json em loop; aqui vou devolver array, que é o "certo")
app.get("/listar_produtos", async (_req, res) => {
  try {
    const [rows] = await db.execute("SELECT * FROM produto");

    if (rows.length <= 0) {
      return res.status(422).json({ mensagem: "Nenhum produto encontrado!" });
    }

    const produtos = rows.map((row) => {
      const valorTotal = Number(row.valor_unitario) * Number(row.quantidade_estoque);
      return {
        produto: {
          nome: row.nome,
          valor: row.valor_unitario,
          quantidade: row.quantidade_estoque,
          "valor total": valorTotal
        }
      };
    });

    return res.json(produtos);
  } catch (err) {
    return res.status(500).json({ mensagem: "Erro interno", detalhe: String(err?.message || err) });
  }
});

// POST /movimentar_produto (no PHP: só aceita ENTRADA)
app.post("/movimentar_produto", async (req, res) => {
  const conn = await db.getConnection();
  try {
    const { tipo, quantidade, id_produto } = req.body || {};

    if (isEmpty(tipo) || isEmpty(quantidade) || isEmpty(id_produto)) {
      return res.status(422).json({ mensagem: "Preencha todos os campos!" });
    }

    if (tipo !== "ENTRADA") {
      return res.status(422).json({ mensagem: "Tipo não aceito!" });
    }

    await conn.beginTransaction();

    // insere movimentação
    await conn.execute(
      "INSERT INTO movimentacao (tipo, quantidade, id_produto, datetime_movimentacao) VALUES (?, ?, ?, NOW())",
      [tipo, quantidade, id_produto]
    );

    // seleciona produto
    const [prodRows] = await conn.execute("SELECT * FROM produto WHERE id_produto = ?", [id_produto]);
    const prod = prodRows[0];
    if (!prod) {
      await conn.rollback();
      return res.status(404).json({ mensagem: "Produto não encontrado!" });
    }

    const quantidadeTotal = Number(prod.quantidade_estoque) + Number(quantidade);

    // atualiza estoque
    await conn.execute("UPDATE produto SET quantidade_estoque = ? WHERE id_produto = ?", [
      quantidadeTotal,
      id_produto
    ]);

    await conn.commit();

    // no PHP ele responde 200 logo após inserir movimentação (antes do update).
    return res.status(200).json({ mensagem: "Entrada executada com sucesso!" });
  } catch (err) {
    try { await conn.rollback(); } catch {}
    return res.status(500).json({ mensagem: "Erro interno", detalhe: String(err?.message || err) });
  } finally {
    conn.release();
  }
});

// GET /verificar_estoque (no PHP: echo json em loop; aqui devolvo array)
app.get("/verificar_estoque", async (_req, res) => {
  try {
    const [rows] = await db.execute("SELECT * FROM produto");

    if (rows.length <= 0) {
      return res.status(422).json({ mensagem: "Nenhum produto encontrado!" });
    }

    const itens = rows.map((row) => ({
      produto: {
        nome: row.nome,
        valor: row.valor_unitario,
        quantidade: row.quantidade_estoque
      }
    }));

    return res.json(itens);
  } catch (err) {
    return res.status(500).json({ mensagem: "Erro interno", detalhe: String(err?.message || err) });
  }
});

// GET /listar_saidas
// OBS: seu PHP está errado: "saida_produto == 'SAIDA'" (coluna estranha e operador errado em SQL).
// Vou implementar o que ele "queria": listar movimentacao onde tipo = 'SAIDA'.
// Mas como seu alterarEstoque NÃO cria SAIDA, isso normalmente vai vir vazio.
app.get("/listar_saidas", async (_req, res) => {
  try {
    const [rows] = await db.execute("SELECT * FROM movimentacao WHERE tipo = 'SAIDA'");

    if (rows.length <= 0) {
      return res.status(422).json({ mensagem: "Nenhum produto teve saída!" });
    }

    // seu PHP tenta devolver nome e quantidade, mas movimentacao não tem nome (a menos que tenha join).
    // Vou fazer join com produto para devolver nome.
    const [rowsJoin] = await db.execute(`
      SELECT p.nome, m.quantidade
      FROM movimentacao m
      JOIN produto p ON p.id_produto = m.id_produto
      WHERE m.tipo = 'SAIDA'
      ORDER BY m.datetime_movimentacao DESC
    `);

    const saidas = rowsJoin.map((r) => ({
      produto: { nome: r.nome, quantidade: r.quantidade }
    }));

    return res.json(saidas);
  } catch (err) {
    return res.status(500).json({ mensagem: "Erro interno", detalhe: String(err?.message || err) });
  }
});

// DELETE /deletar_produto  (no PHP: body JSON { id })
app.delete("/deletar_produto", async (req, res) => {
  try {
    const { id } = req.body || {};
    if (isEmpty(id)) {
      return res.status(422).json({ mensagem: "Preencha todos os campos!" });
    }

    const [result] = await db.execute("DELETE FROM produto WHERE id_produto = ?", [id]);

    if (result.affectedRows > 0) {
      return res.status(200).json({ mensagem: "Produto removido com sucesso!" });
    }

    return res.status(404).json({ mensagem: "Não foi possível encontrar o produto!" });
  } catch (err) {
    return res.status(500).json({ mensagem: "Erro interno", detalhe: String(err?.message || err) });
  }
});

// DELETE /deletar_movimentacao (no PHP: body JSON { id })
app.delete("/deletar_movimentacao", async (req, res) => {
  try {
    const { id } = req.body || {};
    if (isEmpty(id)) {
      return res.status(422).json({ mensagem: "Preencha todos os campos!" });
    }

    const [result] = await db.execute("DELETE FROM movimentacao WHERE id_movimentacao = ?", [id]);

    if (result.affectedRows > 0) {
      return res.status(200).json({ mensagem: "Produto removido com sucesso!" });
    }

    return res.status(404).json({ mensagem: "Não foi possível encontrar o produto!" });
  } catch (err) {
    return res.status(500).json({ mensagem: "Erro interno", detalhe: String(err?.message || err) });
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`API rodando em http://localhost:${process.env.PORT || 3000}`);
});

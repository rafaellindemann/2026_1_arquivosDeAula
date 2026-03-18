Eu tenho um serverzinho js para prover acesso a uma tabela de dinos com mais de 200 registros. Quero ter possibilidade de fazer: - um get de todos dinos; - um get de n dinos aleatórios; - um get de n dinos que tem maior valor na coluna 'fama' Qual a melhor estratégia para criar isso? Uma rota dinâmica, rotas separadas...?
---
Para esse caso, eu iria de **rotas separadas por intenção**, não uma rota dinâmica “mágica”.

Pelo teu server atual, tu já tem o básico bem organizado com:

* `GET /dinos` para todos
* `GET /dinos/:id` para um por id 

Então a extensão mais limpa seria manter esse padrão e criar rotas específicas para consultas especiais.

## Estratégia que eu recomendo

Ficaria assim:

* `GET /dinos` → todos os dinos
* `GET /dinos/random/:n` → `n` dinos aleatórios
* `GET /dinos/top/fama/:n` → `n` dinos com maior fama

Isso é melhor que tentar enfiar tudo numa rota só porque:

* deixa a intenção da rota óbvia
* evita um monte de `if` dentro de `/dinos`
* fica mais fácil de testar
* fica mais fácil de documentar
* evita conflito mental com `GET /dinos/:id`

## Por que eu evitaria uma rota dinâmica demais

Algo como:

* `GET /dinos/:criterio/:n`

ou

* `GET /dinos?tipo=random&n=5`

funciona, mas no teu contexto didático e prático eu acho menos interessante.

Especialmente porque tu já tem `GET /dinos/:id`.
Se começar a inventar muita rota paramétrica, aumenta a chance de colisão e confusão.

Exemplo:

* `/dinos/10` é id?
* `/dinos/random` é palavra-reservada?
* `/dinos/top` é id textual inválido?

Dá para resolver, mas complica sem necessidade.

---

## Como eu implementaria

### 1. Todos os dinos

Tu já tem:

```js
app.get('/dinos', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM DINO');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao buscar clientes' });
    }
});
```

Isso já cobre o primeiro caso. 

---

### 2. `n` dinos aleatórios

No PostgreSQL, o jeito mais simples é:

```sql
SELECT * FROM dino
ORDER BY RANDOM()
LIMIT $1
```

Rota:

```js
app.get('/dinos/random/:n', async (req, res) => {
    const n = parseInt(req.params.n);

    if (isNaN(n) || n <= 0) {
        return res.status(400).json({ error: 'O valor de n deve ser um número inteiro positivo' });
    }

    try {
        const result = await pool.query(
            'SELECT * FROM dino ORDER BY RANDOM() LIMIT $1',
            [n]
        );

        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao buscar dinos aleatórios' });
    }
});
```

---

### 3. `n` dinos com maior fama

Aqui assumo que tua tabela tem uma coluna `fama`.

SQL:

```sql
SELECT * FROM dino
ORDER BY fama DESC
LIMIT $1
```

Rota:

```js
app.get('/dinos/top/fama/:n', async (req, res) => {
    const n = parseInt(req.params.n);

    if (isNaN(n) || n <= 0) {
        return res.status(400).json({ error: 'O valor de n deve ser um número inteiro positivo' });
    }

    try {
        const result = await pool.query(
            'SELECT * FROM dino ORDER BY fama DESC LIMIT $1',
            [n]
        );

        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao buscar dinos mais famosos' });
    }
});
```

---

## Ordem das rotas importa

Como tu já tem:

```js
app.get('/dinos/:id', async (req, res) => {
```

essa rota genérica pode capturar caminhos que tu queria tratar como especiais, dependendo da ordem. Ela já existe no teu arquivo atual. 

Então o ideal é declarar nesta ordem:

```js
app.get('/dinos', ...)
app.get('/dinos/random/:n', ...)
app.get('/dinos/top/fama/:n', ...)
app.get('/dinos/:id', ...)
```

Ou seja: **rotas mais específicas antes da rota genérica por id**.

---

## Melhor ainda: usar query params

Se quiser uma API mais flexível sem multiplicar rotas, uma alternativa elegante seria manter uma única rota de listagem com filtros opcionais:

* `GET /dinos` → todos
* `GET /dinos?random=5` → 5 aleatórios
* `GET /dinos?top=fama&limit=5` → top 5 por fama

Isso é mais “RESTzinho” para listagem. Exemplo:

```js
app.get('/dinos', async (req, res) => {
    const { random, top, limit } = req.query;

    try {
        if (random) {
            const n = parseInt(random);

            if (isNaN(n) || n <= 0) {
                return res.status(400).json({ error: 'random deve ser um número inteiro positivo' });
            }

            const result = await pool.query(
                'SELECT * FROM dino ORDER BY RANDOM() LIMIT $1',
                [n]
            );

            return res.json(result.rows);
        }

        if (top === 'fama') {
            const n = parseInt(limit) || 10;

            const result = await pool.query(
                'SELECT * FROM dino ORDER BY fama DESC LIMIT $1',
                [n]
            );

            return res.json(result.rows);
        }

        const result = await pool.query('SELECT * FROM dino');
        res.json(result.rows);

    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao buscar dinos' });
    }
});
```

## Qual das duas eu escolheria no teu caso?

Para o teu projeto, eu escolheria:

**rotas separadas**

porque:

* está mais simples
* combina com o estilo do server que tu já escreveu
* fica ótimo para primeira implementação
* facilita muito para demonstrar em aula e testar no navegador/Postman

## Minha sugestão final

Usa isso:

```js
app.get('/dinos', ...)
app.get('/dinos/random/:n', ...)
app.get('/dinos/top/fama/:n', ...)
app.get('/dinos/:id', ...)
```



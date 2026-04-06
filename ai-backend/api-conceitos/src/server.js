const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_FILE = path.join(__dirname, '..', 'data.json');

// Middlewares
app.use(cors());
app.use(express.json());

// Helpers
const readData = () => {
  const raw = fs.readFileSync(DATA_FILE, 'utf-8');
  return JSON.parse(raw);
};

const writeData = (data) => {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf-8');
};

const generateId = (items) => {
  if (items.length === 0) return 1;
  return Math.max(...items.map((i) => i.id)) + 1;
};

// ─── Routes ──────────────────────────────────────────────────────────────────

// GET /items — list all
// teste ok
app.get('/items', (req, res) => {
  try {
    const data = readData();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to read data.' });
  }
});

// GET /items/:id — get one
// teste ok
app.get('/items/:id', (req, res) => {
  try {
    const data = readData();
    const item = data.find((i) => i.id === Number(req.params.id));
    if (!item) return res.status(404).json({ error: 'Item not found.' });
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: 'Failed to read data.' });
  }
});

// POST /items — create
// teste ok
app.post('/items', (req, res) => {
  try {
    const data = readData();
    const newItem = { id: generateId(data), ...req.body };
    data.push(newItem);
    writeData(data);
    res.status(201).json(newItem);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create item.' });
  }
});

// PUT /items/:id — replace
// teste ok
app.put('/items/:id', (req, res) => {
  try {
    const data = readData();
    const index = data.findIndex((i) => i.id === Number(req.params.id));
    if (index === -1) return res.status(404).json({ error: 'Item not found.' });
    data[index] = { id: Number(req.params.id), ...req.body };
    writeData(data);
    res.json(data[index]);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update item.' });
  }
});

// PATCH /items/:id — partial update
app.patch('/items/:id', (req, res) => {
  try {
    const data = readData();
    const index = data.findIndex((i) => i.id === Number(req.params.id));
    if (index === -1) return res.status(404).json({ error: 'Item not found.' });
    data[index] = { ...data[index], ...req.body, id: Number(req.params.id) };
    writeData(data);
    res.json(data[index]);
  } catch (err) {
    res.status(500).json({ error: 'Failed to patch item.' });
  }
});

// DELETE /items/:id — delete
// teste ok
app.delete('/items/:id', (req, res) => {
  try {
    const data = readData();
    const index = data.findIndex((i) => i.id === Number(req.params.id));
    if (index === -1) return res.status(404).json({ error: 'Item not found.' });
    const [removed] = data.splice(index, 1);
    writeData(data);
    res.json({ message: 'Item deleted.', item: removed });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete item.' });
  }
});

// ─────────────────────────────────────────────────────────────────────────────

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
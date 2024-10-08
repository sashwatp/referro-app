const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection
mongoose.connect('mongodb://mongo:27017/books', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

// Book Schema
const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  genre: String,
  year: Number
});

const Book = mongoose.model('Book', bookSchema);

// API Routes
app.post('/books', async (req, res) => {
  const { title, author, genre, year } = req.body;
  const newBook = new Book({ title, author, genre, year });
  try {
    const savedBook = await newBook.save();
    res.status(201).json(savedBook);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

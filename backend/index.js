require('dotenv').config();
const express = require('express');
const multer = require('multer');
const axios = require('axios');
const app = express();
const upload = multer();

const pineconeApiKey = process.env.PINECONE_API_KEY;
const pineconeIndexUrl = process.env.PINECONE_INDEX_URL;

// Маршрут для завантаження файлів
app.post('/upload', upload.single('document'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('тю, де файл?');
  }
  const fileBuffer = req.file.buffer;
  res.send('Документ завантажено успішно.');
});

// Маршрут для відповіді на запитання
app.post('/ask', async (req, res) => {
  const { question } = req.body;
  if (!question) {
    return res.status(400).send('Забув вказати запитання lmao');
  }
  // Ну, тут типу відповідь від AI, але поки що просто так
  res.send(`Ваше запитання: ${question}`);
});

app.listen(3000, () => {
  console.log('Сервер працює на http://localhost:3000 🚀');
});

require('dotenv').config();
const express = require('express');
const multer = require('multer');
const axios = require('axios');
const app = express();
const upload = multer();

const pineconeApiKey = process.env.PINECONE_API_KEY;
const pineconeIndexUrl = process.env.PINECONE_INDEX_URL;

app.post('/upload', upload.single('document'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }
  const fileBuffer = req.file.buffer;
  res.send('Document uploaded successfully.');
});

app.post('/ask', async (req, res) => {
  const { question } = req.body;
  if (!question) {
    return res.status(400).send('No question provided.');
  }
  res.send(`Received question: ${question}`);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

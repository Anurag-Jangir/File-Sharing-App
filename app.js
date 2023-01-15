require('dotenv').config();
const mongoose = require('mongoose');
const multer = require('multer');
const express = require('express');
const app = express();

const upload = multer({ dest: 'uploads' });

mongoose.connect(process.env.DATABASE_URL);

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/upload', upload.single('file'), (req, res) => {
  console.log(req.params.dictionary);
  console.log(req.params);
  res.send('hello');
  //   console.log(req.params.dictionary);
  //   console.log(req.params.dictionary);
});

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}...`);
});

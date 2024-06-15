require('dotenv').config();
const express = require('express');

const app = express();
const port = process.env.SERVER_PORT || 3000;

app.post('/', (req, res) => {
  res.json({ msg: 'hii' });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

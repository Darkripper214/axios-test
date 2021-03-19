const express = require('express');
const app = express();

app.use(express.json());

app.use('/', (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

app.listen(4500);

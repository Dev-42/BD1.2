const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.get('/check-number', (req, res) => {
  let number = parseFloat(req.query.number);
  let result;
  if (number > 0) result = 'Positive';
  else result = 'Negetive';
  res.send('Number is ' + result);
});
app.get('/even-odd', (req, res) => {
  let number = parseFloat(req.query.number);
  let result;
  if (number % 2 === 0) result = 'Even';
  else result = 'Odd';
  res.send('Number is ', +result);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

const express = require('express');

const app = express();


app.get('/', (req, res) => {
  // res.send('<h1>Hello Express!</h1>');
  res.send({
    name: 'Jimbo',
    color: 'Red',
  });
 });

 app.listen(3000);

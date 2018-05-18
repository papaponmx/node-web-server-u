const express = require('express');

const app = express();

app.use(express.static(`${__dirname}/public`));

app.get('/', (req, res) => {
  // res.send('<h1>Hello Express!</h1>');
  res.send({
    name: 'Jimbo',
    color: 'Red',
  });
 });

app.get('/about', (req, res) => {
  res.send('About Page')
 });


 app.get('/bad', (req, res) => {
   res.send({
     errorMessage: `Something's up`,
   })
  });

 app.listen(3000);

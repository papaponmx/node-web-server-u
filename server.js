const express = require('express');
const hbs = require('hbs');

const app = express();

app.set('view engine', 'hbs');

app.use(express.static(`${__dirname}/public`));

app.get('/', (req, res) => {
  // res.send('<h1>Hello Express!</h1>');
  res.send({
    name: 'Jimbo',
    color: 'Red',
  });
 });

app.get('/about', (req, res) => {
  res.render('about.hbs');
 });


 app.get('/bad', (req, res) => {
   res.send({
     errorMessage: `Something's up`,
   })
  });

 app.listen(3000, () => {
   console.log('Serving on port 3000');
  });

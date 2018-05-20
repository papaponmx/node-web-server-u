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
  res.render('about.hbs', {
    pageTitle: 'About Page',
    currentYear: new Date().getFullYear(),
  });
 });

app.get('/home', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Home Page',
    currentYear: new Date().getFullYear(),
    welcomeMessage: `Welcome to home page. O nulla iudicem vidisse et eu cillum admodum firmissimum. Aut tempor do duis, id
    aute eiusmod senserit ex veniam est si irure ullamco est mandaremus e nostrud.
    Sint o incurreret se aliqua de illum appellat exquisitaque.Ea quae quibusdam
    arbitrantur. Expetendis cohaerescant ex senserit ne quibusdam malis singulis nam
    te nam familiaritatem, quibusdam nulla mentitum, incididunt sint aute laboris
    anim, officia sint litteris admodum, tamen occaecat consectetur, quid quamquam
    an firmissimum. Et tempor et quem si eram ea non amet voluptate.`,
  });
 });


 app.get('/bad', (req, res) => {
   res.send({
     errorMessage: `Something's up`,
   })
  });

 app.listen(3000, () => {
   console.log('Serving on port 3000');
  });

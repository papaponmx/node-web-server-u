const express = require('express');
const hbs = require('hbs');

const app = express();

hbs.registerPartials(`${__dirname}/views/partials`);
app.set('view engine', 'hbs');

app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  const now = new Date().toString();
  console.log(`${now}: ${req.method} ${req.url}`);
  next();
});

hbs.registerHelper('getCurrentYear', () => new Date().getFullYear());

hbs.registerHelper('screamIt', (text) => text.toUpperCase());

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
  });
 });

app.get('/home', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Home Page',
    currentYear: new Date().getFullYear(),
    welcomeMessage: `Welcome to home page. O nulla iudicem vidisse et eu cillum admodum firmissimum. Aut tempor do duis, id
    aute eius`,
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

const express = require('express');
const path = require('path');
const data = require('./data');

//initialize express
const app = express();

//ejs set up
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public'));

app.use('/static', express.static(path.join(__dirname, 'static')));

//create routes
app.get('/', (req, res) => {
  res.render('index.ejs', {
    title: 'Home | welcome',
  });
});

app.get('/about', (req, res) => {
  res.render('about.ejs', {
    title: 'About',
  });
});

app.get('/contact-us', (req, res) => {
  res.render('contact.ejs', {
    title: 'Contact-us',
  });
});

app.get('/api/person/:id', (req, res) => {
  console.log(req.params);
  res.json({ message: data, personId: req.params.id });
});

app.get('/api/person', (req, res) => {
  res.json({ message: data });
});

//handling 404 errors
app.use('*', (req, res) => {
  res.render('404.ejs', {
    title: 'Page not found',
    url: req.originalUrl,
  });
});

//listen to my port
const port = 4000;
app.listen(port, () => console.log(`Server is running on localhost:${port}`));

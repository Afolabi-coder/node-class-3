const http = require('http');
const url = require('url');
const fs = require('fs');

const data = require('./data');

const { person } = data;

/*
  GET METHOD
  POST METHOD
  PATCH/PUT METHOD
  DELETE METHOD
*/

/**
 * We created home route
 * create a rout for about page, contact page
 */
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    //read file
    const homePage = fs.readFileSync('./public/index.html', 'utf-8');

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(homePage);

    res.end();
  } else if (req.url === '/about') {
    const aboutPage = fs.readFileSync('./public/about.html', 'utf-8');

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(aboutPage);
    res.end();
  } else if (req.url === '/contact-us') {
    const contactPage = fs.readFileSync('./public/contact.html', 'utf-8');

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(contactPage);
    res.end();
  } else if (req.url === '/api/person') {
    //sending response as json
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify({ message: person }));
    res.end();
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write('<h1>404 page not found</h1>');
    res.end();
  }
});

const port = 3000;

server.listen(port, () => {
  console.log(`server is running on localhost:${port}`);
});

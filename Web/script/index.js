const http = require('http');
const fs=require('fs');
const { url } = require('inspector');

const home=fs.readFileSync('./home.html')
const about=fs.readFileSync('./about.html')
const services=fs.readFileSync('./services.html')

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  //console.log(req.url);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  // url=req.url;
  // if(url=='/')
  // res.end(home);
  // else if(url=='/about')
  // res.end(about);
  // else if(url=='/services')
  // res.end(services);
  // else{
  //   res.statusCode=404;
  // res.end("404 not found");
  // }
  if(req.url=='/')
  res.end(about);
  else
  res.end(home);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
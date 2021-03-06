const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Perfume</title>
      <style>
          body {
              background-image: url(https://cdn.pixabay.com/photo/2018/01/10/13/47/essential-oil-3073901_960_720.jpg);
              background-repeat: no-repeat;
              background-size: cover;
              /* height: 5000px; */
          }
  
          img {
              height: 119px;
              border-radius: 43px;
          }
  
          .left {
              display: inline-block;
              color: white;
              text-decoration: none;
              /* border: 4px solid black; */
              margin: 67px;
          }
  
          .left-mid {
              display: inline-block;
              color: white;
              text-decoration: none;
              padding-top: 4px;
              margin: 90px;
          }
  
          .right-mid {
              display: inline-block;
              color: white;
              text-decoration: none;
              margin: 72px;
          }
  
          .right {
              display: inline-block;
              color: white;
              text-decoration: none;
              margin: 101px;
          }
      </style>
  </head>
  
  <body>
      <img src="https://i.pinimg.com/736x/88/49/af/8849af8414cf241c9e0539ab7e0ce2bd.jpg">
      <div class="left">
          Home
      </div>
      <div class="left-mid">
          Contacts
      </div>
      <div class="right-mid">
          Services
      </div>
      <div class="right">
          About Us
      </div>
  </body>
  
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
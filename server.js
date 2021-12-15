const http = require('http');
const host = 'http://localhost';
const port = 3000;
const stats = require('./pcRamUsage');

http.createServer((req, res) => {
  let url = req.url;

  if (url === '/stats') { //rota secreta
    res.end(JSON.stringify(stats, null, 2));
  } else { //rota padrão
    res.end('<h1>Oi, seja bem vinde!!</h1>');
  }
  
}).listen(port, () => console.log(`Server is running in ${host}:${port}`));
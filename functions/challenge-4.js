const fs = require('fs');
const path = require('path');

function getText(caminho) {
  return new Promise(resolve => {
    fs.readFile(caminho, function(_, conteudo) {
      resolve(conteudo.toString());
    })
    console.log('Depois de ler')
  });
};

const caminho = path.join(__dirname, 'dadosPromise.txt');

getText(caminho)
  .then(conteudo => console.log(conteudo))
// Importar o express
const express = require ('express');
// Iniciar express
const app = express();
// Nome da pasta no dist que será feito o build
const appName = 'angular-bank';
// Local onde o build irá gerar os arquivos
const outputPath = `${__dirname}/dist/${appName}`;
// Setar o diretorio de build para servir o conteúdo angular
app.use(express.static(outputPath));
// Redirecionar qualquer requisição para o index.html
app.get('/*', (req, res) => {
  res.sendFile(`${outputPath}/index.html`);
})
// Ouvir a porta que o heroku disponibilizar
app.listen(process.env.PORT);

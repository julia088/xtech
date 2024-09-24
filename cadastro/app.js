const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./db'); 
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json()); 
app.use(express.static('public'));

app.post('/login', (req, res) => {
  const {email, senha } = req.body;

  const query = 'SELECT * FROM usuario WHERE email = ? AND senha = ?';
  connection.query(query, [email, senha], (err, results) => {
    if (err) {
      console.error('Erro na consulta ao banco de dados:', err);
      return res.status(500).send('Erro no servidor');
    }

    if (results.length > 0) {
      return res.status(200).send('Login bem-sucedido!');
    } else {
      return res.status(401).send('E-mail ou senha incorretos!');
    }
  });
});


app.post('/cadastro', (req, res) => {
    const {email, senha} = req.body;
    const query = 'INSERT INTO usuario (email, senha) values (?, ?)';

    connection.query(query, [email, senha], (err, result) => {
        if (err) {
            console.error('Erro ao inserir no banco de dados: ' + err.stack);
            return res.status(500).send('Erro ao cadastrar o email.');
        }
        res.redirect('/login.html');
    });
});


app.listen(5505, () => {
  console.log('Servidor rodando na porta 5505');
});

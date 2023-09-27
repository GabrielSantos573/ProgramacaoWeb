const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();

app.engine('html', mustacheExpress()); //ligando o "motor" pra renderizar o arquivo html na pagina(fazer a junção)
app.set('viwe engine', 'html');
app.set('views', __dirname + '/views');

app.use(express.urlencoded({extended: true})); //serve pro site receber a requisição via post

app.get('/', function (req, res) { //:n variavel na url 
    let usuario ={
        nome: "Gabriel",  // req.params.n pra receber pela url 
        telefone: 982514119
    };

    res.render('index.html', {usuario});
});

app.post('/dados', function (req, res) {
    let usuario ={
        nome: req.body.nome, //body pq ta no corpo da requisição
        telefone: req.body.telefone
    };
    res.render('dados.html', {usuario});
});

const PORT = 8080; 
app.listen(PORT, function () {
    console.log('app rodando na porta ' + PORT);
});


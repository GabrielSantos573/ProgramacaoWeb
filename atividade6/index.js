const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();

app.engine('html', mustacheExpress()); //ligando o "motor" pra renderizar o arquivo html na pagina(fazer a junção)
app.set('viwe engine', 'html');
app.set('views', __dirname + '/views');

app.use(express.urlencoded({extended: true})); //serve pro site receber a requisição via post

app.get("/", function (req, res) {
    res.render("index.html");
})

app.post("/dados", function (req, res) {
    let agendamento = {
        nome: req.body.nome,
        endereco: req.body.endereco,
        telefone: req.body.telefone,
        data_agendamento: req.body.data_agendamento,
    }
    
    let erro_form = false;

    if (agendamento.nome == "") {
        erro_form =true;
    }

    if (agendamento.endereco == "") {
        erro_form =true;
    }

    if (agendamento.telefone == "") {
        erro_form =true;
    }

    if (agendamento.data_agendamento == "") {
        erro_form =true;
    }

    res.render("dados.html", {agendamento, erro_form});
});

const PORT = 8080;
app.listen(PORT, function () {
    console.log("app rodando na porta " + PORT);
});

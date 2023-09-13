const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();

const PORT =8080;

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.get("/:nome", function (req, res) {
    let nome = req.params.nome;
    res.render("index.html", {nome});
})

app.listen(PORT, function () {
    console.log("APP RODANDO NA PORTA"+PORT);
})

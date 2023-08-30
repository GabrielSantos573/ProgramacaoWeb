const calculadora = require("./util/calculadora");
const express = require('express');

const app = express();

app.get("/hello", function(req, res){
    res.send("Olá mundo web!!!");
});

const PORT = 8080;
app.listen(PORT, function() {
    console.log("APP RODANDO NA PORTA "+PORT);
});

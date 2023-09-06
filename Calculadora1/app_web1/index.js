const calculadora = require("./util/calculadora");
const express = require('express');

const app = express();

app.get("/hello", function(req, res){
    res.send("Olá mundo web!!!");
});

app.get("/somar/:a/:b", function(req, res){  // : - indica que é uma variavel da url
    let a = req.params.a; //sERVE PRA RECEBER OS VALORES DA URL
    let b = req.params.b;
    res.send(`${a} + ${b} = ${(calculadora.somar(a, b))}`);
});

app.get("/subtrair/:a/:b", function(req, res){  
    let a = req.params.a; 
    let b = req.params.b;
    res.send(`${a} - ${b} = ${(calculadora.subtrair(a, b))}`);
});

app.get("/multiplicar/:a/:b", function(req, res){  
    let a = req.params.a; 
    let b = req.params.b;
    res.send(`${a} * ${b} = ${(calculadora.multiplicar(a, b))}`);
});

app.get("/dividir/:a/:b", function(req, res){  
    let a = req.params.a; 
    let b = req.params.b;
    res.send(`${a} - ${b} = ${(calculadora.dividir(a, b))}`);
});

const PORT = 8080;
app.listen(PORT, function() {
    console.log("APP RODANDO NA PORTA " +PORT);
});

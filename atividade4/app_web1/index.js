const calc = require('./util/calculadora');
const express = require('express');

const app = express();

app.get("/somar/:a/:b", function(req, res){
    let n1 = req.params.n1;
    let n2 = req.params.n2;
    res.send(`${n1}+ ${n2} = ${calc.somar(n1,n2)}`); 
});

app.get("/subtrair/:a/:b", function(req, res){
    let n1 = req.params.n1;
    let n2 = req.params.n2;
    res.send(`${n1}+ ${n2} = ${calc.subtrair(n1,n2)}`); 
});

app.get("/multiplicar/:a/:b", function(req, res){
    let n1 = req.params.n1;
    let n2 = req.params.n2;
    res.send(`${n1}+ ${n2} = ${calc.multiplicar(n1,n2)}`); 
});

app.get("/dividir/:a/:b", function(req, res){
    let n1 = req.params.n1;
    let n2 = req.params.n2;
    res.send(`${n1}+ ${n2} = ${calc.dividir(n1,n2)}`); 
});

const PORT = 80;
app.listen(PORT, function(){
    console.log("app rodando na porta " + PORT);
});
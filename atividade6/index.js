const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();

app.get("/", function (req, res) {
    res.send("Formulário");
});

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.get("/views/index.html", function(req, res){
    res.render("/views/index.html");
});

const PORT = 8080;
app.listen(PORT, function () {
    console.log('app rodando na porta ' + PORT);    
});
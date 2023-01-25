var express = require('express')
var app = express();

app.get('/home', function(req, res) {
    res.send('pagina inicial');
});

app.get('/JovemTech/listaalunos', function(req, res) {
    res.send('pagina para listar alunos matriculados');
});

app.get('/JovemTech/professores', function(req, res) {
    res.send('pagina para listar professores');
});

app.get('/JovemTech/cursos', function(req, res) {
    res.send('pagina para informar cursos ofertados');
});

app.get('/JovemTech/inscriçao', function(req, res) {
    res.send('pagina de inscriçao');
});

app.get('/JovemTech/comentarios', function(req, res) {
    res.send('pagina para deixar seu comentario');
});

app.listen(8081,function(){
    console.log('servidor rodando na porta http://localhost:8081/');
});
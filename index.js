var express = require('express')
var app = express();
const handlebars = require ('express-handlebars')
const bodyParser = require ('body-Parser')
const Comment = require ('./models/comment')
//Config
  //Template Engine
  app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
//Body Parser
app.use(bodyParser.urlencoded({extended:false}))
app.set(bodyParser.json())
//Rotas Inicial
        app.get('/',function(req,res){
            Comment.findAll({order:[['id','DESC']]}).then(function(comments){
                res.render('home', {comments:comments})
            })
             }) 
 //Rota do Formulario
        app.get('/form',function(req,res){
            res.render('formulario.handlebars')
        }) 
//Rotas "post" so pode ser  acessada quando alguem faz uma requisição
        app.post('/add',function(req,res){
            comment.create({
                titulo: req.body.titulo,
                conteudo: req.body.conteudo
            }).then(function(){
                res.redirect('/')
            }).catch(function(erro){
                res.send("Comentario nao pode ser criado" + erro)
            })
        })

        //Rota para deletar comentarios
        app.get('/deletar/:id',function(req,res){
            comment.destroy ({where: {'id':req.params.id}}).then(function(){
                res.send("Comentario deletado com sucesso")
            }).catch(function(erro){
                res.send('Ocorreu um erro')
            })
        })

app.listen(8081,function(){
    console.log("Servidor rodando na porta http://localhost:8081/");
});



app.use (express.static(__dirname + '/public'));

app.get('/home', function(req, res) {
    res.sendFile(__dirname + '/public/HTML/home.html')
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
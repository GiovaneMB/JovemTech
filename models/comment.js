const {Sequelize,sequelize} = require('./db')

const db = require ('./db')

const Comment = db.sequelize.define('comentarios',{
    titulo:{
        type: db.Sequelize.STRING
    },
    conteudo:{
        type: db.Sequelize.TEXT
    }
})

module.exports = Comment



//Comando para criar a tabela, executar SOMENTE uma vez
//Comment.sync({force:true}) 

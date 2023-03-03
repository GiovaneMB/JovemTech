const Sequelize = require ('sequelize')

//Fazendo conexao com o banco de dados 
const sequelize = new Sequelize ('jovemtech','root','1234',{
    host: "localhost",
    dialect: 'mysql',
    query: {raw:true}
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}

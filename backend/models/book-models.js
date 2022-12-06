// ilk önce databse import ediyoruz const db=require('../database')
const { DataTypes } = require('sequelize')
const db=require('../database/index')


// sonra tablomuzu oluşturuyoruz
// User burada modelin adı sonrası kolonları 
const bookModel=db.sequelize.define('Book',{
    bookName:{
        type:DataTypes.STRING(50),
        
        
    }
},
{
    createAt:true,
    deleteAt:true,
    version:true,
    updateAt:true,

})

module.exports=bookModel;
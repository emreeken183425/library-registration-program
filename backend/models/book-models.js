// ilk önce databse import ediyoruz const db=require('../database')
const { DataTypes } = require('sequelize')
const db=require('../database/index')


// sonra tablomuzu oluşturuyoruz
// User burada modelin adı sonrası kolonları 
const bookModel=db.sequelize.define('LİBRARY',{
    bookName:{
        type:DataTypes.STRING(50),
        
        
    },
    author:{
        type:DataTypes.STRING(50),
        
       
    },
    category:{
        type:DataTypes.STRING(50),
      
        
    },
    publisher:{
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
// ilk önce databse import ediyoruz const db=require('../database')
const { DataTypes } = require('sequelize')
const db=require('../database/index')


 
const categoryModel=db.sequelize.define('Category',{
    category:{
        type:DataTypes.STRING(50)   
    }
},
{
    createAt:true,
    deleteAt:true,
    version:true,
    updateAt:true,

})

module.exports=categoryModel;
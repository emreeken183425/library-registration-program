const { DataTypes } = require('sequelize')
const db=require('../database')

const bookModel=db.sequelize.define('Book',{
    bookName:{
        type:DataTypes.STRING(50),
        allowNull:false,
       
    }
},
{
    createAt:true,
    deleteAt:true,
    updateAt:true,

}
)

module.exports={
    bookModel
}
// sequelize import ettik ilk önce
const Sequelize=require('sequelize')
let db={};
// postgresql ile bağlantı kurduk burada
const sequelize=new Sequelize({
host:'localhost',
dialect:'postgres',
database:'library',
username:'postgres',
password:'183425',
port:5433,
pool:40,
retry:3,
logging:true
});

const CONNECT_DB=async(req,res)=>{
    try {
        await sequelize.authenticate({logging:true});
        console.log('sequelzie bağlandı');
    } catch (error) {
        return console.log(`${error.message} `);
    }
}


db.CONNECT_DB=CONNECT_DB;
db.sequelize=sequelize;
// export ettik en son sonra expressjs e gidip çağıracağız
module.exports=db;






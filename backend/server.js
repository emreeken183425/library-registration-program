const express=require('express')
const app =express();
const db=require('./database')
const bookRoute=require("./routes/bookRoutes")



app.use(express.json())// req.body .alışması için 

app.use(bookRoute)


db.CONNECT_DB();







const port=5000;
app.listen(port,()=>{
  //db.REFRESH_DB();// bir kere çalıştır databsede oluştu sonra yoruma al almassan tekrar aynısı oluşur
    console.log(`localhost:${port} is active `);
})
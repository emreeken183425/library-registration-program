const express=require('express')
const app =express();
const db=require('./database/index')



app.use(express.json());






db.CONNECT_DB();




const port=6000;

app.listen(port,()=>{
    db.REFRESH_DB();
    console.log(`localhost:${port} is active `);
})
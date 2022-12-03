const express=require('express')
const app =express();
const db=require('./database/index')

db.CONNECT_DB();
const port=5000;
app.listen(port,()=>{
    console.log(`localhost:${port} is active `);
})
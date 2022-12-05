const express=require('express')
const app =express();
const db=require('./database/index')
const opRoute=require('./routes/bookRoutes')


app.use(express.json());


app.use(opRoute)



db.CONNECT_DB();




const port=4000;

app.listen(port,()=>{
    //db.REFRESH_DB();
    console.log(`localhost:${port} is active `);
})
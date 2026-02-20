import express from 'express';
import router from './routes.js';


const app=express();


app.use("/apis",router);


app.listen(3000,()=>{
    console.log("port 3000")
})

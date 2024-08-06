import App from "./App.js";

import express from 'express'
import env from 'dotenv'
import router from "./routers/user.router.js";

env.config()

const app = express();

app.use('/api',router)
app.get('/',(req,res)=>{
    res.send('<h1>WELCOME TO THE EMAILSENDER</h1>')
})

app.listen(process.env.PORT || 5000,()=>{
    console.log('your app is running on Port 4000' + process.env.PORT)
})

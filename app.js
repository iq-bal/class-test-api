const express = require('express')
const app = express()
const classTest = require('./route/class-test')
const connectDB = require('./db/connect')
require('dotenv').config()

app.use(express.json()); 
app.use('/api/class-test', classTest); 

const start = async()=>{
    try {
        await connectDB(process.env.MONGO_URI); 
        app.listen(3000,()=>{
            console.log('listening on port 3000...')
        })
    } catch (error) {
        console.log(error); 
    }
}

start(); 



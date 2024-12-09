import express from 'express'
import dotenv from 'dotenv'
import connectDB from './src/config/db.js'

dotenv.config()
const app = express()

app.listen(3000, () =>{
    console.log('Escuchando puerto 3000')
})
connectDB()

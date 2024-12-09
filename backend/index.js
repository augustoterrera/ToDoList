import express from 'express'
import connectDB from './src/config/db.js'


const app = express()

app.listen(3000, () =>{
    console.log('Escuchando puerto 3000')
})
connectDB()

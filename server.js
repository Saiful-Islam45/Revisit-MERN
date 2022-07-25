const express = require('express');
const cors = require('cors');
const connectDB= require('./mongodb')
const todoRoute= require('./route/todoRoute.js')

const app= express();

app.use(express.json())
app.use(cors())

connectDB()

app.use('/api', todoRoute)

const PORT=5000
app.listen(PORT, () => {
    console.log(`Server is Running at ${PORT}`)
})
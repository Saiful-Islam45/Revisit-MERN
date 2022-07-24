const express = require('express');
const cors = require('cors');
const connectDB= require('./mongodb')

const app= express();

app.use(express.json())
app.use(cors())
connectDB()
const PORT=5000
app.listen(PORT, () => {
    console.log(`Server is Running at ${PORT}`)
})
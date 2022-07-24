const mongoose = require('mongoose');

const connectDB = () =>{
    mongoose.connect("mongodb://127.0.0.1:27017/revisit-MERN", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=> console.log('Database is Connected'))
    .catch(console.error)

}
module.exports = connectDB
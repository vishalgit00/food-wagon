const mongoose  = require('mongoose');

const dbconnect = ()=>{
    mongoose.connect("mongodb+srv://potterprmr123:vishal123@cluster0.1nbdnav.mongodb.net/myproject")
    .then(()=>{
        console.log('Database Connected Succefully')
    })
    .catch((err)=>{
        console.log("Database is not Connect")
        process.exit(1)
    })
} 

module.exports = dbconnect
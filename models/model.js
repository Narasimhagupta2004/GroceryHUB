// const mongoose = require('mongoose');
// let Registeruser = new mongoose.Schema({
//     username:{
//         type : String,
//         required : true,
//     },
//     email:{
//     type:String,
//     required:true,
//     unique : true,
//     },
//     password:{
//         type:String,
//         required:true,
//     },
//     confirmpassword:{
//         type:String,
//         required : true,
//     }
// })

// module.exports = mongoose.model('Registeruser',Registeruser);
// models/model.js
// models/model.js
const mongoose = require('mongoose');

const RegisteruserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Registeruser', RegisteruserSchema);
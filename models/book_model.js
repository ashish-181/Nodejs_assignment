const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const book_schema = new Schema({
    name:{
        type : String,
        // required : true
    },
    Image_url : {
        type : String
    },
    Author : {
        type : String
    },
    Pages:{
        type : Number
    },
    Price:{
        type : Number
    }
})


module.exports = mongoose.model("Books", book_schema);

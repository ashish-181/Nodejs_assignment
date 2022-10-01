const expres = require("express")
const app = expres()
// const cors = require('cors');
const mongoose = require('mongoose');
const uri = "mongodb://localhost:27017/mydatabase";

mongoose.connect(uri, {useNewUrlParser: true});
const db = mongoose.connection;

app.use(expres.json())
// mongoose.connection.on('error', err => {
//     console.log(err);
//   });

// db.once('open' ()=>{
//     console.log("database connected");
// })
//db.on("open", console.bind.log (console, "MongoDB connection error"))
db.on("open", ()=>{
    console.log("connected..")
})
db.on("error", console.error.bind(console, "MongoDB connection error"));

const books_route = require("./routes/books_routes");

app.use("/books", books_route);

app.listen(3000,()=>{
    console.log("server started");
})

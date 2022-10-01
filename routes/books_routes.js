const express = require("express")
const router = express.Router()
const Books = require("../models/book_model")

router.get("/", async(req,res) =>{
    try{
        console.log("success get the all records")
        const books = await Books.find() // return all data
        res.json(books);
    }catch(err){
        res.send("Error "+err);
    }
    // res.send("Ok");
    // console.log("ok");
})

router.get("/:id", async(req,res) =>{
    try{
        console.log("success in finding the data of a particlur id")
        const books = await Books.findById(req.params.id) // return all data
        res.json(books);
    }catch(err){
        res.send("Error "+err);
    }
    // res.send("Ok");
    // console.log("ok");
})

router.post("/", async(req,res) =>{
    const book = new Books({
        name: req.body.name,
        Image_url : req.body.Image_url,
        Author : req.body.Author,
        Pages:req.body.Pages,
        Price: req.body.Price
    })
    try {
        await book.save();
        res.json(book);
    } catch (error) {
        res.send("error");
        console.log(error);
    }
})
router.post("/:id" , async(req,res) =>{

    await Books.findByIdAndUpdate(req.params.id,
        {
            name : req.body.name,
            Image_url : req.body.Image_url,
            Author : req.body.Author,
            Pages : req.body.Pages,
            Price : req.body.Price
        },
        {new : true}
    );
    try{
        console.log(" Updated ")
        const books = await Books.findById(req.params.id) // return all data
        res.json(books);
    }catch(err){
        res.send("Error "+err);
    }
})

router.delete("/:id" , async(req,res) =>{
    try {
        const books = await Books.findByIdAndDelete(req.params.id);
        //await books.delete();
        res.send("deleted the data ");
    } catch (error) {
        res.send("error");
        console.log(error);
    }
})

module.exports = router;
const express=require("express");
const path=require("path");
const game=express();

game.use(express.static('public'));
game.use('/img',express.static(path.join(__dirname,'img')));

game.get("/",function(req,res){
    res.sendFile(path.join(__dirname,"index.html"));
})
game.get('/style.css',function(req,res){
    res.sendFile(path.join(__dirname,"/"+"style.css"));
})
game.get('/script.js',function(req,res){
    res.sendFile(path.join(__dirname,"/","script.js"));
})
game.listen(5000,function(){
    console.log("Server Initiated");
})
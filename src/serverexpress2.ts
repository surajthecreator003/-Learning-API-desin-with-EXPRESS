import server from "./server express";

import express from "express";

import morgan from "morgan";

import router from "./router";



server.use(morgan("dev"))

server.use(express.urlencoded({extended:true}))

server.use((req,res,next)=>{req.shhh_secret="doggy";
//supppose we did
res.status(400);
res.send("Nope");
//
return next()
console.log("yeahhhhhhh am in 3rd middle ware")})//custom midddleware

server.get("/",(req,res)=>{res.json({message2:req.shhh_secret,message:"hello am the root page"})})

server.use("/app",router)

server.listen(8001);  


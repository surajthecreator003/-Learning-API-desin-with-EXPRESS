import express from "express";

const { addListener } = require("process");

const server=express();

server.get("/",(req,res)=>{

    res.status(200);
    res.json({message:"wtf am in  a serverrrr wowo",message1:"wtf am in  a serverrrr wowo"})
})

const a=[]



export default server;





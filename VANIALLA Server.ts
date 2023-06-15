import * as http from "http";

const server=http.createServer((reqq,res)=>{
    if(reqq.method==="GET"){
        // console.log(reqq,res)
        console.log("Hello fromserver");
        res.end();//closing the connection
    }
})

server.listen(8002,()=>{console.log("yeahhhhh")})
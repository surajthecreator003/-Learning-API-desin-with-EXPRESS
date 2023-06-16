import {Router} from "express";
import morgan from "morgan";

const router=Router();

router.get("/product",(req,res)=>{res.json({message:"wth"})})
router.get("/product:/id",()=>{})
router.put("/productt:/id",()=>{})
router.post("/product",()=>{})
router.delete("/product:/id",()=>{})


router.get("/update",(req,res)=>{res.json({message:"in update route"})})
router.get("/update:/id",()=>{})
router.put("/update:/id",()=>{})
router.post("/update",()=>{})
router.delete("/update:/id",()=>{})



 router.get("/updatepoint",()=>{})
 router.get("/updatepoint:/id",()=>{})
 router.put("/updatepoint:/id",()=>{})
 router.post("/updatepoint",()=>{})
 router.delete("/updatepoint:/id",()=>{})

 export default router;

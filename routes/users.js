import express from "express";
const router = express.Router();

router.get('/', (req, res)=>{
    res.send("user routes test...")
});

export default router;
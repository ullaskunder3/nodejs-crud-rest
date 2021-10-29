import express from "express";
import userRoutes from "./routes/users.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/users', userRoutes)
app.use('/', (req, res)=>{
    res.send("Home Page...")
})

app.listen(PORT, (req, res)=>{
    console.log('Server is running... on the PORT:', PORT);
})
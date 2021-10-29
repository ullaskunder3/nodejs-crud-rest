import express from "express";
const router = express.Router();

const users = [
    {
        fName: "Ullas",
        lName: "Kunder",
        skillLevel : 8.5,
        ranking: 3
    }
]

router.get('/', (req, res)=>{
    res.send(users)
});
router.post('/', (req, res)=>{
    console.log('Post is been made by the client...');
    const user = req.body;
    users.push(user)

    res.send(`Hello ${user.fName}`);
})

export default router;
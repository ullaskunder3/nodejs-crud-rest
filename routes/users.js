import express from "express";
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

const users = [
]

router.get('/', (req, res)=>{
    res.send(users)
});
router.post('/', (req, res)=>{
    console.log('Post is been made by the client...');

    const user = req.body;
    const userWithId = {...user, id:uuidv4()}

    users.push(userWithId)
    res.send(`Hello ${user.fName}`);
})
router.get('/:id', (req, res)=>{
    const { id: searchId } = req.params;
    const founduser = users.find((user)=>user.id === searchId);
    res.send(founduser)
})

export default router;
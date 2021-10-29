import express from "express";
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

let users = [
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

router.delete('/:id', (req, res)=>{
    const {id: deleteId } = req.params;
    users = users.filter((user)=>{
        user.id !== deleteId
    })

    res.send(`User with ${deleteId} id has been deactivated `);
})

router.patch('/:id', (req, res)=>{
    const {id: updateUser} = req.params;
    const {fName, lName, skillLevel, ranking} = req.body;
    const updateUserData = users.find((user)=>user.id === updateUser)

    if(fName){
        updateUserData.fName = fName;
    }
    if(lName){
        updateUserData.lName = lName;
    }
    if(skillLevel){
        updateUserData.skillLevel = skillLevel;
    }
    if(ranking){
        updateUserData.ranking = ranking;
    }

    res.send('User data has been updated...')

})

export default router;
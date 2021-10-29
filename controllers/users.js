import { v4 as uuidv4 } from 'uuid';

let users = []

const getUser = (req, res)=>{
    res.send(users)
}
const createUser = (req, res)=>{
    console.log('Post is been made by the client...');

    const user = req.body;
    const userWithId = {...user, id:uuidv4()}

    users.push(userWithId)
    res.send(`Hello ${user.fName}`);
}
const getUserDetail = (req, res)=>{
    const { id: searchId } = req.params;
    const founduser = users.find((user)=>user.id === searchId);

    res.send(founduser)
}
const deleteUser = (req, res)=>{
    const {id: deleteId } = req.params;
    users = users.filter((user)=> user.id !== deleteId)

    res.send('user has been deleted...')
}
const updateUser = (req, res)=>{
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

}
export {
    getUser,
    createUser,
    getUserDetail,
    deleteUser,
    updateUser
}
import UserMessage from '../models/userMessage.js';

export const getUsers = async (req, res) => {
    try{
        const users = await UserMessage.find();

        res.status(200).json(users);
    } catch (error) {
        res.status(404).json( { message: error.message });
    }
}

export const createUser = async (req, res) => {
    const user = req.body; 

    const newUser = new UserMessage(user);

    try{
        await newUser.save();

        res.status(201).json(newUser);
    } catch (error){
        res.status(409).json( { message: error.message });
    }    
}

export const deleteUser = async (req, res) => {
    console.log("server delete", req.params.id)
    const toDelete = await UserMessage.findOne({_id: req.params.id});
    if(!toDelete){
        return res.status(400).json({ error: "user does not exist"})
    } 
    try{
        await UserMessage.deleteOne({_id:req.params.id});

        res.status(200).json(toDelete);
    } catch (error){
        res.status(409).json( { message: error.message });
    }    
}

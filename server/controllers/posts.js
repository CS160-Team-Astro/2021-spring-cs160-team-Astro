import PostMessage from '../models/postMessage.js';

export const getPosts = async (req, res) => {
    try{
        const postMessages = await PostMessage.find();

        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json( { message: error.message });
    }
}

export const createPost = async (req, res) => {
    const post = req.body; 

    const newPost = new PostMessage(post);

    try{
        await newPost.save();

        res.status(201).json(newPost);
    } catch (error){
        res.status(409).json( { message: error.message });
    }    
}

export const deletePost = async (req, res) => {
    console.log("server delete", req.params.id)
    const toDelete = await PostMessage.findOne({_id: req.params.id});
    if(!toDelete){
        return res.status(400).json({ error: "thread does not exist"})
    } 
    try{
        await PostMessage.deleteOne({_id:req.params.id});

        res.status(200).json(toDelete);
    } catch (error){
        res.status(409).json( { message: error.message });
    }    
}
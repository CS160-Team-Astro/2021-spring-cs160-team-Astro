import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
});
postSchema.set("toJSON", {transform: (document, object) => {
    object.id = object._id.toString()
    delete object._id
}})

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;


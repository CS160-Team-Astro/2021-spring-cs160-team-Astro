import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: String,
    followers: Number,
    upvotes: Number,
    verified: Boolean,
    musician: Boolean,
    promoter: Boolean,
    city: String,
    age: Number,
    birthday: Date,
    username: String,
    password_hash: String,
    birth_day: Number,
    joined_date: Date,
    profile_image: Buffer,
    posts: [{type:mongoose.Schema.Types.ObjectId, ref:"PostMessage"}]
});
userSchema.set("toJSON", {transform: (document, object) => {
    object.id = object._id.toString()
    delete object._id
}})

const userMessage = mongoose.model('userMessage', userSchema);

export default userMessage;
import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title:{
        type:String,
    },
    message:{
        type:String,
    },
    creator:{
        type:String,
    },
    title:{
        type:[String],
    },
    selectedFile:{
        type:String,
    },
    likes:{
        type:Number,
        default:0,
    },
    createdAt:{
        type:Date,
        default:new Date(),
    },
});

const PostMessage = mongoose.model('PostMessage',postSchema);

export default PostMessage;
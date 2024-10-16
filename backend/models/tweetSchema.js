import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    like:{
        type:Array,
        default:[]
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    bookmarks:{
        type:Array,
        default:[]
    },
}, {timestamps:true}) // kon se time pe account create kiya
export const Tweet = mongoose.model("Tweet", tweetSchema);
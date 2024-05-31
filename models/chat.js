//creating schema and model(collections)

const mongoose=require("mongoose");

const chatSchema= new mongoose.Schema({
    from:{
        type:String,
        requried:true,
    },
    to:{
        type:String,
        requried:true,
    },
    msg:{
        type:String,
    },
    created:{
        type:Date,
    },
});

const Chat=mongoose.model("Chat",chatSchema);
module.exports=Chat;

const express=require("express");
const app= express();
const port=8080;
const mongoose=require("mongoose");
const path=require("path");
const Chat=require("./models/chat.js");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
const methodOverride=require("method-override");
app.use(methodOverride("_method"));
app.set("view engine","ejs");


//connecting mongoose to our app/server
main().then(()=>{
    console.log("connection succes");
}).catch((err)=>{
    console.log(err);
});
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

//creating index route whoch shows all the messages 
//here Chats.find() is a asynchronus function which takes time to get some value from databases,
//so we had to use await function in async function only so that we made that function call as async 

app.get("/chats",async (req,res)=>{
    const chats=await Chat.find();
    console.log(chats);
    res.render("index.ejs",{chats});
});

//create a new message
app.get("/chats/new",(req,res)=>{
    res.render("new.ejs");
})
//create a route to create a message
app.post("/chats",(req,res)=>{
    let {from,to,msg}=req.body;
    const chat=new Chat({
        from:from,
        to:to,
        msg:msg,
        created:new Date(),
    });
    chat.save()
    res.redirect("/chats")
});

//create a route to edit message
app.get("/chats/:id/edit",async (req,res)=>{
    let {id}=req.params;
    const chat=await Chat.findById(id);
    console.log(chat.msg)
    res.render("edit.ejs",{chat});
});
app.put("/chats/:id",async (req,res)=>{
    let {id}=req.params;
    const {msg:newMsg}=req.body;
    console.log(newMsg);
    const chat=await Chat.findByIdAndUpdate(id,{msg:newMsg});
    res.redirect("/chats");
});

//create a route to delete a messgae
//using get
/*
app.get("/chats/:id",async (req,res)=>{
    let {id}=req.params;
    await Chat.findByIdAndDelete(id);
    res.redirect("/chats");
});
*/
//delete using post
app.delete("/chats/:id",async (req,res)=>{
    const {id}=req.params;
    await Chat.findByIdAndDelete(id);
    res.redirect("/chats");
});
app.get("/",(req,res)=>{
    res.send("working");
});
app.listen(port,()=>{
    console.log("lostining to port 8080");
});
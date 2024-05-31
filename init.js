const mongoose=require("mongoose");
const Chat=require("./models/chat.js");
main().then(()=>{
    console.log("connection succes");
}).catch((err)=>{
    console.log(err);
});
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

//adding new data in database
chats=[
    {
        from:"Advait",
        to:"Aditi",
        msg:"Hello",
        created: new Date(),
    },
    {
        from:"Advait",
        to:"Vaishali",
        msg:"how are you",
        created: new Date(),
    },
    {
        from:"Advait",
        to:"Jaywant",
        msg:"how was your day",
        created: new Date(),
    },
    {
        from:"Advait",
        to:"sanjana",
        msg:"so beautiful so elegant just looking like a poo",
        created: new Date(),
    },
    {
        from:"Advait",
        to:"tanu",
        msg:"Hello tanudi",
        created: new Date(),
    },
    {
        from:"Advait",
        to:"shrihan",
        msg:"hi shrihan",
        created: new Date(),
    },
    {
        from:"Advait",
        to:"vedant",
        msg:"hello vedu kay karath aahe",
        created: new Date(),
    },
];

Chat.insertMany(chats);
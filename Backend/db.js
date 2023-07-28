const mongoose =require('mongoose');
const mongoURI='mongodb+srv://mddanishjamal04:cKOrIVhzxSdAVR7U@chatboat.10hmkoj.mongodb.net/?retryWrites=true&w=majority';

const connectToMongo=()=>{
    mongoose.connect(mongoURI).then(()=>{
        console.log("connected");
    })
}

module.exports=connectToMongo;

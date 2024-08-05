import mongoose from "mongoose";
import dotenv from "dotenv";


dotenv.config();

const ip=process.env.MONGO_IP

mongoose.connect(ip);

const Model=mongoose.model("Cadastro",({
    nome:{type:String,required:true},
    email:{type:String,required:true},
    senha:{type:String,required:true}
   
}))
export default Model
import Model from "../connection/connection.js"
import mongoose from "mongoose";
const GET = async (req, res) => {
    const id=req.params.ID
    const idobject=new mongoose.Types.ObjectId(id);
if(id){
    try {
     
      
        if(id){
        const findone= await Model.findOne({_id:idobject})
        res.status(200).send({message: findone})}
        else{
            const find = await Model.find()
            res.send({message:"Usuario encontrado!",find})
        }
    } catch (error) {
        console.error(error)
    }}else{
       const findALL=await Model.find()
       res.send(findALL)
    }
}
export default GET
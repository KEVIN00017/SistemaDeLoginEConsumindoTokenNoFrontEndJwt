import Model from "../connection/connection.js"

const GET = async (req, res) => {
    const Email=req.params.email

    try {
     
      
        if(Email){
        const findone= await Model.findOne({email:Email})
        res.status(200).send({message: findone})}
        else{
            const find = await Model.find()
            res.send(find)
        }
    } catch (error) {
        console.error(error)
    }
}
export default GET
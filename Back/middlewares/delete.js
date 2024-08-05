import Model from "../connection/connection.js";

const Delete = async (req, res) => {
    const id = req.params.ID
    try {
        const del = await Model.deleteOne({ _id: id })
        res.send("Deletado Com Sucesso!")
    } catch (error) {
        console.log(error)
    }
}
export default Delete
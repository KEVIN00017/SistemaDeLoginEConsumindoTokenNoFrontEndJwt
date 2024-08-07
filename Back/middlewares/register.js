import Model from "../connection/connection.js";
import bcrypt from "bcryptjs";

const REGISTER = async (req, res) => {
    const Nome = req.body.nome;
    const Email = req.body.email;
    const Senha = req.body.senha

    const verification = await Model.findOne({ email: Email })

    if (!verification) {
        try {
            const user = await new Model({
                nome: Nome,
                email: Email,
                senha: bcrypt.hashSync(Senha)
            });
            await user.save()

            res.status(200).send("Usuario Registrado Com Sucesso!")
            console.log("Registrado Com Sucesso!")
        } catch (error) {
            return
        }
    } else {
        res.status(404).send("Email já Registrado!");

    }
};
export default REGISTER
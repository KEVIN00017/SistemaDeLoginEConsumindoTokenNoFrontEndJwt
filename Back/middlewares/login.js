import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
import dotenv from "dotenv";
import Model from "../connection/connection.js";

dotenv.config();

const Login = async (req, res) => {

    const Email = req.body.email;
    const Senha = req.body.senha;

    const verification = await Model.findOne({ email: Email })

    if (verification) {
        const SenhaBC = verification.senha;
        const verificationsenha = await bcrypt.compareSync(Senha, SenhaBC);


        if (verificationsenha == true) {

            const token = jwt.sign({ _id: Email._id }, process.env.SECRET)

            res.header("Authorization", token)

            res.status(200).send({ message: "Usuario Logado Com Sucesso!", token });





        } else {
            res.status(400).send("email ou senha incorretos!")
        }
    } else {

        res.status(400).send("email ou senha incorretos!")
    }


};

export default Login
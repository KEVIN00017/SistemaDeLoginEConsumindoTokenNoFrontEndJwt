import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
import dotenv from "dotenv";
import Model from "../connection/connection.js";
import mongoose from "mongoose";
dotenv.config();

const Login = async (req, res) => {

    const Email = req.body.email;
    const Senha = req.body.senha;

    const verification = await Model.findOne({ email: Email })

    const cleanObjectId = (id) => {
        if (typeof id === 'string') {
            // Remove caracteres não hexadecimais
            return id.replace(/[^0-9a-fA-F]/g, '');
        }
        return id;
    };
    if (verification) {
        const SenhaBC = verification.senha;
        const verificationsenha = await bcrypt.compareSync(Senha, SenhaBC);


        if (verificationsenha == true) {

            const token = jwt.sign({ _id: verification._id }, process.env.SECRET)
            const id = verification._id.toString();
          

            res.status(200).send({ message: "Usuario Logado Com Sucesso!", token,id });
          
            





        } else {
            res.status(400).send("email ou senha incorretos!")
        }
    } else {

        res.status(400).send("email ou senha incorretos!")
    }


};

export default Login
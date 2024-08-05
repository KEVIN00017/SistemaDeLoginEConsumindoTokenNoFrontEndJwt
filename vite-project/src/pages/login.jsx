import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const api=axios.create({
    baseURL:("http://localhost:3153")
})


function Login (){

    const [Email,SetEmail]=useState('')
    const [Senha,SetSenha]=useState('')


    const navigate=useNavigate();

    function logar(data){

        api.post("/login",{
            email:Email,
            senha:Senha
        },
        {
            headers: { 'Content-Type': 'application/json' }
          }).then(async(response)=>{
            const nome=""
            api.get(`/${Email}`,async(data)=>{
                nome=await data.nome
            });
            localStorage.setItem("Authorization",JSON.stringify(response.data));
            alert(`Logado Com Sucesso! Bem Vindo ${nome}`)
            navigate("/")
            
        }).catch((error)=>{
            alert("email ou senha incorretos!")
            console.log(error)
        })

    }
return(
 <div>
    <section>
    <h1>
        LOGIN
    </h1>
    <input type="email" placeholder="email" required onChange={(event)=>{SetEmail(event.target.value)}}/>
    <br />
    <input type="senha" placeholder="senha" required onChange={(event)=>{SetSenha(event.target.value)}}/>
    <br />
    <button onClick={logar}><h3>Logar</h3></button>
    </section>
 </div>
)

}

export default Login
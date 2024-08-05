import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'

const api=axios.create({
baseURL:("http://localhost:3153")
})


function Register(){

    const [newName,SetName]=useState('');

    const [newEmail,SetEmail]=useState('');
    
    const [newPassword,SetPassword]=useState('');
    
    const navigate=useNavigate();

 


    function enviar(){
        api.post("/register",{
            nome:newName,
            email:newEmail,
            senha:newPassword
        }, {
            headers: { 'Content-Type': 'application/json' }
          }).then((response)=>{
            alert("Registrado Com Sucesso!")
            navigate("/login")
          }).catch((response)=>{
            alert("Email Já Cadastrado!")
          })
    
        }
            
           
        
           

return(
    <div>
      
        <input type="text" required placeholder="Nome" onChange={(event)=>{SetName(event.target.value)}}/>
        <br />
        <input type="email" required placeholder="email" onChange={(event)=>{SetEmail(event.target.value)}}/>
        <br />
        <input type="password" required placeholder="senha" onChange={(event)=>{SetPassword(event.target.value)}}/>
        <br />
        <button  onClick={enviar}>Enviar</button>     
    </div>
)



}
export default Register
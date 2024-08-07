
import './App.css'
import axios from "axios"
import Menu from '../components/menu.jsx'
import Info from '../components/info.jsx'
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'

const api = axios.create({
  baseURL: "http://localhost:3153"
});

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
const navigate=useNavigate()

function irpararegistro(){

  navigate("/register")
}
function irparalogin(){

  navigate("/login")
}
function irparamypage(){

  navigate("/minhapagina")
}

function logout(){
  localStorage.clear()
  navigate("/")
}
useEffect(() => {
  const id = localStorage.getItem("ID");
 
  if (id) {
      const cleanedId = id.replace(/[^a-fA-F0-9]/g, '');
      console.log("Cleaned ID:", cleanedId);
      
      if (cleanedId.length === 24) {
          api.get(`/${cleanedId}`)
              .then((resp) => {
                  console.log("Response data:", resp.data.message.nome);
                  
                  if (resp.data && resp.data.message.nome) {

                      setName(resp.data.message.nome)
                      setEmail(resp.data.message.email)
                      
                  
                  
                  } else {
                      setError("Nome não encontrado na resposta");
                  }
                  setLoading(false);
              })
              .catch((error) => {
                  console.error("Erro ao buscar dados:", error);
                  setError("Erro ao buscar dados");
                  setLoading(false);
              });
      } else {
          console.error("ID inválido:", cleanedId);
          setError("ID inválido");
          setLoading(false);
      }
  } else {
      console.error("ID não encontrado no localStorage");
      setError("ID não encontrado no localStorage");
      setLoading(false);
  }
  
}, []);
  return (
  
    <><div className="menu">
    {localStorage.getItem('Authorization') ? <div><Menu Links={[<h3>Contato</h3>,<h3>Sobre-nos</h3>,<h3 onClick={irparamypage}>minha-página</h3>,<h3 onClick={logout} >logout</h3>]}/> <br /><br /><br /><> <h3>Ola SR/a {name}</h3></></div>:
    <Menu Links={["Contato","Sobre-nos",<h3 onClick={irpararegistro}>Registro</h3>,<h3 onClick={irparalogin} >Login</h3>]}/>}
      
      
      
     
      <Info text={["Seja Bem Vindo","Ao", "Nosso Site"]} />  

     </div>

  </>
  )
}

export default App

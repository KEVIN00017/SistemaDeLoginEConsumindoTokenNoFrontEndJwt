
import './App.css'
import Menu from '../components/menu.jsx'
import Info from '../components/info.jsx'
import { useNavigate } from 'react-router-dom'


function App() {

const navigate=useNavigate()

function irpararegistro(){

  navigate("/register")
}
function irparalogin(){

  navigate("/login")
}
function logout(){
  localStorage.clear()
  navigate("/")
}
  return (
  
    <><div className="menu">
    {localStorage.getItem('Authorization') ? <Menu Links={["Contato","Sobre-nos",<h3 onClick={irpararegistro}>minha-página</h3>,<h3 onClick={logout} >logout</h3>]}/>:
    <Menu Links={["Contato","Sobre-nos",<h3 onClick={irpararegistro}>Registro</h3>,<h3 onClick={irparalogin} >Login</h3>]}/>}
      
      
      

      <Info text={["Bem Vindo ","Site","Olá"]} />  

     </div>

  </>
  )
}

export default App

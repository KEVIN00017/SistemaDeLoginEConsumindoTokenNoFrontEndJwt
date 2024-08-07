import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.jsx'
import './index.css'
import {RouterProvider, createBrowserRouter} from "react-router-dom" 
import Register from './pages/register.jsx'
import Login from './pages/login.jsx'
import Mypage from './pages/mypage.jsx'
const router = createBrowserRouter([
  {
  path:"/" ,
  element:<App/>,
  errorElement:"Erro"
},

  {
  path:"register" ,
  element:<Register />,
  errorElement:"Erro"
  } ,
  {
    path:"login" ,
    element:<Login />,
    errorElement:"Erro"
    },
    {
      path:"minhapagina" ,
      element:<Mypage />,
      errorElement:"Erro"
      } 
  

  
  ]


)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)

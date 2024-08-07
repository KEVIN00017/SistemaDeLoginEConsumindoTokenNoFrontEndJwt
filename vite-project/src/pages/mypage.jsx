import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const api = axios.create({
    baseURL: "http://localhost:3153"
});

function Mypage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [CleanedId, setCleanedId] = useState('');
    
    const navigate=useNavigate()
    useEffect(() => {
        const id = localStorage.getItem("ID");
       
        if (id) {
            const cleanedId = id.replace(/[^a-fA-F0-9]/g, '');
            console.log("Cleaned ID:", cleanedId);
            setCleanedId(cleanedId)
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
    async function  DELETE(){
        await api.delete(`/${CleanedId}`).then((resp)=>{
            console.log(resp.data)
            alert("Deletado Com Sucesso!")
            localStorage.clear()
            navigate("/")
        }).catch((error)=>{
            console.error(error)
        })

        }
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <>
            <h1>SEJA BEM-VINDO SR {name}</h1>
           <br />
                                                            
            <h2>SEUS DADOS ABAIXO:</h2>
            <h2>NOME:</h2>
            <h1>{name}</h1>
            <h2>EMAIL:</h2>
            <h1>{email}</h1>
            <button onClick={DELETE}>Deletar Conta</button>
        </>
    );
}

export default Mypage;

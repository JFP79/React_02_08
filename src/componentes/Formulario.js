import React from "react";
import { useState } from "react";

const Formulario = () => { 
    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const dados = {
            nome: nome,
            idade: idade,
            email: email
        }
        console.log(dados);
    }
    
}

export default Formulario




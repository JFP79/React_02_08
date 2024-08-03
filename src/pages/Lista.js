import React from "react";
import { useState } from "react";
import Formulario from "../componentes/Formulario";
import Tabela from "../componentes/Tabela";
import NavBar from "../componentes/NavBar";
import Header from "../componentes/Header";
import "./Lista.css";

function Lista() {
    return (
        <div>

            <Header />
            <NavBar />
            <Tabela />
        </div>
    );
}

export default Lista

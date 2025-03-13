import React from "react";
import RegistroForm from "../componentes/RegistroForm";
import NavBar from "../componentes/NavBar";
import TablaTrabajadores from "../componentes/tablaTrabajadores";
import Footer from "../componentes/Footer";


function Administracion() {
    return(
        <div>
            <NavBar/>
            <RegistroForm/>
            <TablaTrabajadores/>
            <br />
            <Footer/>
        </div>
    )
    
}

export default Administracion
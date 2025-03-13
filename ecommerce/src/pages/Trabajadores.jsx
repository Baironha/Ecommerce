
import React from "react";
import NavBar from "../componentes/NavBar";
import Paqueteria from "../componentes/Paqueteria";
import EstadoPaquete from '../componentes/EstadoPaquetes'
import FooterTrabajadores from "../componentes/FooterTrabajadores";


function Trabajadores(){
    return(
        <div>
            <NavBar/>
            <Paqueteria/>
            <EstadoPaquete/>
            <br />
            <FooterTrabajadores/>
        </div>
    )
}
export default Trabajadores
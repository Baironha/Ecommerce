import '../style/Paqueteria.css'
import React, { useState } from "react";
import Paquetes from "../servicios/Paquetes";
import Swal from 'sweetalert2'

function Paqueteria(){
    const [NombreUsu, SetNombreUsu] = useState("")
    const [EmailUsu, SetEmailUsu] = useState("")
    const [DirecUsu, SetDirecUsu] = useState("")
    const [PesoPaquete, SetPesoPaquete] = useState("")

    function nombre(evento){
        SetNombreUsu(evento.target.value)
    }

    function email(evento){
        SetEmailUsu(evento.target.value)
    }

    function direccion(evento){
        SetDirecUsu(evento.target.value)
    }

    function peso (evento){
        SetPesoPaquete(evento.target.value)
    }

    function CargarPaquete(){
        if(NombreUsu === "" || EmailUsu === "" || PesoPaquete === "" || DirecUsu === ""){
            Swal.fire({
                icon: "error",
                title: "Campos incompletos",
                text: "Por favor rellene los espacios!",
            });
        } else {
            Paquetes.postUsers(NombreUsu, EmailUsu, PesoPaquete, DirecUsu)
            Swal.fire({
                icon: "success",
                title: "Registro exitoso",
                text: "El paquete fue registrado y enviado a Ecommerce",
            });

            // Limpiar los campos del formulario después de la validación exitosa
            SetNombreUsu("");
            SetEmailUsu("");
            SetPesoPaquete("");
            SetDirecUsu("");
        }
    }

    return(
        <div id='Container-Form-Paquetes'>
            <h1>Etiqueta de paquetes</h1>
            <label htmlFor="nombre" id='LabelPaquetes'>Nombre</label><br />
            <input type="text" value={NombreUsu} onChange={nombre} id='InputPaquetes' placeholder="Ingrese Su nombre completo"/>
            <br />
            <label htmlFor="email" id='LabelPaquetes'>Correo electronico</label><br />
            <input type="text" value={EmailUsu} onChange={email} id='InputPaquetes' placeholder="Ingrese su correo electrico"/>
            <br />
            <label htmlFor="direccion" id='LabelPaquetes'>Peso</label><br />
            <input type="text" value={PesoPaquete} onChange={peso} id='InputPaquetes' placeholder="Ingrese el peso del Paquete" />
            <br />
            <label htmlFor="peso" id='LabelPaquetes'>Direccion de entrega</label><br />
            <input type="text" value={DirecUsu} onChange={direccion} id='InputPaquetes' placeholder="Ingrese la dirección de entrega" />
            <br />
            <button id='CargarPaquete' onClick={CargarPaquete}>Registrarse</button>
        </div>
    )
}

export default Paqueteria;

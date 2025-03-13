import React, { useState, useEffect } from "react";
import '../style/TbTrabajadores.css'



function TablaTrabajadores(){

    const [dato, setDatos] = useState([]);
    const [Mostrar, setMostrar] = useState(false);
    const [seleccionadosTrabajadores, setSeleccionadosTrabajadores] = useState([]);
    


    useEffect(() => {
            obtenerDatos();
        }, []);



    const obtenerDatos = async () => {
        try {
            const response = await fetch("http://localhost:3001/Usuarios");
            const data = await response.json();
            setDatos(data);
            setMostrar(true);
        } catch (error) {
            console.error("Error al obtener datos:", error);
        }
    };



    const manejarSeleccionTrabajadores = (id) => {
        setSeleccionadosTrabajadores((prevSeleccionados) =>
            prevSeleccionados.includes(id)
                ? prevSeleccionados.filter((item) => item !== id)
                : [...prevSeleccionados, id]
        );
    };



    const eliminarTrabajador = async () => {
        try {
            for (let id of seleccionadosTrabajadores) {
                await fetch(`http://localhost:3001/Usuarios/${id}`, {
                    method: "DELETE",
                });
            }
            setDatos((prevDatos) =>
                prevDatos.filter((Usuarios) => !seleccionadosTrabajadores.includes(Usuarios.id))
            );
            setSeleccionadosTrabajadores([]);
        } catch (error) {
            console.error("Error al eliminar Trabajador:", error);
        }
    };



    return(
        <div>
            <div id="ContainerTabla">
                <div id="ContainerBtn">
                    <button id="MostrarTablaTrabajador" onClick={obtenerDatos}>Mostrar Tabla</button><br />
                    <br />
                    <button id="EliminarTrabajador" onClick={eliminarTrabajador}>Eliminar Trabajador</button><br />
                </div>
                <table id="TablaTrabajadores">
                    <thead>
                        <tr>
                            <th>✔</th>
                            <th>ID</th>
                            <th>ROL</th>
                            <th>Nombre</th>
                            <th>EMAIL</th>
                            <th>PASSWORD</th>
                            <th>DIRECCION</th>
                            <th>SALARIO</th>
                        </tr>
                    </thead>
                    <tbody>
                    {Mostrar &&
                                dato.map((Usuarios) => (
                                    <tr>
                                        <td>
                                            <input
                                                type="checkbox"
                                                checked={seleccionadosTrabajadores.includes(Usuarios.id)}
                                                onChange={() => manejarSeleccionTrabajadores(Usuarios.id)}
                                            />
                                        </td>
                                        <td>{Usuarios.id}</td>
                                        <td>{Usuarios.rol}</td>
                                        <td>{Usuarios.nombre}</td>
                                        <td>{Usuarios.email}</td>
                                        <td>{Usuarios.password}</td>
                                        <td>{Usuarios.direccion}</td>
                                        <td>{Usuarios.salario}</td>
                                    </tr>
                                
                                ))}
                    </tbody>
                </table>

            </div>
        </div>
    )
}
export default TablaTrabajadores
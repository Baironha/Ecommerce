
import React, { useState, useEffect } from "react";
import "../style/EstadoPaqueteria.css";

function EstadoPaquete() {
    const [datos, setDatos] = useState([]);
    const [entregados, setEntregados] = useState([]);
    const [mostrar, setMostrar] = useState(false);
    const [seleccionadosPorEnviar, setSeleccionadosPorEnviar] = useState([]);
    const [seleccionadosEntregados, setSeleccionadosEntregados] = useState([]);

    useEffect(() => {
        obtenerDatos();
        obtenerEntregados();
    }, []);

    const obtenerDatos = async () => {
        try {
            const response = await fetch("http://localhost:3001/paquetes");
            const data = await response.json();
            setDatos(data);
            setMostrar(true);
        } catch (error) {
            console.error("Error al obtener datos:", error);
        }
    };

    const obtenerEntregados = async () => {
        try {
            const response = await fetch("http://localhost:3001/entregado");
            const data = await response.json();
            setEntregados(data);
        } catch (error) {
            console.error("Error al obtener entregados:", error);
        }
    };

    const manejarSeleccionPorEnviar = (id) => {
        setSeleccionadosPorEnviar((prevSeleccionados) =>
            prevSeleccionados.includes(id)
                ? prevSeleccionados.filter((item) => item !== id)
                : [...prevSeleccionados, id]
        );
    };

    const manejarSeleccionEntregados = (id) => {
        setSeleccionadosEntregados((prevSeleccionados) =>
            prevSeleccionados.includes(id)
                ? prevSeleccionados.filter((item) => item !== id)
                : [...prevSeleccionados, id]
        );
    };







    const eliminarPaquetes = async () => {
        try {
            for (let id of seleccionadosPorEnviar) {
                await fetch(`http://localhost:3001/paquetes/${id}`, {
                    method: "DELETE",
                });
            }

            for (let id of seleccionadosEntregados) {
                await fetch(`http://localhost:3001/entregado/${id}`, {
                    method: "DELETE",
                });
            }

            setDatos((prevDatos) =>
                prevDatos.filter((paquete) => !seleccionadosPorEnviar.includes(paquete.id))
            );

            setEntregados((prevEntregados) =>
                prevEntregados.filter((paquete) => !seleccionadosEntregados.includes(paquete.id))
            );

            setSeleccionadosPorEnviar([]);
            setSeleccionadosEntregados([]);
        } catch (error) {
            console.error("Error al eliminar paquetes:", error);
        }
    };

    // Mover paquete de "Por Enviar" a "Entregado"
    const moverPaqueteAEntregado = (id) => {
        const paqueteAMover = datos.find((paquete) => paquete.id === id);

        if (paqueteAMover) {
            setDatos((prevDatos) => prevDatos.filter((paquete) => paquete.id !== id));
            setEntregados((prevEntregados) => [...prevEntregados, paqueteAMover]);

            fetch(`http://localhost:3001/paquetes/${id}`, { method: "DELETE" });
            fetch("http://localhost:3001/entregado", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(paqueteAMover),
            });
        }
    };

    // Mover paquete de "Entregado" a "Por Enviar"
    const moverPaqueteAPorEnviar = (id) => {
        const paqueteAMover = entregados.find((paquete) => paquete.id === id);

        if (paqueteAMover) {
            setEntregados((prevEntregados) => prevEntregados.filter((paquete) => paquete.id !== id));
            setDatos((prevDatos) => [...prevDatos, paqueteAMover]);

            fetch(`http://localhost:3001/entregado/${id}`, { method: "DELETE" });
            fetch("http://localhost:3001/paquetes", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(paqueteAMover),
            });
        }
    };

    const permitirArrastrar = (e) => {
        e.preventDefault();
    };

    const manejarDrop = (e) => {
        e.preventDefault();
        const id = e.dataTransfer.getData("id");
        if (id) {
            moverPaqueteAEntregado(id);
        }
    };

    const manejarArrastre = (id, e) => {
        e.dataTransfer.setData("id", id);
    };

    const manejarDropEnSucursal = (e) => {
        e.preventDefault();
        const id = e.dataTransfer.getData("id");
        if (id) {
            moverPaqueteAPorEnviar(id);
        }
    };

    return (
        <div>
            <div id="containerBtn">
                <button id="MostrarTabla" onClick={obtenerDatos}>Mostrar Tabla</button><br />
                <br />
                <button id="EliminarPaquete" onClick={eliminarPaquetes}>Eliminar Paquete</button><br />
                <br />
            </div>
            <div id="padre">
                
                <div id="continertabla">
                    <h3>Por enviar</h3>
                    <table id="enSucursal" border="1" onDragOver={permitirArrastrar} onDrop={manejarDropEnSucursal}>
                        <thead>
                            <tr>
                                <th>✔</th>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Email</th>
                                <th>Dirección</th>
                                <th>Peso</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mostrar &&
                                datos.map((paquete) => (
                                    <tr
                                        key={paquete.id}
                                        draggable
                                        onDragStart={(e) => manejarArrastre(paquete.id, e)}
                                    >
                                        <td>
                                            <input
                                                type="checkbox"
                                                checked={seleccionadosPorEnviar.includes(paquete.id)}
                                                onChange={() => manejarSeleccionPorEnviar(paquete.id)}
                                            />
                                        </td>
                                        <td>{paquete.id}</td>
                                        <td>{paquete.nombre}</td>
                                        <td>{paquete.email}</td>
                                        <td>{paquete.direccion}</td>
                                        <td>{paquete.peso}</td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
                
                <br />
                <div>
                    <h3>ENTREGADO</h3>
                    <table id="entregado" border="1" onDrop={manejarDrop} onDragOver={permitirArrastrar}>
                        <thead>
                            <tr>
                                <th>✔</th>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Email</th>
                                <th>Dirección</th>
                                <th>Peso</th>
                            </tr>
                        </thead>
                        <tbody>
                            {entregados.map((item) => (
                                <tr key={item.id} draggable onDragStart={(e) => manejarArrastre(item.id, e)}>
                                    <td>
                                        <input
                                            type="checkbox"
                                            checked={seleccionadosEntregados.includes(item.id)}
                                            onChange={() => manejarSeleccionEntregados(item.id)}
                                        />
                                    </td>
                                    <td>{item.id}</td>
                                    <td>{item.nombre}</td>
                                    <td>{item.email}</td>
                                    <td>{item.direccion}</td>
                                    <td>{item.peso}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default EstadoPaquete;

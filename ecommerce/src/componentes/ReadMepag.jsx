import React from "react";
import '../style/ReadMeStyle.css'

function ReadMepag(){
    return(
        <div id="ContReadme">
            <h1>ReadMe Proyecto</h1>
            <p>
                Resumen del Proyecto:

                Este proyecto es una trastienda para una empresa de ecommerce, en la que los trabajadores gestionan el estado de los paquetes (de "por enviar" a "entregados"). La página está dividida en varias vistas, cada una con diferentes componentes dependiendo del rol del usuario (administrador o trabajador). El proyecto está desarrollado en React y utiliza CSS para los estilos, con un JSON file como base de datos.
                Login (/Login)
                Estructura de Páginas:

                NavBar  – Barra de navegación.
                Componentes:
                LoginForm  – Formulario de inicio de sesión.
                Trabajadores (/work)

                NavBar / – Barra de navegación.
                Componentes:
                Paqueteria – Componente para visualizar y gestionar los paquetes.
                EstadoPaquete  – Componente para actualizar el estado de los paquetes.
                FooterTrabajadores  – Pie de página específico para trabajadores.
                Administración (/Admin)

                Componentes:
                NavBar  – Barra de navegación.
                RegistroForm  – Formulario para registrar nuevos trabajadores.
                TablaTrabajadores  – Tabla con los trabajadores registrados.
                Footer  – Pie de página genérico para la administración.
                ReadMe (/ReadMe)

                Descripción: Página que probablemente contiene información de ayuda o explicación del proyecto.
                Funcionalidad del Proyecto:
                Autenticación:

                Se gestionan dos tipos de usuarios:
                Administradores: Para ingresar a la página /Admin.
                Trabajadores: Para ingresar a la página /work.
                Credenciales de ejemplo para ingresar:
                Administrador:
                Nombre: Barry Vega, Contraseña: vega12345
                Nombre: Steven salas, Contraseña: 12345678
                Trabajador:
                Nombre: barry, Contraseña: 12345678
                Nombre: steven, Contraseña: 12345
                Base de Datos:

                Utiliza un archivo db.json como base de datos.
                Métodos API implementados:
                getUsers: Obtener usuarios.
                postUsers: Crear un nuevo usuario.
                updateUsers: Actualizar la información de un usuario.
                deleteUser: Eliminar un usuario.
                Interacción con Listas:

                Se implementan listas compartidas (sortable) para facilitar la organización de los paquetes y los trabajadores.
                Tablas:

                Se utilizan tablas para mostrar la lista de trabajadores y paquetes en un formato organizado y manipulable (sortable).
                Enlaces Importantes:
                Trello: Tablero de Trello – Detalles sobre el progreso y tareas del proyecto.
                GitHub: Repositorio de GitHub – Código fuente del proyecto.
                Tecnologías Utilizadas:
                Frontend: React.js para la creación de componentes y la gestión del estado de la aplicación.
                Estilos: CSS.
                Base de Datos: db.json (probablemente usando json-server o similar para la API).
                Observaciones:
                La arquitectura de componentes es clara y bien estructurada, permitiendo que el flujo entre las páginas sea sencillo de entender.
                El uso de tablas y listas compartidas (sortable) es adecuado para la gestión de paquetes y trabajadores, lo que facilita la interacción.
                El hecho de utilizar credenciales predefinidas para la autenticación es adecuado para el prototipo, pero para una versión de producción sería necesario implementar una autenticación más robusta (por ejemplo, JWT o un sistema de login seguro).
            </p>
        </div>
    )
}

export default ReadMepag
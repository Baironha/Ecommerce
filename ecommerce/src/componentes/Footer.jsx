import React from "react";
import '../style/FooterStyle.css'


function Footer(){
    return(
        <div>
            <footer>
                <div class="footer-container">
                    <div class="footer-section">
                        <h3>Contacto</h3>
                        <p>Tel: 87409661</p>
                        <p>Email: bhorna@fwdcostarica.com</p>
                    </div>
                    <div class="footer-section">
                        <h3>Soporte</h3>
                        <p>saslasl@fwdcostarica.com</p>
                        <p>bvega@fwdcostarica.com</p>
                        <p>bhorna@fwdcostarica.com</p>
                    </div>
                    <div class="footer-section">
                        <h3>Servicios</h3>
                        <p>Exportación de paquetes</p>
                        <p>Importación de paquetes</p>
                        <p>Gestión de productos</p>
                    </div>
                    <div class="footer-section">
                        <h3>Sucursales</h3>
                        <p>Puntarenas Centro</p>
                        <p>Liberia Guanacaste</p>
                        <p>Santa Ana, San José</p>
                    </div>
                </div>
            </footer>

            <div class="footer-bottom">
                <h4>Ecommerce Mr.Hermes</h4>
            </div>
        </div>
    )
}


export default Footer
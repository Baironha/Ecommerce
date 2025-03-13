import React from "react";
import '../style/Login.css'
import LoginForm from "../componentes/loginForm";
import NavBar from "../componentes/NavBar";


function Login(){
    return(
        <div>
            <NavBar />
            <LoginForm/>
        </div>
    )
}
export default Login
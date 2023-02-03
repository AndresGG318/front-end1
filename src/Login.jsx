import React, { useState } from "react";
import logo1 from "./assets/img/Logyca-removebg-preview.png";


export const Login = (props) => {

    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    const [submitted,setSubmitted]= useState(false);
    const [valid,setValid] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(user && pass) {
            setValid(true);
        }
        setSubmitted(true);
    }

    

    return (

        
        <div className="auth-form-container">
            <h2 className="title">LOGYCA</h2>
            <h1 className="logo-title"><img src={logo1} alt="Logo de Logyca"></img></h1>
            <h2 className="title">Acceso</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                {submitted && valid ? <div className="success-menssage">Excelente! Iniciando Sesión </div>: null}
                <label htmlFor="email">Email</label>
                <input value={user} onChange={(e) => setUser(e.target.value)} type="email" placeholder="Username" id="user" name="user" />
                {submitted && !user ? <span>Porfavor rellene con su nombre de usuario</span>: null}
                <label htmlFor="password">Contraseña</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Ingresa tu contraseña" id="password" name="password" />
                {submitted && !pass? <span>Porfavor rellene con una contraseña</span>: null}
                <button type="submit">Iniciar Sesión</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>¿No tienes una cuenta? Registrate Aquí</button>
        </div> 
    );   
}
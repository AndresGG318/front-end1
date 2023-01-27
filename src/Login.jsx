import React, { useState } from "react";
import logo from "./assets/img/Logyca-removebg-preview.png" 


export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        
        <body>
            
            <header>
                <div className="header">
                    <h1><img src={logo}></img></h1>
                </div>
            </header>

            <main>
                <div className="auth-form-container">
                    <h2 className="title">Acceso</h2>
                    <form className="login-form" onSubmit={handleSubmit}>
                        <label htmlFor="email">Email</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Email@gmail.com" id="email" name="email" />
                        <label htmlFor="password">Contraseña</label>
                        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Ingresa tu contraseña" id="password" name="password" />
                        <button type="submit">Iniciar Sesión</button>
                    </form>
                    <button className="link-btn" onClick={() => props.onFormSwitch('register')}>¿No tienes una cuenta? Registrate Aquí</button>
                </div>
            </main>

            <footer>

            </footer>
        </body>
    )   
}
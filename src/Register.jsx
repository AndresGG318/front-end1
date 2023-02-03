import React, { useState } from "react";
import logo1 from "./assets/img/Logyca-removebg-preview.png"

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');

    const [submitted,setSubmitted]= useState(false);
    const [valid,setValid] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(name && lastname && email && pass) {
            setValid(true);
        }
        setSubmitted(true);
    }


    return (
        
        <div className="auth-form-container">
            <h2 className="title">LOGYCA</h2>
            <h1 className="logo-title"><img src={logo1} alt="Logo de Logyca"></img></h1>
            <h2 className="title">Registro</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                {submitted && valid ? <div className="success-menssage">Excelente! Gracias por registrarte  </div>: null}
                <label htmlFor="name">Nombres</label>
                <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Ingrese su nombre" />
                {submitted && !name ?<span>Porfavor rellene con su nombre</span>: null}
                <label htmlFor="lastname">Apellidos</label>
                <input value={lastname} name="lastname" onChange={(e) => setLastname(e.target.value)} id="lastname" placeholder="Ingrese su apellido" />
                {submitted && !lastname ? <span>Porfavor rellene con su apellido</span>: null}
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="Email" placeholder="Email@gmail.com" id="email" name="email" />
                {submitted && !email ? <span>Porfavor rellene con su email</span>: null}
                <label htmlFor="password">Contraseña</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Ingrese una contraseña" id="password" name="password" />
                {submitted && !pass? <span>Porfavor rellene con una contraseña</span>: null}
                <button type="submit">Registrarse</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>¿Ya tienes una cuenta? Entra Aquí</button>
        </div>
    )
}
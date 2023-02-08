import React, { useState } from "react";
import { toast } from "react-toastify";

export const Login = (props) => {

    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(validate()) {
            fetch("http://localhost:8080/user" + user).then((res)=>{
                return res.json();
            }).then((resp)=>{
                console.log(resp)
            }).catch((err)=>{
            toast.error('Inicio de Sesion fallida debido a: ' + err.message);
            });

        }
        
    }
    const validate = () => {
        let result= true;
        if (user === '' || user === null){
            result=false;
            toast.warning ('Por favor introduzca el Usuario');
        }
        if (pass === '' || pass === null){
            result=false;
            toast.warning ('Por favor introduzca la Contraseña');
        }
        return result;
    }

    return (

        <div className="auth-form-container">
            <h2 className="title">LOGYCA</h2>
            <h2 className="title">Iniciar Sesión</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="user">User Name</label>
                <input value={user} onChange={(e) => setUser(e.target.value)} placeholder="Nombre de Usuario" id="user" name="user"/>
                <label htmlFor="password">Contraseña</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Ingresa tu contraseña" id="password" name="password"/>
                <button type="submit">Iniciar Sesión</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>¿No tienes una cuenta? Registrate Aquí</button>
        </div> 
    );   
}
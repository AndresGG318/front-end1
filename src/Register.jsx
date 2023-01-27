import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (

        <body>

            <header>



            </header>

            <main>

                <div className="auth-form-container">
                    <h2 className="title">Registro</h2>
                <form className="register-form" onSubmit={handleSubmit}>
                    <label htmlFor="name">Nombres</label>
                    <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Ingrese su nombre" />
                    <label htmlFor="lastname">Apellidos</label>
                    <input value={lastname} name="lastname" onChange={(e) => setName(e.target.value)} id="lastname" placeholder="Ingrese su apellido" />
                    <label htmlFor="email">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)}type="Email" placeholder="Email@gmail.com" id="email" name="email" />
                    <label htmlFor="password">Contraseña</label>
                    <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Ingrese una contraseña" id="password" name="password" />
                    <button type="submit">Log In</button>
                </form>
                <button className="link-btn" onClick={() => props.onFormSwitch('login')}>¿Ya tienes una cuenta? Entra Aquí</button>
                </div>
        
            </main>

            <footer>

            

            </footer>
        </body>

    )
}
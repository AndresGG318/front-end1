import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
    const [username, usernameUpdate] = useState('');
    const [password, passwordUpdate] = useState('');

    const usenavigate = useNavigate();

    useEffect(() => {
        sessionStorage.clear();
    }, []);

    const ProceedLogin = (e) =>{
        e.preventDefault();
        if(validate()) {

            fetch("http://localhost:8000/user/" + username).then((res) =>{
                return res.json();
            }).then((resp) =>{
                if(Object.keys(resp).length===0) {
                    toast.error('Por favor Ingrese el Nombre de Usuario correspondiente');
                }else{
                    if(resp.password===password){
                        toast.success('Success');
                        sessionStorage.setItem('username', username);
                        usenavigate('/');
                    }else{
                        toast.error('Por favor Ingrese la Contraseña correspondiente');
                    }
                }
            }).catch((err) =>{
                toast.error('Falla al Acceder durante : ' + err.message);
            })
        }
    }
    const validate = () => {
        let result = true;
        if(username ==='' || username === null) {
            result = false;
            toast.warning('Por favor ingrese el Usuario');
        }
        if(password ==='' || password === null) {
            result = false;
            toast.warning('Por favor ingrese la contarseña');
        }
        return result;
    }

    return ( 
        <div className="row">
            <div className="offset-lg-3 col-lg-6" style={{marginTop:'200px'}}>
                    <form onSubmit={ProceedLogin} className="container">
                        <div className="card" style={{background : 'rgb(9, 34, 73)'}}>
                            <div className="card-header">
                                <h1 className="text-center">Login</h1>
                            </div>
                            <div className="card-body">
                                <div className="form-group">
                                    <label>User ID<span className="errmsg">*</span></label>
                                    <input style={{background : 'rgb(23, 77, 158)'}} value={username} onChange={e => usernameUpdate(e.target.value)} placeholder="Enter a User ID" className="form-control"></input>
                                </div>
                                <div className="form-group">
                                    <label>Password<span className="errmsg">*</span></label>
                                    <input style={{background : 'rgb(23, 77, 158)'}} type='password' value={password} onChange={e => passwordUpdate(e.target.value)} placeholder="Enter a Password" className="form-control"></input>
                                </div>
                            </div>
                            <div className="card-footer text-center">
                                <button type="submit" className="btn btn-primary">Login</button> | 
                                <Link className="btn btn-success" to={'/register'}>Nuevo Usuario</Link>
                            </div>
                        </div>
                    </form>
            </div>
        </div>
     );
}
 
export default Login;
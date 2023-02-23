import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {

    const [id , idChange] = useState("");
    const [name , nameChange] = useState("");
    const [nickname , nicknameChange ]= useState("");
    const [password , passwordChange ]= useState("");
    const [validFrom , validFromChange] = useState("");
    const [validUntil , validUntilChange] = useState("");
    const [lastPassword , lastPasswordChange] = useState("");
    const [creationDate , creationDateChange] = useState("");
    const [acctlock , acctlockChange] = useState("");
    const [comments , commentsChange] = useState("");
    const [photo , photoChange] = useState("");;
    

    const navigate = useNavigate();

    const isValidate = () => {
        let isproceed = true;
        let errormessage = 'Por favor ingrese el valor en ';
        if (id === null || id === '') {
            isproceed = false;
            errormessage += ' User ID';
        }
        if (name === null || name === '') {
            isproceed = false;
            errormessage += ' Fullname';
        }
        if (nickname === null || nickname === '') {
            isproceed = false;
            errormessage += ' Nickname';
        }
        if (password === null || password === '') {
            isproceed = false;
            errormessage += ' Password';
        }
        if (validFrom === null || validFrom === '') {
            isproceed = false;
            errormessage += ' Valid From';
        }
        if (validUntil === null || validUntil === '') {
            isproceed = false;
            errormessage += ' Valid Until';
        }
        if (lastPassword === null || lastPassword === '') {
            isproceed = false;
            errormessage += ' Last Password Change';
        }
        if (creationDate === null || creationDate === '') {
            isproceed = false;
            errormessage += ' Creation Date';
        }
        
        if(!isproceed) {
            toast.warning(errormessage);
        }
        return isproceed;
    }

    const handlesumbit = (e) => {
        
            e.preventDefault();
            let regobj = {id,name,nickname,password,validFrom,validUntil,lastPassword,creationDate};
            if (isValidate()){
                fetch("http://localhost:8000/user", {
                    method:"POST",
                    headers:{'content-type':'application/json'},
                    body:JSON.stringify(regobj)
                }).then((res) => {
                    toast.success('Registro Completado');
                    navigate('/login');
                }).catch((err) => {
                    toast.error('Resgistro Fallido: ' + err.message);
                });
            }
    }

    return ( 
        <div>
            <div className="offset-lg-3 col-lg-6">
                <form className="container" >
                    <div className="card" style={{background : 'rgb(9, 34, 73)'}}>
                        <div className="card-header">
                            <h1 className="text-center">User Register</h1>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>User ID<span className="errmsg">*</span></label>
                                        <input style={{background : 'rgb(23, 77, 158)'}} value={id} onChange={ e => idChange(e.target.value)} placeholder="Enter a User ID" className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Full Name<span className="errmsg">*</span></label>
                                        <input style={{background : 'rgb(23, 77, 158)'}} value={name} onChange={e=>nameChange(e.target.value)} placeholder="Enter a Full Name" className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Nickname<span className="errmsg">*</span></label>
                                        <input style={{background : 'rgb(23, 77, 158)'}} value={nickname} onChange={e=>nicknameChange(e.target.value)} placeholder="Enter a Nickname" className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Password<span className="errmsg">*</span></label>
                                        <input style={{background : 'rgb(23, 77, 158)'}} value={password} onChange={e=>passwordChange(e.target.value)} placeholder="Enter a Password" type="password" className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Valid From<span className="errmsg">*</span></label>
                                        <input style={{background : 'rgb(23, 77, 158)', color:'gold'}} value={validFrom} onChange={e=>validFromChange(e.target.value)} type="date" className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Valid Until<span className="errmsg">*</span></label>
                                        <input style={{background : 'rgb(23, 77, 158)', color:'gold'}} value={validUntil} onChange={e=>validUntilChange(e.target.value)} type="date" className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Last Password Change<span className="errmsg">*</span></label>
                                        <input style={{background : 'rgb(23, 77, 158)', color:'gold'}} value={lastPassword} onChange={e=>lastPasswordChange(e.target.value)} type="date" className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Creation Date<span className="errmsg">*</span></label>
                                        <input style={{background : 'rgb(23, 77, 158)', color:'gold'}} value={creationDate} onChange={e=>creationDateChange(e.target.value)} type="date" className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Acctlock</label>
                                        <input style={{background : 'rgb(23, 77, 158)',color:'gold'}} value={acctlock} onChange={e=>acctlockChange(e.target.value)} type="number" className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Photo</label>
                                        <input style={{background : 'rgb(23, 77, 158)',color:'gold'}} value={photo} onChange={e=>photoChange(e.target.value)} type="file" className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Comments</label>
                                        <textarea style={{background : 'rgb(23, 77, 158)'}} value={comments} onChange={e=>commentsChange(e.target.value)} placeholder="Enter a Comments" type="password" className="form-control"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer text-center">
                            <button onClick={handlesumbit} type="submit" className="btn btn-primary">Registarse</button> | 
                            <Link to={'/login'} className="btn btn-danger">Atrás</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default Register;
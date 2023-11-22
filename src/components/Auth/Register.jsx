import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [id, idchange] = useState("");
    const [password, passwordchange] = useState("");
    const [name, namechange] = useState("");
    const [email, emailchange] = useState("");
    const navigate = useNavigate();

    const backLogin = () => {
        navigate('/login');
    };


    const isValidate = () => {
        let isproceed = true;
        let errormessage = "Tolong masukan"
        if (id === null || id==='') {
            isproceed = false;
            errormessage += ' Username'
        }

        if (password === null || password==='') {
            isproceed = false;
            errormessage += ' Password'
        }

        if (name === null || name==='') {
            isproceed = false;
            errormessage += ' Fullname'
        }

        if (email === null || email==='') {
            isproceed = false;
            errormessage += ' Email'
        }
        if (!isproceed) {
            toast.warning(errormessage)
        }
        return isproceed;
    }


    const handleSubmit = (e) => {
    
            e.preventDefault();
            let regobj = { id, name, password, email };
            if (isValidate()) {
            fetch("http://localhost:8002/user", {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(regobj),
            })
                .then((res) => {
                    toast.success('Register Berhasil')
                    navigate('/login');
                })
                .catch((err) => {
                    toast.error('Gagal :' + err.message);
                });
        }
    }


    return (
        <div>
            <div className="offset-lg-3 col-lg-6">
                <form className="container" onSubmit={handleSubmit}>
                    <div className="card">
                        <div className="card-header">
                            <h1 className="text-center">User Registration</h1>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label >Username <span className="errmsg">*</span></label>
                                        <input required value={id} onChange={e => idchange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label >Password <span className="errmsg">*</span></label>
                                        <input  value={password} onChange={e => passwordchange(e.target.value)} type="password" className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label >Full Name <span className="errmsg">*</span></label>
                                        <input value={name} onChange={e => namechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label >Email <span className="errmsg">*</span></label>
                                        <input  value={email} onChange={e => emailchange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="card-footer text-center">
                            <button style={{ marginRight: 10 }} type="submit" className="btn btn-primary">Register</button>
                            <button className="btn btn-danger" onClick={backLogin}>Back</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;




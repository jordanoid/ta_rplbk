// Login.jsx

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is already logged in, then redirect to home
    const isLoggedIn = sessionStorage.getItem('username');
    if (isLoggedIn) {
      toast.info("Anda sudah login. Anda akan diarahkan ke halaman utama.");
      navigate('/');
    }
  }, [navigate]);

  const proceedLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      fetch("http://localhost:8002/user/" + username)
        .then((res) => res.json())
        .then((resp) => {
          if (Object.keys(resp).length === 0) {
            toast.error("Tolong masukan user anda dengan benar");
          } else {
            if (resp.password === password) {
              toast.success("Berhasil");
              sessionStorage.setItem('username', username);
              navigate("/");
            } else {
              toast.error("Tolong masukan password anda dengan benar");
            }
          }
        })
        .catch((err) => {
          toast.error("Login Gagal Karena :" + err.message);
        });
    }
  };

  const validate = () => {
    let result = true;
    if (!username) {
      result = false;
      toast.warning("Tolong Masukan Username");
    }
    if (!password) {
      result = false;
      toast.warning("Tolong Masukan Password");
    }
    return result;
  };

  return (
    <div className="row">
      <div className="offset-lg-3 col-lg-6">
        <form onSubmit={proceedLogin} className="container">
          <div className="card">
            <div className="card-header">
              <h2>User Login</h2>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label>Username <span className="errmsg">*</span></label>
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="form-control"
                ></input>
              </div>

              <div className="form-group">
                <label>Password <span className="errmsg">*</span></label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                ></input>
              </div>
            </div>

            <div className="card-footer">
              <button style={{ marginRight: 10 }} type="submit" className="btn btn-primary">
                Login
              </button>
              <a className="btn btn-success" href="/register">
                New User
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

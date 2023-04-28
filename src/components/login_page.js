import React from "react";
import {Link} from 'react-router-dom'
import "./login_page.css";

const LoginForm = () => {
    return (
        <div className="page">
            <div className="cover">
                <h1>Login</h1>
                <div className="forms">
                    <input type="text" placeholder="Email" />
                    <input type="password" placeholder="Senha" />
                </div>
                <div className="buttons">
                    <button className="register-btn">Criar conta</button>
                    <button className="login-btn">Login</button>
                </div>
            </div>
        </div>
    );
}

export default LoginForm
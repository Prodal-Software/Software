import React from "react";
import {Link} from 'react-router-dom'
import "./donation_page.css";

const DonationForm = () => {
    return (
        <div className="page">
            <div className="cover">
                <h1>Doar Alimento</h1>
                <div className="forms">
                    <input type="text" placeholder="Alimento" />
                    <input type="text" placeholder="Senha" />
                    <input type="text" placeholder="Senha" />
                </div>
                <div className="buttons">
                    <button className="register-btn">Criar conta</button>
                    <button className="login-btn">Login</button>
                </div>
            </div>
        </div>
    );
}

export default DonationForm
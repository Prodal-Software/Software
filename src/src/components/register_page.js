import React from "react";
import "./register_page.css";

const RegisterForm = () => {
    return (
        <div className="page">
            <div className="cover">
                {/* <button className="return-btn"></button> */}
                <h1>Criar Conta</h1>
                
                <div className="forms">
                    <input type="text" placeholder="Nome" />
                    <input type="email" placeholder="Email" />
                    <input type="tel" placeholder="Telefone" />
                    <input type="password" placeholder="Senha" />
                    <input type="password" placeholder="Confirmar Senha" />
                    <div className="checkbox-line">
                        <input type="checkbox"/><p>Mostrar Senha</p>
                    </div>
                </div>
                
                <div className="buttons">
                    <button className="clear-btn">Limpar campos</button>
                    <button className="register-btn">Criar conta</button>
                </div>
            </div>
        </div>
    );
}

export default RegisterForm
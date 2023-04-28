import React from "react";
import {Link} from 'react-router-dom'
import "./donation_page.css";

const DonationForm = () => {
    return (
        <div className="page">
            <div className="cover">
                <h1>Doar Alimento</h1>
                <div className="forms">
                    <input type="text" placeholder="Doador" />
                    <input type="text" placeholder="Endereço" />
                </div>

                
                <div className="food_form">
                    <label for="food">Alimento:</label>
                    <select name="food" id="foods">
                        <option value="tomate">tomate</option>
                        <option value="cenoura">cenoura</option>
                        <option value="cebola">cebola</option>
                        <option value="berinjela">berinjela</option>
                    </select>
                </div>
                    
                <div className="quantity_form">
                    <label for="quantity">Quantidade:</label>
                    <select name="quantity" id="qtd">
                        <option value="1">1 kg</option>
                        <option value="2">2 kgs</option>
                        <option value="5">5 kgs</option>
                        <option value="10">10 kgs</option>
                        <option value="20">20 kgs</option>
                        <option value="50">50 kgs</option>
                        <option value="100">100 kgs</option>
                    </select>
                </div>                
                    
                <div>
                    <label for="time_to_collect_form">Tempo para coletar:</label>
                    <select name="time_to_collect" id="time">
                        <option value="60">1 hora</option>
                        <option value="90">1 hora e 30 minutos</option>
                        <option value="120">2 horas</option>
                        <option value="150">2 horas e 30 minutos</option>
                        <option value="180">3 horas </option>
                    </select>
                </div>

                <div className="buttons">
                    <button className="cancel-btn">Cancelar</button>
                    <button className="confirm-btn">Confirmar Doação</button>
                </div>
            </div>
        </div>
    );
}

export default DonationForm
import { NavLink } from "react-router-dom";
import { Typography } from '@mui/material';
import React from 'react';

export const Navbar = () => {
    const navLinkStyle = ({ isActive }) => {
        return {
            marginRight: '20px',
            fontSize: '25px',
            color: isActive? 'orange' : 'black',
            fontWeight: isActive? 'bold' : 'normal',
            textDecoration: 'none'
        }
    }
    return(
        <nav>
            <NavLink style={navLinkStyle} to={'/login'}>Login</NavLink>
            <NavLink style={navLinkStyle} to={'/cadastro'}>Cadastro</NavLink>
            <NavLink style={navLinkStyle} to={'/motorista'}>Motorista</NavLink>
            <NavLink style={navLinkStyle} to={'/doacao'}>Doar alimento</NavLink>
        </nav>
    );
}
export default Navbar
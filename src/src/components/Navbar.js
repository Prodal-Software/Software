import { NavLink } from "react-router-dom";
import { AppBar,Toolbar } from "@mui/material";
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
        <AppBar position="static" color="success">
            <Toolbar>
                <NavLink style={navLinkStyle} to={'/login'}>Login</NavLink>
                <NavLink style={navLinkStyle} to={'/cadastro'}>Cadastro</NavLink>
                <NavLink style={navLinkStyle} to={'/motorista'}>Motorista</NavLink>
                <NavLink style={navLinkStyle} to={'/doacao'}>Doar alimento</NavLink>
                <NavLink style={navLinkStyle} to={'/admin'}>Administração</NavLink>
            </Toolbar>
        </AppBar>
    );
}
export default Navbar
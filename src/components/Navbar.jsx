import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null); // Estado para controlar el menú

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger p-2">
      <Link className="navbar-brand" to="/">
        <img src={Logo} alt="CCP Logo" style={{ width: '3rem', marginLeft: '2rem' }} />
      </Link>

      <div className="navbar-collapse d-flex justify-content-center align-items-center">
        <div className="navbar-nav">
          <NavLink className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`} to={`/`}>Home</NavLink>
          <NavLink className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`} to={`/pokemon`}>Pokemons</NavLink>
          <NavLink className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`} to={`/contacto`}>Contacto</NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <div>
            <IconButton
              size="large"
              aria-label="cart"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <Link to="/carrito">
                <ShoppingCartIcon style={{ color: '#fff', fontSize: 26 }} />
              </Link>
            </IconButton>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle style={{ color: '#fff', fontSize: 29 }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Perfil</MenuItem>
              <MenuItem onClick={handleClose}>Cerrar Sesión</MenuItem>
            </Menu>
          </div>
        </ul>
      </div>
    </nav>
  );
}

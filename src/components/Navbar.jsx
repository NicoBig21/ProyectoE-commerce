import React, { useState } from 'react';
import { Link, NavLink, Navigate } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import { AuthContext } from '../auth/context';
import { useContext } from 'react';
import UserConnected from './UserConnected';
import UserOffline from './UserOffline';

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const { user, logout } = useContext(AuthContext);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onLogout = () => {
    logout();
    // Redirige al usuario a la página de inicio de sesión después de cerrar sesión
    return <Navigate to="/login" />;
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
            {user ? (
              <UserConnected
                anchorEl={anchorEl}
                handleMenu={handleMenu}
                handleClose={handleClose}
                onLogout={onLogout}
              />
            ) : (
              <UserOffline />
            )}
          </ul>
      </div>
    </nav>
  );
}

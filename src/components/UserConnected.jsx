import React from 'react';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Link } from 'react-router-dom';

export default function UserConnected({ anchorEl, onLogout, handleMenu, handleClose }) {
  return (
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
        <AccountCircle style={{ color: '#fff', fontSize: 31 }} />
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
        <MenuItem>
          <Link to="/profile" style={{ textDecoration: 'none', color: 'inherit' }}>Perfil</Link>
        </MenuItem>
        <MenuItem onClick={onLogout}>
          Cerrar Sesión
        </MenuItem>
      </Menu>
    </div>
  );
}

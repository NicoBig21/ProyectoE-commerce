import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { AccountCircle } from '@mui/icons-material';
import { IconButton } from '@mui/material';

export default function UserOffline() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <li className="nav-item">
      <div>
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
          <MenuItem>
            <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>Iniciar Sesión</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/signup" style={{ textDecoration: 'none', color: 'inherit' }}>Registrarse</Link>
          </MenuItem>
        </Menu>
      </div>
    </li>
  );
}
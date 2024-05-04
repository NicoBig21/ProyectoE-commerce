import React from 'react';
import { Link } from 'react-router-dom';

export default function UserOffline() {
  return (
    <div>
      <Link to="/login" className="btn btn-primary border-0" style={{ backgroundColor: 'rgba(var(--bs-danger-rgb), var(--bs-bg-opacity))', color: '#fff', marginRight: '10px' }}>
        Iniciar Sesión
      </Link>
      <Link to="/signup" className="btn btn-primary border-0" style={{ backgroundColor: '#fff', color: 'rgba(var(--bs-danger-rgb), var(--bs-bg-opacity))' }}>
        Registrarse
      </Link>
    </div>
  );
}

import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context';

export const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = (e) => {
    e.preventDefault();
    login(username, password);
    navigate('/', {
      replace: true
    });
  }

  return (
    <div className='img-login'>
      <div className="card login-card">
        <h1 className="card-title mb-4">Iniciar Sesion</h1>
        <form onSubmit={onLogin}>
          <div className="form-group">
            <label htmlFor="username">Usuario</label>
            <input 
              type="text" 
              className="mt-1" 
              id="username" 
              placeholder="Ingrese su usuario" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group border-form">
            <label htmlFor="password">Contraseña</label>
            <input 
              type="password" 
              className="mt-1" 
              id="password" 
              placeholder="Ingrese su contraseña" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className='mt-4'>
            <div className='forgot-password'>
              ¿Olvidó su contraseña?{' '}
              <Link to='/forgot-password'>
                <span>Click Aca</span>
              </Link>
            </div>

            <div className='forgot-password ml-4'>
              ¿No tienes cuenta?{' '}
              <Link to='/signup'>
                <span>Regístrate</span>
              </Link>
            </div>
          </div>
          <button type="submit" className="btn btn-danger btn-block">Login</button>
        </form>
      </div>
    </div>
  );
}
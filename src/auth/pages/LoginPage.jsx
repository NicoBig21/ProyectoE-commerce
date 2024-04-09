import { useNavigate } from 'react-router-dom'

export const LoginPage = () => {

  const navigate = useNavigate();

  const onLogin = () => {
      event.preventDefault();
      navigate('/', {
          replace: true
      });
  }

  return (
    <div className="container mt-5">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="card">
          <div className="card-body">
            <h1 className="card-title text-center mb-4">Login</h1>
            <form>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="Enter email" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Password" />
              </div>
              <button type="submit" className="btn btn-primary btn-block" onClick={ onLogin }>Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}
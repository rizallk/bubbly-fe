import { Link } from 'react-router-dom';
import './style.scss';

export default function Layout() {
  return (
    <div className="login">
      <div className="container-fluid">
        <div className="wrapper d-flex justify-content-center">
          <div className="card p-3 border-0 shadow">
            <div className="card-header bg-white text-center">
              <h2 className="fw-bold">
                <span className="text-theme">B</span>ubbly
              </h2>
            </div>
            <div className="card-body px-0">
              <h5 className="text-center mb-3">
                <b>Login</b>
              </h5>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Masukkan Username"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Masukkan Password"
                />
              </div>
              <div className="d-flex justify-content-center pt-2">
                <a href="dashboard.html" className="btn btn-theme">
                  Masuk
                </a>
              </div>
              {/* <div className="mb-3 d-flex justify-content-center flex-wrap">
                <div className="mb-3">
                  <Link to="/dashboard" className="btn btn-theme">
                    <i className="bi bi-envelope me-2"></i>
                    Login with Email Unsrat
                  </Link>
                </div>
                <Link to="/dashboard" className="btn btn-outline-theme-2 mb-3">
                  <img
                    className="google-logo"
                    src="/images/google-logo.png"
                    alt="Google Logo"
                  />{' '}
                  Login with Google
                </Link>
              </div> */}
              <p className="text-center pt-4 m-0">
                <small>
                  Belum punya Akun? <Link to="/signup">Daftar</Link>
                </small>
              </p>
            </div>
            <div className="card-footer text-body-secondary bg-white pt-3 text-center">
              All rights reserved. Copyright &copy; {new Date().getFullYear()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

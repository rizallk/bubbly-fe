import './style.scss';

export default function Login() {
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
              <div className="d-flex justify-content-center">
                <a href="dashboard.html" className="btn btn-theme">
                  Masuk
                </a>
              </div>
              <p className="text-center pt-4 m-0">
                Belum punya Akun? <a href="#">Daftar</a>
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

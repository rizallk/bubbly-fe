import { Link } from 'react-router-dom';
import './style.scss';

export default function Layout() {
  return (
    <div className="signup">
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
                <b>Signup</b>
              </h5>
              <div className="mb-3">
                <div className="mb-3">
                  <label className="form-label">Nama</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Masukkan Nama"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Angkatan</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Masukkan Angkatan"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Fakultas</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Masukkan Fakultas"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Jurusan</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Masukkan Jurusan"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Program Studi</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Masukkan Program Studi"
                  />
                </div>
                <hr />
                <div className="mb-3">
                  <label className="form-label">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Masukkan Username"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Masukkan Password"
                  />
                </div>
                <div className="d-flex justify-content-center pt-2">
                  <Link to="/dashboard" className="btn btn-theme">
                    Signup
                  </Link>
                </div>
              </div>
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

import { Link } from 'react-router-dom';
import './style.scss';
import { useParams } from 'react-router-dom';

export default function Layout() {
  let { isSignup } = useParams();

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
              {isSignup == 'true' ? (
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
                  <div className="d-flex justify-content-center">
                    <Link to="/dashboard" className="btn btn-theme">
                      Continue
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="mb-3 d-flex justify-content-center">
                  <Link to="/signup/true" className="btn btn-outline-theme-2">
                    <img
                      className="google-logo"
                      src="/images/google-logo.png"
                      alt="Google Logo"
                    />{' '}
                    Signup with Google
                  </Link>
                </div>
              )}
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

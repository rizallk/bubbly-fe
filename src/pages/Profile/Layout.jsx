import FooterDashboard from '../../components/Footer.Dashboard';
import SidebarDashboard from '../../components/Sidebar.Dashboard';
import './style.scss';

export default function Layout() {
  return (
    <div className="profile">
      <div className="container-fluid overflow-hidden">
        <div className="row vh-100 overflow-auto">
          <SidebarDashboard />
          <div className="col d-flex flex-column h-sm-100">
            <main className="row overflow-auto">
              <div className="col py-3">
                {/* Content */}
                <div className="d-flex flex-wrap">
                  <div className="card w-100">
                    <div className="card-body">
                      <h5 className="fw-semibold">Profile</h5>
                      <hr />
                      <form className="row g-3">
                        <div className="col-md-6">
                          <label className="form-label">Nama</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Masukkan Nama"
                            value="John Doe"
                          />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Angkatan</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Masukkan Angkatan"
                            value="2021"
                          />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Fakultas</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Masukkan Fakultas"
                            value="Teknik"
                          />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Jurusan</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Masukkan Jurusan"
                            value="Teknik Elektro"
                          />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Program Studi</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Masukkan Program Studi"
                            value="Teknik Informatika"
                          />
                        </div>
                        <div className="col-md-6 foto">
                          <label className="form-label">Foto</label>
                          <div className="d-flex flex-wrap">
                            <i className="bi bi-file-person"></i>
                            <input type="file" className="form-control" />
                          </div>
                        </div>
                        <div className="d-flex justify-content-end">
                          <a className="btn btn-success">Simpan</a>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </main>
            <FooterDashboard />
          </div>
        </div>
      </div>
    </div>
  );
}

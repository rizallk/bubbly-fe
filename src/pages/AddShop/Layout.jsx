import FooterDashboard from '../../components/Footer.Dashboard';
import SidebarDashboard from '../../components/Sidebar.Dashboard';
import './style.scss';

export default function Layout() {
  return (
    <div className="add-shop">
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
                      <h5 className="fw-semibold">Tambah Toko</h5>
                      <hr />
                      <form className="row g-3">
                        <div className="col-md-6">
                          <label className="form-label">Nama Toko</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Masukkan Nama Toko"
                          />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Alamat</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Masukkan Alamat"
                          />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Kontak</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Masukkan Kontak"
                          />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Maps URL Source</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Masukkan Maps URL "
                          />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Waktu Buka</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Masukkan Waktu Buka"
                          />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Waktu Tutup</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Masukkan Waktu Tutup"
                          />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Gambar</label>
                          <input type="file" className="form-control" />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Deskripsi</label>
                          <textarea
                            className="form-control"
                            placeholder="Masukkan Deskripsi"
                          ></textarea>
                        </div>
                        <div className="d-flex justify-content-end">
                          <a className="btn btn-success">Tambah</a>
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

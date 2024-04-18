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
                      <h5 className="fw-semibold">Edit Toko</h5>
                      <hr />
                      <form className="row g-3">
                        <div className="col-md-6">
                          <label className="form-label">Nama Toko</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Masukkan Nama Toko"
                            value="Syellys Cake and Bakery"
                          />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Alamat</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Masukkan Alamat"
                            value="Tondano, Minahasa"
                          />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Kontak</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Masukkan Kontak"
                            value="082271100321"
                          />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Maps URL Source</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Masukkan Maps URL"
                            value="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99761.15156048718!2d124.80661497591055!3d1.2951315964280001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x328715b13f445af7%3A0x164f3f9a2c72d9df!2sSyelly&#39;s%20Cake%20and%20Bakery!5e0!3m2!1sid!2sid!4v1713408347729!5m2!1sid!2sid"
                          />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Waktu Buka</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Masukkan Waktu Buka"
                            value="09.00 WITA"
                          />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Waktu Tutup</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Masukkan Waktu Tutup"
                            value="21.00"
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
                            value="Every cake have a different story, just like memories."
                          ></textarea>
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

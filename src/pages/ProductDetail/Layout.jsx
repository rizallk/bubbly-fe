import FooterDashboard from '../../components/Footer.Dashboard';
import SidebarDashboard from '../../components/Sidebar.Dashboard';
import './style.scss';

export default function Layout() {
  return (
    <div className="shop-detail">
      <div className="container-fluid overflow-hidden">
        <div className="row vh-100 overflow-auto">
          <SidebarDashboard />
          <div className="col d-flex flex-column h-sm-100 vh-100">
            <main className="row overflow-auto">
              <div className="col py-3">
                {/* Content */}
                <div className="d-flex flex-wrap">
                  <div className="card w-100">
                    <div className="card-body">
                      <h5 className="fw-semibold">Detail Produk</h5>
                      <hr />
                      <div className="card mb-3">
                        <div className="card-body">
                          <div className="row">
                            <div className="col-md">
                              <p>Nama Produk :</p>
                              <p>Harga :</p>
                              <p>Kategori :</p>
                            </div>
                            <div className="col-md">
                              <p>Deskripsi :</p>
                              <p>Gambar :</p>
                              <p>Total Disukai :</p>
                            </div>
                          </div>
                        </div>
                      </div>
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

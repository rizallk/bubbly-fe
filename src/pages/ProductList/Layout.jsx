import { Link } from 'react-router-dom';
import FooterDashboard from '../../components/Footer.Dashboard';
import SidebarDashboard from '../../components/Sidebar.Dashboard';
import './style.scss';

export default function Layout() {
  return (
    <div className="product-list">
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
                      <h5 className="fw-semibold">Daftar Semua Produk</h5>
                      <hr />
                      <div className="row search-bar">
                        <div className="col-md-4">
                          <div className="input-group  mb-3">
                            <span className="input-group-text">
                              <i className="bi bi-search"></i>
                            </span>
                            <input
                              type="text"
                              className="form-control dropdown-toggle"
                              placeholder="Search..."
                              aria-label="Search"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="table-responsive">
                        <table className="table table-striped">
                          <thead>
                            <tr>
                              <th scope="col">No</th>
                              <th scope="col">Nama Produk</th>
                              <th scope="col">Harga</th>
                              <th scope="col">Kategori</th>
                              <th scope="col">Nama Toko</th>
                              <th scope="col" className="text-center">
                                Aksi
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">1</th>
                              <td>Cake</td>
                              <td>Rp. 450.000</td>
                              <td>Makanan</td>
                              <td>Syellys Cake and Bakery</td>
                              <td style={{ width: '50px' }}>
                                <div className="d-flex">
                                  <Link
                                    to="/product/cake"
                                    className="btn btn-sm btn-primary me-1"
                                  >
                                    <i className="bi bi-eye"></i>
                                  </Link>
                                  <Link
                                    to="/dashboard/product/detail"
                                    className="btn btn-sm btn-info me-1"
                                  >
                                    <i className="bi bi-info-circle"></i>
                                  </Link>
                                  <Link
                                    to="/dashboard/product/edit"
                                    className="btn btn-sm btn-warning me-1"
                                  >
                                    <i className="bi bi-pencil-square"></i>
                                  </Link>
                                  <Link
                                    to="#"
                                    className="btn btn-sm btn-danger me-1"
                                  >
                                    <i className="bi bi-trash"></i>
                                  </Link>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">2</th>
                              <td>Dessert Box</td>
                              <td>Rp. 30.000</td>
                              <td>Makanan</td>
                              <td>Cassie Bakery</td>
                              <td style={{ width: '50px' }}>
                                <div className="d-flex">
                                  <Link
                                    to="/product/dessert-box"
                                    className="btn btn-sm btn-primary me-1"
                                  >
                                    <i className="bi bi-eye"></i>
                                  </Link>
                                  <Link
                                    to="/dashboard/product/detail"
                                    className="btn btn-sm btn-info me-1"
                                  >
                                    <i className="bi bi-info-circle"></i>
                                  </Link>
                                  <Link
                                    to="/dashboard/product/edit"
                                    className="btn btn-sm btn-warning me-1"
                                  >
                                    <i className="bi bi-pencil-square"></i>
                                  </Link>
                                  <Link
                                    to="#"
                                    className="btn btn-sm btn-danger me-1"
                                  >
                                    <i className="bi bi-trash"></i>
                                  </Link>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">3</th>
                              <td>Video Editing</td>
                              <td>Rp. 100.000</td>
                              <td>Jasa</td>
                              <td>Viels Multimedia Services</td>
                              <td style={{ width: '50px' }}>
                                <div className="d-flex">
                                  <Link
                                    to="/product/video-editing"
                                    className="btn btn-sm btn-primary me-1"
                                  >
                                    <i className="bi bi-eye"></i>
                                  </Link>
                                  <Link
                                    to="/dashboard/product/detail"
                                    className="btn btn-sm btn-info me-1"
                                  >
                                    <i className="bi bi-info-circle"></i>
                                  </Link>
                                  <Link
                                    to="/dashboard/product/edit"
                                    className="btn btn-sm btn-warning me-1"
                                  >
                                    <i className="bi bi-pencil-square"></i>
                                  </Link>
                                  <Link
                                    to="#"
                                    className="btn btn-sm btn-danger me-1"
                                  >
                                    <i className="bi bi-trash"></i>
                                  </Link>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
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

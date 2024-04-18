import { Link } from 'react-router-dom';
import FooterDashboard from '../../components/Footer.Dashboard';
import SidebarDashboard from '../../components/Sidebar.Dashboard';
import './style.scss';

export default function Layout() {
  return (
    <div className="shop-list">
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
                      <h5 className="fw-semibold">Daftar Toko</h5>
                      <hr />
                      <div className="row search-bar">
                        <div className="col-md-4">
                          <div className="input-group mb-3">
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
                              <th scope="col">Nama Toko</th>
                              <th scope="col">Jumlah Produk</th>
                              <th scope="col" className="text-center">
                                Aksi
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">1</th>
                              <td>Syellys Cake and Bakery</td>
                              <td>2</td>
                              <td style={{ width: '50px' }}>
                                <div className="d-flex">
                                  <Link
                                    to="/shop/syellys-cake-and-bakery"
                                    className="btn btn-sm btn-primary me-1"
                                  >
                                    <i className="bi bi-eye"></i>
                                  </Link>
                                  <Link
                                    to="/dashboard/shop/detail"
                                    className="btn btn-sm btn-info me-1"
                                  >
                                    <i className="bi bi-info-circle"></i>
                                  </Link>
                                  <Link
                                    to="/dashboard/shop/edit"
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
                              <td>cassie Bakery</td>
                              <td>1</td>
                              <td style={{ width: '50px' }}>
                                <div className="d-flex">
                                  <Link
                                    to="#"
                                    className="btn btn-sm btn-primary me-1"
                                  >
                                    <i className="bi bi-eye"></i>
                                  </Link>
                                  <Link
                                    to="/dashboard/shop/detail"
                                    className="btn btn-sm btn-info me-1"
                                  >
                                    <i className="bi bi-info-circle"></i>
                                  </Link>
                                  <Link
                                    to="/dashboard/shop/edit"
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

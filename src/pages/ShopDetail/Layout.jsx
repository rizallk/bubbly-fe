// import { Link } from 'react-router-dom';
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
                      <h5 className="fw-semibold">Detail Toko</h5>
                      <hr />

                      <div className="card mb-3">
                        <div className="card-body">
                          <div className="row">
                            <div className="col-md">
                              <p>Nama Toko : Syellys Cake and Bakery</p>
                              <p>Maps : </p>
                              <p>
                                {' '}
                                <iframe
                                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99761.15156048718!2d124.80661497591055!3d1.2951315964280001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x328715b13f445af7%3A0x164f3f9a2c72d9df!2sSyelly&#39;s%20Cake%20and%20Bakery!5e0!3m2!1sid!2sid!4v1713408347729!5m2!1sid!2sid"
                                  loading="lazy"
                                  referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                              </p>
                              <p>Kontak : 0822711100321</p>
                              <p>Alamat : Tondano, Minahasa</p>
                            </div>
                            <div className="col-md">
                              <p>
                                Deskripsi : Every cake have a different story,
                                just like memories.
                              </p>
                              <p>Waktu Buka : 09.00 WITA</p>
                              <p>Waktu Tutup : 21.00 WITA</p>
                              <p>Disukai : 112</p>
                              <p>Pengikut : 237</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <div className="row search-bar">
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
                      </div> */}
                      {/* <div className="table-responsive">
                        <table className="table table-striped">
                          <thead>
                            <tr>
                              <th scope="col">No</th>
                              <th scope="col">Nama Produk</th>
                              <th scope="col">Harga</th>
                              <th scope="col" className="text-center">
                                Aksi
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">1</th>
                              <td>Mark</td>
                              <td>Otto</td>
                              <td style={{ width: '50px' }}>
                                <div className="d-flex">
                                  <Link
                                    to="#"
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
                                    to="#"
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
                              <td>Jacob</td>
                              <td>Thornton</td>
                              <td style={{ width: '50px' }}>
                                <div className="d-flex">
                                  <Link
                                    to="/dashboard/shop/detail"
                                    className="btn btn-sm btn-info me-1"
                                  >
                                    <i className="bi bi-search"></i>
                                  </Link>
                                  <Link
                                    to="#"
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
                              <td>Larry the Bird</td>
                              <td>@twitter</td>
                              <td style={{ width: '50px' }}>
                                <div className="d-flex">
                                  <Link
                                    to="/dashboard/shop/detail"
                                    className="btn btn-sm btn-info me-1"
                                  >
                                    <i className="bi bi-search"></i>
                                  </Link>
                                  <Link
                                    to="#"
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
                      </div> */}
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

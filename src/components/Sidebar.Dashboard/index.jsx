import { Link } from 'react-router-dom';
import './style.scss';

export default function SidebarDashboard() {
  return (
    <div className="col-12 col-sm-3 col-xl-2 px-sm-2 px-0 shadow sidebar d-flex sticky-top">
      <div className="d-flex flex-sm-column flex-row flex-grow-1 align-items-center align-items-sm-start px-3 pt-2 text-white">
        <Link
          to="/"
          className="d-flex align-items-center pb-sm-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <span className="fs-5 fw-bold">
            B<span className="d-none d-sm-inline">ubbly</span>
          </span>
        </Link>
        <ul
          className="nav nav-custom nav-pills flex-sm-column flex-row flex-nowrap flex-shrink-1 flex-sm-grow-0 flex-grow-1 mb-sm-auto mb-0 justify-content-center align-items-center align-items-sm-start"
          id="menu"
        >
          <li className="nav-item">
            <Link to="/" className="nav-link px-sm-0 px-2">
              <i className="fs-5 bi-house"></i>
              <span className="ms-3 d-none d-sm-inline">Home</span>
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard"
              data-bs-toggle="collapse"
              className="nav-link px-sm-0 px-2"
            >
              <i className="fs-5 bi-speedometer2"></i>
              <span className="ms-3 d-none d-sm-inline">Dashboard</span>
            </Link>
          </li>
          <li className="dropdown">
            <a
              href="#"
              className="nav-link dropdown-toggle px-sm-0 px-1"
              id="dropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fs-5 bi-shop-window"></i>
              <span className="ms-3 d-none d-sm-inline">Shop</span>
            </a>
            <ul
              className="dropdown-menu dropdown-menu-dark text-small shadow"
              aria-labelledby="dropdown"
            >
              <li>
                <Link to="/dashboard/shops" className="dropdown-item">
                  Daftar Toko
                </Link>
              </li>
              <li>
                <Link to="/dashboard/shop/add" className="dropdown-item">
                  Tambah Toko
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/dashboard/product/add" className="nav-link px-sm-0 px-2">
              <i className="fs-5 bi-grid"></i>
              <span className="ms-3 d-none d-sm-inline">Add Product</span>
            </Link>
          </li>
        </ul>
        <div className="dropdown py-sm-4 mt-sm-auto ms-auto ms-sm-0 flex-shrink-1">
          <a
            className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
            id="dropdownUser1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt="hugenerd"
              width="28"
              height="28"
              className="rounded-circle"
            />
            <span className="d-none d-sm-inline mx-1">Joe</span>
          </a>
          <ul
            className="dropdown-menu dropdown-menu-dark text-small shadow"
            aria-labelledby="dropdownUser1"
          >
            <li>
              <Link to="/dashboard/profile" className="dropdown-item">
                Profile
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <Link to="/" className="dropdown-item">
                Sign out
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

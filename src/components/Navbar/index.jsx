import { useEffect } from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

export default function Navbar() {
  window.onscroll = function () {
    if (document.querySelector('#home')) {
      if (window.scrollY == 0 && window.scrollX == 0) {
        document.querySelector('.navbar-custom').classList.add('transparant');
        document.querySelector('.navbar-custom').classList.remove('shadow');
      } else {
        document
          .querySelector('.navbar-custom')
          .classList.remove('transparant');
        document.querySelector('.navbar-custom').classList.add('shadow');
      }
    }
  };

  useEffect(() => {
    if (document.querySelector('#home')) {
      if (window.scrollY == 0 && window.scrollX == 0) {
        document.querySelector('.navbar-custom').classList.add('transparant');
        document.querySelector('.navbar-custom').classList.remove('shadow');
      } else {
        document
          .querySelector('.navbar-custom')
          .classList.remove('transparant');
        document.querySelector('.navbar-custom').classList.add('shadow');
      }
    }
  }, []);

  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-custom shadow">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Bubbly
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Kategori
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/products/kue" className="dropdown-item">
                    Fashion
                  </Link>
                </li>
                <li>
                  <Link to="/products/mie" className="dropdown-item">
                    Mie
                  </Link>
                </li>
                <li>
                  <Link to="/products/fashion" className="dropdown-item">
                    Fashion
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-link text-white">
                Produk
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/shops" className="nav-link text-white">
                Toko
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about-us" className="nav-link text-white">
                Tentang Kami
              </Link>
            </li>
            <form className="d-flex" role="search">
              <div className="input-group search-bar rounded">
                <span className="input-group-text">
                  <i className="bi bi-search"></i>
                </span>
                <input
                  type="text"
                  className="form-control dropdown-toggle rounded-0"
                  placeholder="Cari produk atau toko ..."
                  aria-label="Search"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                  onFocus={() => {
                    // console.log(
                    //   document.querySelector('.dropdown-toggle-filter')
                    // );
                    document
                      .querySelector('.dropdown-toggle-filter')
                      .classList.add('show');
                    document
                      .querySelector('.dropdown-toggle-menu')
                      .classList.add('show');
                  }}
                />
                {/* Filter */}
                <li className="nav-item dropdown dropdown-filter input-group-text p-0">
                  <a
                    className="nav-link dropdown-toggle p-0"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    aria-expanded="false"
                  >
                    <i className="bi bi-filter"></i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-filter p-3">
                    <p>Filter</p>
                    <select className="form-select mb-2">
                      <option selected>Pilih Jenis</option>
                      <option>Produk</option>
                      <option>Toko</option>
                      <option>Semua</option>
                    </select>
                    <select className="form-select mb-2">
                      <option selected>Pilih Fakultas</option>
                      <option>Teknik</option>
                      <option>Kedokteran</option>
                      <option>Semua</option>
                    </select>
                    <select className="form-select mb-2">
                      <option selected>Pilih Jurusan</option>
                      <option>Teknik Elektro</option>
                      <option>Pendidikan Dokter</option>
                      <option>Semua</option>
                    </select>
                    <select className="form-select mb-2">
                      <option selected>Pilih Program Studi</option>
                      <option>Teknik Informatika</option>
                      <option>Pendidikan Dokter</option>
                      <option>Semua</option>
                    </select>
                    <button className="btn btn-theme w-100 mt-2" type="submit">
                      Cari
                    </button>
                  </div>
                </li>
              </div>
            </form>
          </ul>
          <div className="d-flex justify-content-end btn-wrapper">
            <Link
              to="/signup"
              className="btn btn-outline-light-custom signup-btn"
            >
              Signup
            </Link>
            <Link to="/login" className="btn btn-light login-btn">
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

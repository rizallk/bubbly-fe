import { Link } from 'react-router-dom';
import './style.scss';

export default function Hero() {
  return (
    <div className="hero">
      <div className="container-fluid">
        <div className="content d-flex justify-content-center align-items-center flex-column">
          <h1 className="fw-bold">Bubbly</h1>
          <p className="fw-semibold">
            Platform untuk Mahasiswa Wirausaha UNSRAT
          </p>
          <div className="btn-wrapper mt-3">
            <Link to="/login" className="btn btn-outline-theme-2 me-3">
              Get Started
            </Link>
            <Link to="/products" className="btn btn-theme">
              See Products
            </Link>
          </div>
          <a href="#content">
            <i className="bi bi-arrow-down-circle-fill text-theme"></i>
          </a>
        </div>
      </div>
      <div id="content" className="separate"></div>
    </div>
  );
}

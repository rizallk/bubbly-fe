import './style.scss';

export default function Footer() {
  return (
    <footer className="pt-4">
      <img className="design-1" src="/images/rounded-design.png" />
      <img className="design-2" src="/images/rounded-design.png" />
      {/* <img className="logo-unsrat-grey" src="/images/logo-unsrat-grey.png" /> */}
      <div className="top py-3">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 mb-4">
              <h1 className="fw-bold title">
                <span className="b">B</span>ubbly
              </h1>
              <h5 className="fw-semibold ">
                Platform untuk Mahasiswa Wirausaha UNSRAT
              </h5>
              <small>
                Dibuat oleh Mahasiswa Teknik Informatika UNSRAT Angkatan 2021
                untuk Tugas Project MK Pengembangan Aplikasi Web Berbasis
                Framework
              </small>
            </div>
            <div className="col-md-4 mb-4">
              <div className="row">
                <div className="col">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <a href="">Makanan</a>
                    </li>
                    <li className="list-group-item">
                      <a href="">Minuman</a>
                    </li>
                    <li className="list-group-item">
                      <a href="">Produk</a>
                    </li>
                    <li className="list-group-item">
                      <a href="">Jasa</a>
                    </li>
                  </ul>
                </div>
                <div className="col">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <a href="">Semua Produk</a>
                    </li>
                    <li className="list-group-item">
                      <a href="">Semua Toko</a>
                    </li>
                    <li className="list-group-item">
                      <a href="">Kewirausahaan</a>
                    </li>
                    <li className="list-group-item">
                      <a href="">Tentang Kami</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <h4 className="fw-semibold">Ikuti Kami</h4>
              <div className="social-media">
                <a href="#">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#">
                  <i className="bi bi-twitter-x"></i>
                </a>
                <a href="#">
                  <i className="bi bi-whatsapp"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom py-2 text-center">
        <small>
          All rights reserved. Copyright &copy; {new Date().getFullYear()}
        </small>
      </div>
    </footer>
  );
}

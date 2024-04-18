import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import './style.scss';

export default function Layout() {
  return (
    <div className="about-us">
      <Navbar />
      <div className="container-fluid content" style={{ marginTop: '82px' }}>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title fw-semibold">
              Tentang <span className="text-theme">Bubbly</span>
            </h5>
            <hr />
            <p>
              Bubbly adalah aplikasi web yang memberikan mahasiswa Universitas
              Sam Ratulangi (UNSRAT) sebuah platform untuk mendirikan dan
              mengembangkan usaha mereka. Kami berkomitmen menyediakan alat dan
              sumber daya yang diperlukan bagi para mahasiswa untuk mewujudkan
              impian mereka, sementara juga memperluas aksesibilitas bagi
              seluruh komunitas untuk menikmati keberagaman produk lokal. Dengan
              demikian, Bubbly berperan sebagai jembatan yang menghubungkan
              antara pelaku usaha muda dan konsumen yang mendukung pertumbuhan
              ekonomi lokal.
              <br />
              <br />
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

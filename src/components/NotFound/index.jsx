import './style.scss';

export default function NotFound() {
  return (
    <div className="not-found">
      <div className="container-fluid">
        <div className="content">
          <div className="card">
            <div className="card-body">
              <h3 className="fw-semibold">404 - Page Not Found</h3>
              <p>Halaman yang Anda cari tidak ditemukan.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

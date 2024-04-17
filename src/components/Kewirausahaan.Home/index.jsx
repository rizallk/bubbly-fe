import './style.scss';

export default function KewirausahaanHome() {
  return (
    <div className="kewirausahaan pt-2 mb-5">
      <div className="text-center">
        <h3 className="fw-bold text-theme">UKM Kewirausahaan</h3>
        <h5 className="fw-semibold">
          Beberapa UKM Kewirausahaan yang bergabung di{' '}
          <span className="text-theme fw-bold">Bubbly</span>
        </h5>
      </div>
      <div className="content pt-3 d-flex justify-content-center pb-3">
        <a href="">
          <div className="card border-0 card-fakultas">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div>
                <img
                  className="pt-1"
                  src="/images/logo-fatek-unsrat.jpg"
                  alt="Logo Fatek Unsrat"
                />
              </div>
              <div className="card-body">
                <p className="fw-semibold mb-0">Fakultas Teknik</p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

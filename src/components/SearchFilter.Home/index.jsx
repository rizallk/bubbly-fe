import './style.scss';

export default function SearchFilterHome() {
  return (
    <div className="search-filter mb-5">
      <div className="d-flex justify-content-center">
        <div className="content">
          <h3 className="fw-bold mb-3">
            <span className="text-theme">Cari</span> berdasarkan
          </h3>
          <div className="input-group">
            <select className="form-select" aria-label="Default select example">
              <option selected>Pilih Jenis</option>
              <option value="1">Produk</option>
              <option value="2">Toko</option>
            </select>
            <select className="form-select" aria-label="Default select example">
              <option selected>Pilih Fakultas</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <select className="form-select" aria-label="Default select example">
              <option selected>Pilih Jurusan</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <select className="form-select" aria-label="Default select example">
              <option selected>Pilih Prodi.</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <button className="btn btn-outline-theme-2">Cari</button>
          </div>
        </div>
      </div>
    </div>
  );
}

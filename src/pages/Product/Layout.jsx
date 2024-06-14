import { useParams, Link } from 'react-router-dom';
import './style.scss';
import Navbar from '../../components/Navbar';
import SliderProduct from '../../components/Slider.Product';
import { rupiahFormat } from '../../utils/rupiahFormat';
import { useState } from 'react';
import { useEffect } from 'react';
import Footer from '../../components/Footer';
import DataProduct from '../../api/temp/product.json';
import DataShop from '../../api/temp/shop.json';
import DataSeller from '../../api/temp/seller.json';

export default function Layout() {
  let { slug } = useParams();

  const [dataProduct, setDataProduct] = useState({
    slug: '',
    nama: 'Loading...',
    harga: 0,
    desk: 'Loading...',
    gambar: [],
    idPenjual: '',
    idToko: '',
    isExist: false,
  });

  const [dataShop, setDataShop] = useState({
    slug: '',
    nama: 'Loading...',
    maps: 'Loading...',
    kontak: 'Loading...',
    alamat: 'Loading...',
    gambar: '',
  });

  const [dataSeller, setDataSeller] = useState({
    nama: '',
    angkatan: '',
    fakultas: '',
    jurusan: '',
    prodi: '',
    foto: '',
  });

  const [jumlah, setJumlah] = useState(1);
  const [opsiPengiriman, setOpsiPengiriman] = useState('');
  const [metodePembayaran, setMetodePembayaran] = useState('');
  const [catatan, setCatatan] = useState('');
  const [totalHarga, setTotalHarga] = useState(dataProduct.harga);

  const [requiredField, setRequiredField] = useState(false);
  const [requiredFieldMsg, setRequiredFieldMsg] = useState('');

  const decJumlah = (result) => {
    if (result < 2) {
      setJumlah(1);
    } else {
      setJumlah(result - 1);
    }
  };

  const handleOrderButton = () => {
    if (opsiPengiriman === '') {
      setRequiredField(true);
      setRequiredFieldMsg('Opsi Pengiriman harus dipilih!');
    } else if (metodePembayaran === '') {
      setRequiredField(true);
      setRequiredFieldMsg('Metode Pembayaran harus dipilih!');
    } else {
      document.querySelector('#buat-pesanan').click();
    }
  };

  useEffect(() => {
    setTotalHarga(dataProduct.harga * jumlah);
  }, [jumlah, dataProduct.harga]);

  useEffect(() => {
    DataProduct.data.forEach((product) => {
      if (product.slug === slug) {
        setDataProduct({
          ...dataProduct,
          nama: product.nama,
          harga: product.harga,
          desk: product.deskripsi,
          gambar: product.gambar,
          idPenjual: product.id_penjual,
          idToko: product.id_toko,
          isExist: true,
        });

        DataSeller.data.forEach((seller) => {
          if (product.id_penjual === seller.id_penjual) {
            setDataSeller({
              nama: seller.nama,
              angkatan: seller.angkatan,
              fakultas: seller.fakultas,
              jurusan: seller.jurusan,
              prodi: seller.prodi,
              foto: seller.foto,
            });

            return true;
          }

          return false;
        });

        DataShop.data.forEach((shop) => {
          if (product.id_toko === shop.id_toko) {
            setDataShop({
              slug: shop.slug,
              nama: shop.nama,
              maps: shop.google_maps_src,
              kontak: shop.kontak,
              alamat: shop.alamat,
              gambar: shop.gambar,
            });

            return true;
          }

          return false;
        });

        return true;
      }

      return false;
    });
  }, []);

  const text = `Halo, saya ingin memesan ${
    dataProduct.nama
  }%0a%0aRincian :%0aJumlah Pesanan : ${jumlah}%0aOpsi Pengiriman : ${opsiPengiriman}%0aMetode Pembayaran : ${metodePembayaran}%0aCatatan : ${catatan}%0a%0aTotal Harga : ${rupiahFormat(
    totalHarga
  )}`;

  return (
    <div className="product">
      <Navbar />
      <div className="container-fluid content">
        {dataProduct.isExist ? (
          <div className="row">
            <div className="col-md-8">
              <SliderProduct>
                {dataProduct.gambar.map((v, i) => {
                  return (
                    <img
                      key={i}
                      src={`/images/${v}`}
                      className="d-block object-fit-contain w-100 px-2"
                      alt="Gambar Produk"
                    />
                  );
                })}
              </SliderProduct>
              <div className="product-info mb-3 pt-2">
                <h5 className="fw-semibold">{dataProduct.nama}</h5>
                <h4 className="fw-bold">{rupiahFormat(dataProduct.harga)}</h4>
              </div>
              <div className="product-detail mb-3">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col">
                        <div className="address">
                          <p className="fw-semibold">Kontak</p>
                          <p>
                            <i className="bi bi-whatsapp"></i> {dataShop.kontak}
                          </p>
                        </div>
                      </div>
                      <div className="col">
                        <div className="address">
                          <p className="fw-semibold">Alamat</p>
                          <p>{dataShop.alamat}</p>
                        </div>
                      </div>
                    </div>
                    <div className="maps">
                      <p className="fw-semibold">Maps</p>
                      {dataShop.maps === 'Tidak ada' ? (
                        <p>Tidak ada</p>
                      ) : (
                        <p>
                          <iframe
                            src={dataShop.maps}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                          ></iframe>
                        </p>
                      )}
                    </div>
                    <div className="description">
                      <p className="fw-semibold">Deskripsi</p>
                      <p>{dataProduct.desk}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card store-info mb-3">
                <div className="card-body">
                  <div className=" d-flex align-items-center">
                    <div className="left">
                      <div className="store-image">
                        <img src="/images/shop-image.png" />
                      </div>
                    </div>
                    <div className="right ms-3 w-100">
                      <p className="fw-semibold">{dataShop.nama}</p>
                      <div className="d-flex">
                        <Link
                          to={`/shop/${dataShop.slug}`}
                          className="btn btn-outline-theme w-100 me-2"
                        >
                          Lihat Toko
                        </Link>
                        <button
                          className="btn btn-theme w-100"
                          data-bs-toggle="modal"
                          data-bs-target="#sellerProfileModal"
                        >
                          Profil Penjual
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card sticky-top variant-options">
                <div className="card-body">
                  <h5 className="card-title fw-semibold mb-3">Pemesanan</h5>
                  <div className="mb-3">
                    <div className="row align-items-center">
                      <label
                        htmlFor="jumlah"
                        className="form-label col-sm-auto m-0"
                      >
                        Jumlah
                      </label>
                      <div className="input-group col-sm jumlah-input mt-2">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          onClick={() => decJumlah(jumlah)}
                        >
                          -
                        </button>
                        <input
                          type="number"
                          className="form-control"
                          id="jumlah"
                          value={jumlah}
                          onChange={(e) => {
                            setJumlah(e.target.value);
                          }}
                          onBlur={(e) =>
                            e.target.value < 2
                              ? setJumlah(1)
                              : setJumlah(e.target.value)
                          }
                          placeholder="Masukkan jumlah pesanan"
                        />
                        <button
                          type="button"
                          className="btn btn-secondary"
                          onClick={() => setJumlah(jumlah + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm mb-3">
                      <label htmlFor="opsi-pengiriman" className="form-label">
                        Opsi Pengiriman
                      </label>
                      <select
                        className="form-select"
                        value={opsiPengiriman}
                        onChange={(e) => {
                          setOpsiPengiriman(e.target.value);
                          setRequiredField(false);
                          setRequiredFieldMsg('');
                        }}
                      >
                        <option value="" selected>
                          Pilih
                        </option>
                        <option value="Antar ke Alamat">Antar ke Alamat</option>
                        <option value="Ambil di Tempat">Ambil di Tempat</option>
                      </select>
                    </div>
                    <div className="col-sm mb-3">
                      <label htmlFor="metode-pembayaran" className="form-label">
                        Metode Pembayaran
                      </label>
                      <select
                        className="form-select"
                        value={metodePembayaran}
                        onChange={(e) => {
                          setMetodePembayaran(e.target.value);
                          setRequiredField(false);
                          setRequiredFieldMsg('');
                        }}
                      >
                        <option value="" selected>
                          Pilih
                        </option>
                        <option value="Cash">Cash</option>
                        <option value="E-wallet">E-Wallet</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="row">
                      <div className="col-sm mb-3">
                        {' '}
                        <label htmlFor="catatan" className="form-label">
                          Catatan
                        </label>
                        <textarea
                          className="form-control"
                          id="catatan"
                          rows="3"
                          placeholder="Optional"
                          value={catatan}
                          onChange={(e) => setCatatan(e.target.value)}
                        ></textarea>
                      </div>
                      <div className="col-sm">
                        <p>Total Harga</p>
                        <p className="fw-semibold">
                          {rupiahFormat(totalHarga)}
                        </p>
                      </div>
                    </div>
                  </div>
                  {requiredField ? (
                    <div className="alert alert-danger" role="alert">
                      {requiredFieldMsg}
                    </div>
                  ) : null}
                  <button
                    type="button"
                    className="btn btn-theme w-100"
                    onClick={() => handleOrderButton()}
                  >
                    Buat Pesanan
                  </button>
                  <button
                    id="buat-pesanan"
                    data-bs-toggle="modal"
                    data-bs-target="#detailPesananModal"
                    hidden
                  ></button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // <NotFound />
          <h4 className="text-center pt-5" style={{ height: '100vh' }}></h4>
        )}
      </div>

      {/* Modal Profil Penjual */}
      <div
        className="modal seller-profile-modal fade"
        id="sellerProfileModal"
        tabIndex="-1"
        aria-labelledby="sellerProfileModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="sellerProfileModalLabel">
                Profil Penjual
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {dataSeller.foto ? (
                <img
                  className="img-fluid p-5"
                  src={`/images/${dataSeller.foto}`}
                  alt="Foto Penjual"
                />
              ) : (
                <div className="photo text-center">
                  <i className="bi bi-person-circle"></i>
                </div>
              )}
              <p>Nama Mahasiswa/i : {dataSeller.nama}</p>
              <p>Angkatan : {dataSeller.angkatan}</p>
              <p>Fakultas : {dataSeller.fakultas}</p>
              <p>Jurusan : {dataSeller.jurusan}</p>
              <p>Program Studi : {dataSeller.prodi}</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Detail Pesanan */}
      <div
        className="modal detail-pesanan-modal fade"
        id="detailPesananModal"
        tabIndex="-1"
        aria-labelledby="detailPesananModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="detailPesananModalLabel">
                Detail Pesanan
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>Nama Produk : {dataProduct.nama}</p>
              <p>Jumlah Pesanan : {jumlah}</p>
              {/* <p className="mb-1">Nama Pembeli : </p>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Masukkan Nama Anda (Pembeli)"
              /> */}
              {/* <p>Kontak Pembeli :</p> */}
              <p>Opsi Pengiriman : {opsiPengiriman}</p>
              {/* {opsiPengiriman == 'Antar ke Alamat' ? (
                <p>Alamat Pembeli : </p>
              ) : null} */}
              <p>Metode Pembayaran : {metodePembayaran}</p>
              <p>Catatan : {catatan ? catatan : 'Tidak ada'}</p>
              <hr />
              <p>
                Total Harga : <b>{rupiahFormat(totalHarga)}</b>
              </p>
            </div>
            <div className="modal-footer">
              {/* <button type="button" className="btn btn-theme">
                Konfirmasi
              </button> */}
              <a
                className="btn btn-theme"
                href={`https://wa.me/+62${dataShop.kontak}?text=${text}`}
              >
                Konfirmasi
              </a>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Batalkan
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

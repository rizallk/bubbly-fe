import './style.scss';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ProductCard from '../../components/ProductCard/index.';
import DataProduct from '../../api/temp/product.json';
import DataShop from '../../api/temp/shop.json';
import DataSeller from '../../api/temp/seller.json';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

export default function Shop() {
  let { slug } = useParams();

  const [dataProduct, setDataProduct] = useState([]);

  const [dataShop, setDataShop] = useState({
    nama: 'Loading...',
    maps: 'Loading...',
    kontak: 'Loading...',
    alamat: 'Loading...',
    waktuBuka: 'Loading...',
    waktuTutup: 'Loading...',
    desc: 'Loading...',
    disukai: 0,
    pengikut: 0,
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

  useEffect(() => {
    setDataProduct([]);

    DataShop.data.forEach((shop) => {
      if (shop.slug === slug) {
        setDataShop({
          nama: shop.nama,
          maps: shop.google_maps_src,
          kontak: shop.kontak,
          alamat: shop.alamat,
          desc: shop.deskripsi,
          waktuBuka: shop.waktu_buka,
          waktuTutup: shop.waktu_tutup,
          disukai: shop.disukai,
          pengikut: shop.pengikut,
          gambar: shop.gambar,
        });

        DataSeller.data.forEach((seller) => {
          if (shop.id_penjual === seller.id_penjual) {
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

        DataProduct.data.forEach((product) => {
          if (shop.id_toko === product.id_toko) {
            let dataObject = {
              slug: product.slug,
              nama: product.nama,
              harga: product.harga,
              gambar: product.gambar,
            };

            setDataProduct((prevArray) => [...prevArray, dataObject]);

            return true;
          }

          return false;
        });

        return true;
      }

      return false;
    });
  }, []);

  return (
    <div className="shop">
      <Navbar />
      <div className="container-fluid content">
        <div className="header rounded shadow">
          <img
            className="wallpaper img-fluid rounded-top w-100"
            src={`/images/${dataShop.gambar}`}
          />
          <div className="shop-profile rounded-bottom p-3 bg-white">
            {/* <div className="row"> */}
            {/* <div className="col-md-8"> */}
            <div className="shop-info-left d-flex align-items-center">
              <div className="left">
                <div className="shop-image">
                  <img
                    className="p-2 border rounded"
                    src={`/images/${
                      dataShop.gambar ? dataShop.gambar : 'shop-image-color.png'
                    }`}
                  />
                </div>
              </div>
              <div className="right ms-3 w-100">
                <h5 className="fw-semibold">{dataShop.nama}</h5>
                <p>{dataShop.alamat}</p>
                <div className="d-flex flex-wrap">
                  <a href="#" className="btn btn-outline-theme me-2 mb-2">
                    Chat Penjual
                  </a>
                </div>
              </div>
            </div>
            {/* </div> */}
            {/* <div className="col-md-4">
                <div className="d-flex justify-content-end align-items-center h-100 shop-info-right">
                  <div className=" me-4">
                    <div className="like d-flex h-100 align-items-center">
                      <p>
                        <b>{dataShop.pengikut}</b> Pengikut
                      </p>
                    </div>
                    <div className="like d-flex h-100 align-items-center">
                      <p className="m-0">
                        <b>{dataShop.disukai}</b> Disukai
                      </p>
                    </div>
                  </div>
                  <div className="operational border-start ps-4 text-left">
                    <p>
                      Buka{' '}
                      <span className="fw-semibold">{dataShop.waktuBuka}</span>
                    </p>
                    <p className="m-0">
                      Tutup{' '}
                      <span className="fw-semibold">{dataShop.waktuTutup}</span>
                    </p>
                  </div>
                </div>
              </div> */}
            {/* </div> */}
          </div>
        </div>
        <div className="body mt-4 rounded p-3 shadow bg-white">
          <h5 className="fw-semibold">Deskripsi Toko</h5>
          <p>{dataShop.desc}</p>
          <hr />
          <div className="row">
            <div className="col-md-8">
              <div className="all-product mb-3">
                <h5 className="fw-semibold">Semua Produk</h5>
                <div className="d-flex flex-wrap">
                  {dataProduct.map((v, i) => {
                    return (
                      <ProductCard
                        key={i}
                        link={v.slug}
                        productName={v.nama}
                        price={v.harga}
                        image={v.gambar[0]}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="seller-profile border rounded p-3">
                <h5 className="fw-semibold">Profil Penjual</h5>
                <div className="photo text-center my-3">
                  {dataSeller.foto ? (
                    <img
                      className="border"
                      src={`/images/${dataSeller.foto}`}
                      alt="Foto Seller"
                    />
                  ) : (
                    <i className="bi bi-person-circle"></i>
                  )}
                </div>
                <p>Nama Mahasiswa/i : {dataSeller.nama}</p>
                <p>Angkatan : {dataSeller.angkatan}</p>
                <p>Fakultas : {dataSeller.fakultas}</p>
                <p>Jurusan : {dataSeller.jurusan}</p>
                <p>Program Studi : {dataSeller.prodi}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

import './style.scss';
// import Carousel from '../../components/Carousel';
import CategoryHome from '../../components/Category.Home';
import Footer from '../../components/Footer';
import Hero from '../../components/Hero';
import Navbar from '../../components/Navbar';
import RecentProductHome from '../../components/RecentProduct.Home';
import TopProductHome from '../../components/TopProduct.Home';
import ShopCard from '../../components/ShopCard';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import DataShop from '../../api/temp/shop.json';

export default function Layout() {
  const kategoriMakanan = [
    {
      title: 'Kue',
      image: 'kue.png',
      link: '/products/kue',
    },
    {
      title: 'Mie',
      image: 'mie.png',
      link: '/products/mie',
    },
    {
      title: 'Ayam',
      image: 'ayam.png',
      link: '/products/ayam',
    },
  ];
  const kategoriProduk = [
    {
      title: 'Fashion',
      image: 'fashion.png',
      link: '/products/fashion',
    },
    {
      title: 'Aksesoris',
      image: 'aksesoris.png',
      link: '/products/aksesoris',
    },
    {
      title: 'Skincare',
      image: 'skincare.png',
      link: '/products/skincare',
    },
  ];
  const kategoriJasa = [
    {
      title: 'Desain',
      image: 'desain.png',
      link: '/products/desain',
    },
    {
      title: 'Editing',
      image: 'editing.jpg',
      link: '/products/editing',
    },
    {
      title: 'Aplikasi',
      image: 'aplikasi.jpg',
      link: '/products/aplikasi',
    },
  ];

  // const toko = [
  //   {
  //     title: 'Nama Toko',
  //     desc: 'Deskripsi singkat Toko',
  //     image: 'shop-image-color.png',
  //     owner: 'Xavier Harahap',
  //     address: 'Wanea, Manado',
  //     shopLink: '#',
  //   },
  //   {
  //     title: 'Nama Toko',
  //     desc: 'Deskripsi singkat Toko',
  //     image: 'shop-image-color.png',
  //     owner: 'Xavier Harahap',
  //     address: 'Wanea, Manado',
  //     shopLink: '#',
  //   },
  //   {
  //     title: 'Nama Toko',
  //     desc: 'Deskripsi singkat Toko',
  //     image: 'shop-image-color.png',
  //     owner: 'Xavier Harahap',
  //     address: 'Wanea, Manado',
  //     shopLink: '#',
  //   },
  //   {
  //     title: 'Nama Toko',
  //     desc: 'Deskripsi singkat Toko',
  //     image: 'shop-image-color.png',
  //     owner: 'Xavier Harahap',
  //     address: 'Wanea, Manado',
  //     shopLink: '#',
  //   },
  //   {
  //     title: 'Nama Toko',
  //     desc: 'Deskripsi singkat Toko',
  //     image: 'shop-image-color.png',
  //     owner: 'Xavier Harahap',
  //     address: 'Wanea, Manado',
  //     shopLink: '#',
  //   },
  // ];

  const [toko, setToko] = useState([]);

  useEffect(() => {
    setToko([]);

    DataShop.data.forEach((shop) => {
      let dataObject = {
        slug: shop.slug,
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
      };

      setToko((prevArray) => [...prevArray, dataObject]);
    });
  }, []);

  return (
    <div className="home">
      <Navbar />
      <Hero />
      <div id="home" className="container-fluid mt-5">
        {/* <SearchFilterHome /> */}
        {/* <Carousel /> */}
        <RecentProductHome />
        <img className="design-bubble-1" src="/images/design-bubble-left.png" />
        <TopProductHome />
        <div className="row pt-3 mb-4">
          <div className="col-md-6">
            <h3 className="fw-bold text-theme">Kategori</h3>
            <CategoryHome title="Makanan">
              {kategoriMakanan.map((v, i) => {
                return (
                  <Link to={v.link} key={i}>
                    <div className="card m-2">
                      <img
                        src={`/images/${v.image}`}
                        className="card-img-top rounded shadow-sm"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-text fw-bold text-color-theme text-center">
                          {v.title}
                        </h5>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </CategoryHome>
            <img
              className="design-bubble-2"
              src="/images/design-bubble-right.png"
            />
            <CategoryHome title="Produk">
              {kategoriProduk.map((v, i) => {
                return (
                  <Link to={v.link} key={i}>
                    <div className="card m-2">
                      <img
                        src={`/images/${v.image}`}
                        className="card-img-top rounded shadow-sm"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-text fw-bold text-color-theme text-center">
                          {v.title}
                        </h5>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </CategoryHome>
            <CategoryHome title="Jasa">
              {kategoriJasa.map((v, i) => {
                return (
                  <Link to={v.link} key={i}>
                    <div className="card m-2">
                      <img
                        src={`/images/${v.image}`}
                        className="card-img-top rounded shadow-sm"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-text fw-bold text-color-theme text-center">
                          {v.title}
                        </h5>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </CategoryHome>
          </div>
          <div className="col-md-6">
            <h3 className="fw-bold text-theme">Toko</h3>
            <h4 className="fw-semibold mb-3">
              Beberapa yang paling banyak Disukai
            </h4>
            <div className="shop border rounded p-3 bg-white">
              {toko.map((v, i) => {
                if (i < 5) {
                  return (
                    <ShopCard
                      key={i}
                      title={v.nama}
                      desc={v.desc}
                      owner="Nama Pemilik"
                      address={v.alamat}
                      slug={v.slug}
                      image={v.gambar}
                      isHome={true}
                    />
                  );
                }
              })}
              <Link to="/shops" className="btn btn-theme w-100">
                Toko Lainnya
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

import Slider from 'react-slick';
import './style.scss';
import { useState } from 'react';
import DataProduct from '../../api/temp/product.json';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { rupiahFormat } from '../../utils/rupiahFormat';

export default function RecentProductHome() {
  var settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    autoplay: true,
    infinite: true,
    dots: true,
    responsive: [
      // Breakpoint max-width
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '30px',
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '20px',
          slidesToShow: 2,
        },
      },
    ],
  };

  // const recentProduct = [
  //   {
  //     title: 'PAKET Ombre Wardah',
  //     harga: 'Rp. 106.000',
  //     image: 'produk.png',
  //   },
  //   {
  //     title: 'PAKET Ombre Wardah Glasting Liquid Lip - MAUVE (02+05)',
  //     harga: 'Rp. 106.000',
  //     image: 'produk.png',
  //   },
  //   {
  //     title: 'PAKET Ombre ',
  //     harga: 'Rp. 106.000',
  //     image: 'produk.png',
  //   },
  //   {
  //     title: 'PAKET Ombre Wardah Glasting Liquid ',
  //     harga: 'Rp. 106.000',
  //     image: 'produk.png',
  //   },
  //   {
  //     title: 'PAKET Ombre Wardah Glasting Liquid Lip - MAUVE (02+05)',
  //     harga: 'Rp. 106.000',
  //     image: 'produk.png',
  //   },
  //   {
  //     title: 'PAKET Ombre Wardah Glasting Liquid Lip - MAUVE (02+05)',
  //     harga: 'Rp. 106.000',
  //     image: 'produk.png',
  //   },
  //   {
  //     title: 'PAKET Ombre Wardah Glasting Liquid Lip - MAUVE (02+05)',
  //     harga: 'Rp. 106.000',
  //     image: 'produk.png',
  //   },
  //   {
  //     title: 'PAKET Ombre Wardah Glasting Liquid Lip - MAUVE (02+05)',
  //     harga: 'Rp. 106.000',
  //     image: 'produk.png',
  //   },
  //   {
  //     title: 'PAKET Ombre Wardah Glasting Liquid Lip - MAUVE (02+05)',
  //     harga: 'Rp. 106.000',
  //     image: 'produk.png',
  //   },
  //   {
  //     title: 'PAKET Ombre Wardah Glasting Liquid Lip - MAUVE (02+05)',
  //     harga: 'Rp. 106.000',
  //     image: 'produk.png',
  //   },
  //   {
  //     title: 'PAKET Ombre Wardah Glasting Liquid Lip - MAUVE (02+05)',
  //     harga: 'Rp. 106.000',
  //     image: 'produk.png',
  //   },
  //   {
  //     title: 'PAKET Ombre Wardah Glasting Liquid Lip - MAUVE (02+05)',
  //     harga: 'Rp. 106.000',
  //     image: 'produk.png',
  //   },
  //   {
  //     title: 'PAKET Ombre Wardah Glasting Liquid Lip - MAUVE (02+05)',
  //     harga: 'Rp. 106.000',
  //     image: 'produk.png',
  //   },
  //   {
  //     title: 'PAKET Ombre Wardah Glasting Liquid Lip - MAUVE (02+05)',
  //     harga: 'Rp. 106.000',
  //     image: 'produk.png',
  //   },
  // ];

  const [recentProduct, setRecentProduct] = useState([]);

  useEffect(() => {
    setRecentProduct([]);

    DataProduct.data.forEach((product) => {
      let dataObject = {
        slug: product.slug,
        nama: product.nama,
        harga: product.harga,
        gambar: product.gambar,
        namaToko: 'Nama Toko',
      };

      setRecentProduct((prevArray) => [...prevArray, dataObject]);
    });
  }, []);

  return (
    <div className="recent-product mb-5">
      <h4 className="fw-semibold mb-3">
        Beberapa
        <span className="text-theme"> Produk</span> terbaru
      </h4>
      <Slider className="p-2 border rounded bg-white" {...settings}>
        {recentProduct.map((v, i) => {
          return (
            <Link to={`/product/${v.slug}`} key={i}>
              <div className="card m-2">
                {v.ga}
                <img src={`/images/${v.gambar[0]}`} className="card-img-top" />
                <div className="card-body">
                  <div className="top">
                    <p className="card-title">{v.nama}</p>
                    <p className="card-text fw-bold price">
                      {rupiahFormat(v.harga)}
                    </p>
                  </div>
                  <div className="bottom">
                    <hr />
                    <small>
                      <div className="d-flex align-items-center mb-1">
                        <div className="me-2">
                          <i className="bi bi-shop"></i>
                        </div>
                        <div className="shop-name">Nama Toko</div>
                      </div>
                    </small>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </Slider>
    </div>
  );
}

// RecentProductHome.propTypes = {
//   children: node,
// };

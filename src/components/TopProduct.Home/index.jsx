import Slider from 'react-slick';
import { node } from 'prop-types';
import './style.scss';
import DataProduct from '../../api/temp/product.json';
import { useState } from 'react';
import { useEffect } from 'react';
import { rupiahFormat } from '../../utils/rupiahFormat';
import { Link } from 'react-router-dom';

export default function TopProductHome() {
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

  // const topProduct = [
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

  const [topProduct, setTopProduct] = useState([]);

  useEffect(() => {
    setTopProduct([]);

    DataProduct.data.forEach((product) => {
      let dataObject = {
        slug: product.slug,
        nama: product.nama,
        harga: product.harga,
        gambar: product.gambar,
        namaToko: 'Nama Toko',
      };

      setTopProduct((prevArray) => [...prevArray, dataObject]);
    });
  }, []);

  return (
    <div className="top-product pt-3 mb-5">
      <h4 className="fw-semibold mb-3">
        <span className="text-theme">Produk</span> yang paling banyak Disukai
      </h4>
      <Slider className="p-2 border rounded bg-white" {...settings}>
        {topProduct.reverse().map((v, i) => {
          return (
            <Link to={`/product/${v.slug}`} key={i}>
              <div className="card m-2">
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

TopProductHome.propTypes = {
  children: node,
};

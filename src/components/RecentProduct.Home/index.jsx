import Slider from 'react-slick';
import { node } from 'prop-types';
import './style.scss';

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

  const recentProduct = [
    {
      title: 'PAKET Ombre Wardah',
      harga: 'Rp. 106.000',
      image: 'produk.png',
    },
    {
      title: 'PAKET Ombre Wardah Glasting Liquid Lip - MAUVE (02+05)',
      harga: 'Rp. 106.000',
      image: 'produk.png',
    },
    {
      title: 'PAKET Ombre ',
      harga: 'Rp. 106.000',
      image: 'produk.png',
    },
    {
      title: 'PAKET Ombre Wardah Glasting Liquid ',
      harga: 'Rp. 106.000',
      image: 'produk.png',
    },
    {
      title: 'PAKET Ombre Wardah Glasting Liquid Lip - MAUVE (02+05)',
      harga: 'Rp. 106.000',
      image: 'produk.png',
    },
    {
      title: 'PAKET Ombre Wardah Glasting Liquid Lip - MAUVE (02+05)',
      harga: 'Rp. 106.000',
      image: 'produk.png',
    },
    {
      title: 'PAKET Ombre Wardah Glasting Liquid Lip - MAUVE (02+05)',
      harga: 'Rp. 106.000',
      image: 'produk.png',
    },
    {
      title: 'PAKET Ombre Wardah Glasting Liquid Lip - MAUVE (02+05)',
      harga: 'Rp. 106.000',
      image: 'produk.png',
    },
    {
      title: 'PAKET Ombre Wardah Glasting Liquid Lip - MAUVE (02+05)',
      harga: 'Rp. 106.000',
      image: 'produk.png',
    },
    {
      title: 'PAKET Ombre Wardah Glasting Liquid Lip - MAUVE (02+05)',
      harga: 'Rp. 106.000',
      image: 'produk.png',
    },
    {
      title: 'PAKET Ombre Wardah Glasting Liquid Lip - MAUVE (02+05)',
      harga: 'Rp. 106.000',
      image: 'produk.png',
    },
    {
      title: 'PAKET Ombre Wardah Glasting Liquid Lip - MAUVE (02+05)',
      harga: 'Rp. 106.000',
      image: 'produk.png',
    },
    {
      title: 'PAKET Ombre Wardah Glasting Liquid Lip - MAUVE (02+05)',
      harga: 'Rp. 106.000',
      image: 'produk.png',
    },
    {
      title: 'PAKET Ombre Wardah Glasting Liquid Lip - MAUVE (02+05)',
      harga: 'Rp. 106.000',
      image: 'produk.png',
    },
  ];

  return (
    <div className="recent-product mb-5">
      <h4 className="fw-semibold mb-3">
        Beberapa
        <span className="text-theme"> Produk</span> terbaru
      </h4>
      <Slider className="p-2 border rounded bg-white" {...settings}>
        {recentProduct.map((v, i) => {
          return (
            <a href="" key={i}>
              <div className="card m-2">
                <img src={`/images/${v.image}`} className="card-img-top" />
                <div className="card-body">
                  <div className="top">
                    <p className="card-title">{v.title}</p>
                    <p className="card-text fw-bold price">{v.harga}</p>
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
            </a>
          );
        })}
      </Slider>
    </div>
  );
}

RecentProductHome.propTypes = {
  children: node,
};

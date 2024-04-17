import { useParams } from 'react-router-dom';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import './style.scss';
import { useState } from 'react';
import { useEffect } from 'react';
import DataProduct from '../../api/temp/product.json';
import DataShop from '../../api/temp/shop.json';
import ProductCard from '../../components/ProductCard/index.';

export default function Layout() {
  let { categorySlug } = useParams();

  const [dataProduct, setDataProduct] = useState([]);

  useEffect(() => {
    setDataProduct([]);

    if (categorySlug) {
      DataProduct.data.forEach((product) => {
        if (product.kategori.toLowerCase() === categorySlug) {
          DataShop.data.forEach((shop) => {
            if (shop.id_toko === product.id_toko) {
              let dataObject = {
                slug: product.slug,
                nama: product.nama,
                harga: product.harga,
                gambar: product.gambar,
                namaToko: shop.nama,
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
    } else {
      DataProduct.data.forEach((product) => {
        DataShop.data.forEach((shop) => {
          if (shop.id_toko === product.id_toko) {
            let dataObject = {
              slug: product.slug,
              nama: product.nama,
              harga: product.harga,
              gambar: product.gambar,
              namaToko: shop.nama,
            };

            setDataProduct((prevArray) => [...prevArray, dataObject]);

            return true;
          }

          return false;
        });

        return false;
      });
    }
  }, [categorySlug]);

  return (
    <div className="products">
      <Navbar />
      <div className="container-fluid content">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title fw-semibold">
              Semua Produk{' '}
              {categorySlug
                ? `di ${
                    categorySlug.charAt(0).toUpperCase() + categorySlug.slice(1)
                  }`
                : null}
            </h5>
            <hr />
            <div className="d-flex flex-wrap">
              {dataProduct.map((v, i) => {
                return (
                  <ProductCard
                    key={i}
                    link={v.slug}
                    productName={v.nama}
                    price={v.harga}
                    image={v.gambar[0]}
                    shopName={v.namaToko}
                    bottom={true}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

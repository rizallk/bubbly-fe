import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import './style.scss';
import { useState } from 'react';
import { useEffect } from 'react';
import DataSeller from '../../api/temp/seller.json';
import DataShop from '../../api/temp/shop.json';
import ProductCard from '../../components/ProductCard/index.';
import ShopCard from '../../components/ShopCard';

export default function Layout() {
  const [dataShop, setDataShop] = useState([]);

  useEffect(() => {
    setDataShop([]);

    DataShop.data.forEach((shop) => {
      DataSeller.data.forEach((seller) => {
        if (shop.id_penjual === seller.id_penjual) {
          let dataObject = {
            slug: shop.slug,
            nama: shop.nama,
            alamat: shop.alamat,
            gambar: shop.gambar,
            owner: seller.nama,
          };

          setDataShop((prevArray) => [...prevArray, dataObject]);

          return true;
        }

        return false;
      });
    });
  }, []);

  return (
    <div className="products">
      <Navbar />
      {console.log(dataShop)}
      <div className="container-fluid content">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title fw-semibold">Semua Toko</h5>
            <hr />
            <div className="d-flex flex-wrap">
              {dataShop.map((v, i) => {
                return (
                  <ShopCard
                    key={i}
                    title={v.nama}
                    owner={v.owner}
                    image={v.gambar}
                    address={v.alamat}
                    slug={v.slug}
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

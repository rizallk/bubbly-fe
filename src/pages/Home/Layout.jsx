import './style.scss';
import Carousel from '../../components/Carousel';
import CategoryHome from '../../components/Category.Home';
import Footer from '../../components/Footer';
import Hero from '../../components/Hero';
import KewirausahaanHome from '../../components/Kewirausahaan.Home';
import Navbar from '../../components/Navbar';
import RecentProductHome from '../../components/RecentProduct.Home';
import TopProductHome from '../../components/TopProduct.Home';
import ShopCard from '../../components/ShopCard';

export default function Layout() {
  const kategoriMakanan = [
    {
      title: 'Kue',
      image: 'kue.png',
    },
    {
      title: 'Kue',
      image: 'kue.png',
    },
    {
      title: 'Kue',
      image: 'kue.png',
    },
    {
      title: 'Kue',
      image: 'kue.png',
    },
    {
      title: 'Kue',
      image: 'kue.png',
    },
    {
      title: 'Kue',
      image: 'kue.png',
    },
  ];

  const toko = [
    {
      title: 'Nama Toko',
      desc: 'Deskripsi singkat Toko',
      image: 'shop-image-color.png',
      owner: 'Xavier Harahap',
      address: 'Wanea, Manado',
      shopLink: '#',
    },
    {
      title: 'Nama Toko',
      desc: 'Deskripsi singkat Toko',
      image: 'shop-image-color.png',
      owner: 'Xavier Harahap',
      address: 'Wanea, Manado',
      shopLink: '#',
    },
    {
      title: 'Nama Toko',
      desc: 'Deskripsi singkat Toko',
      image: 'shop-image-color.png',
      owner: 'Xavier Harahap',
      address: 'Wanea, Manado',
      shopLink: '#',
    },
    {
      title: 'Nama Toko',
      desc: 'Deskripsi singkat Toko',
      image: 'shop-image-color.png',
      owner: 'Xavier Harahap',
      address: 'Wanea, Manado',
      shopLink: '#',
    },
    {
      title: 'Nama Toko',
      desc: 'Deskripsi singkat Toko',
      image: 'shop-image-color.png',
      owner: 'Xavier Harahap',
      address: 'Wanea, Manado',
      shopLink: '#',
    },
  ];

  return (
    <div className="home">
      <Navbar />
      <Hero />
      <div id="home" className="container-fluid mt-5">
        {/* <SearchFilterHome /> */}
        <Carousel />
        <RecentProductHome />
        <img className="design-bubble-1" src="/images/design-bubble-left.png" />
        <TopProductHome />
        <div className="row pt-3 mb-4">
          <div className="col-md-6">
            <h3 className="fw-bold text-theme">Kategori</h3>
            <CategoryHome title="Makanan">
              {kategoriMakanan.map((v, i) => {
                return (
                  <a href="#" key={i}>
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
                  </a>
                );
              })}
            </CategoryHome>
            <img
              className="design-bubble-2"
              src="/images/design-bubble-right.png"
            />
            <CategoryHome title="Produk">
              {kategoriMakanan.map((v, i) => {
                return (
                  <a href="#" key={i}>
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
                  </a>
                );
              })}
            </CategoryHome>
            <CategoryHome title="Jasa">
              {kategoriMakanan.map((v, i) => {
                return (
                  <a href="#" key={i}>
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
                  </a>
                );
              })}
            </CategoryHome>
          </div>
          <div className="col-md-6">
            <h3 className="fw-bold text-theme">Toko</h3>
            <h4 className="fw-semibold mb-3">
              Beberapa yang paling banyak Disukai
            </h4>
            <div className="shop border rounded p-3 ">
              {toko.map((v, i) => {
                return (
                  <ShopCard
                    key={i}
                    title={v.title}
                    desc={v.desc}
                    owner={v.owner}
                    address={v.address}
                    slug={v.shopLink}
                    isHome={true}
                  />
                );
              })}
              <a href="#" className="btn btn-theme w-100">
                Toko Lainnya
              </a>
            </div>
          </div>
        </div>
        <KewirausahaanHome />
      </div>
      <Footer />
    </div>
  );
}

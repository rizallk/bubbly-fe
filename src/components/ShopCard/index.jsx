import { Link } from 'react-router-dom';
import './style.scss';
import { string, bool } from 'prop-types';

export default function ShopCard({
  title,
  owner,
  image,
  address,
  slug,
  isHome = false,
}) {
  return (
    <div className="shop-card">
      <div className={`card m-2 ${isHome ? 'w-100' : null}`}>
        <div className="row g-0">
          <div className="col-4 image-wrapper">
            <div className="d-flex justify-content-center align-items-center h-100">
              {image ? (
                <img
                  src={`/images/${image}`}
                  className="img-fluid shop-image rounded-start"
                  alt="Gambar Toko"
                />
              ) : (
                <img
                  src="/images/shop-image-color.png"
                  className="img-fluid shop-image default rounded-start p-3"
                  alt="Gambar Toko"
                />
              )}
            </div>
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title fw-semibold mb-3">{title}</h5>
              <small>
                <div className="d-flex mb-1">
                  <div className="me-2">
                    <i className="bi bi-person-circle"></i>
                  </div>
                  <div>{owner}</div>
                </div>
              </small>
              <small>
                <div className="d-flex">
                  <div className="me-2">
                    <i className="bi bi-geo-alt-fill"></i>
                  </div>
                  <div>{address}</div>
                </div>
              </small>
              <Link
                to={`/shop/${slug}`}
                className="btn btn-outline-theme w-100 mt-3"
              >
                Lihat Toko
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ShopCard.propTypes = {
  title: string,
  owner: string,
  image: string,
  address: string,
  slug: string,
  isHome: bool,
};

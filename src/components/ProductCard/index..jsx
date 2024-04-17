import { Link } from 'react-router-dom';
import './style.scss';
import { rupiahFormat } from '../../utils/rupiahFormat';
import { string, number, bool } from 'prop-types';

export default function ProductCard({
  link,
  productName,
  price,
  image,
  shopName,
  bottom = false,
}) {
  return (
    <Link to={`/product/${link}`}>
      <div className="card product-card m-2">
        <img src={`/images/${image}`} className="card-img-top" />
        <div className="card-body">
          <div className="top">
            <p className="card-title">{productName}</p>
            <p className="card-text fw-bold price">{rupiahFormat(price)}</p>
          </div>
          {bottom ? (
            <div className="bottom">
              <hr />
              <small>
                <div className="d-flex align-items-center mb-1">
                  <div className="me-2">
                    <i className="bi bi-shop"></i>
                  </div>
                  <div className="shop-name">{shopName}</div>
                </div>
              </small>
            </div>
          ) : null}
        </div>
      </div>
    </Link>
  );
}

ProductCard.propTypes = {
  productName: string,
  price: number,
  shopName: string,
  image: string,
  bottom: bool,
  link: string,
};

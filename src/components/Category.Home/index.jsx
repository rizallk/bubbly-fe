import Slider from 'react-slick';
import { string, node } from 'prop-types';
import './style.scss';

export default function CategoryHome({ title, children }) {
  var settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplaySpeed: 2000,
    autoplaySpeed: 5000,
    autoplay: true,
    dots: true,
    infinite: true,
    responsive: [
      // Breakpoint max-width
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '30px',
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '30px',
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="category mb-5">
      <h4 className="fw-semibold mb-3">
        <span className="text-color-theme">{title}</span>
      </h4>
      <Slider className="p-2 border rounded bg-white" {...settings}>
        {children}
      </Slider>
    </div>
  );
}

CategoryHome.propTypes = {
  title: string.isRequired,
  children: node,
};

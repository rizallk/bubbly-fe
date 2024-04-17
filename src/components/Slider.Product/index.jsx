import './style.scss';
import Slider from 'react-slick';
import { node } from 'prop-types';

export default function SliderProduct({ children }) {
  // var settingsFor = {
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   fade: true,
  // };

  var settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplaySpeed: 2000,
    autoplaySpeed: 5000,
    autoplay: true,
    dots: true,
    infinite: true,
    swipeToSlide: true,
    focusOnSelect: true,
    responsive: [
      // Breakpoint max-width
      {
        breakpoint: 768,
        settings: {
          arrows: true,
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
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container mb-4 pb-3">
      <Slider className="slider rounded shadow" {...settings}>
        {children}
      </Slider>
    </div>
  );
}

SliderProduct.propTypes = {
  children: node,
};

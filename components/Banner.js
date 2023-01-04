import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Banner() {
  return (
    <div className="relative">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img
            loading="lazy"
            src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51DWgNo1fdL._SX3000_.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/8160RuRhSUL._SX3000_.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61uIgTKwDKL._SX3000_.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71vdTR50hFL._SX3000_.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71F75NHXTGL._SX3000_.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71GoSeO4zpL._SX3000_.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/610itsE9fJL._SX3000_.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71cQMXCLSvL._SX3000_.jpg"
            alt=""
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;

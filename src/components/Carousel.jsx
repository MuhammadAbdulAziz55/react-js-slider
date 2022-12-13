import { useEffect, useState } from "react";
import "../style/Carousel.css";

const Carousel = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut = true;

  useEffect(() => {
    timeOut === autoPlay &&
      setTimeout(() => {
        slideRight();
      }, 2500);
  });
  const slideRight = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
    // if (current === images.length - 1) {
    //   setCurrent(0);
    // } else {
    //   setCurrent(current + 1);
    // }
  };
  const slideLeft = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
    // if (current === 0) {
    //   setCurrent(images.length - 1);
    // } else {
    //   setCurrent(current - 1);
    // }
  };
  console.log(current);
  return (
    <div
      className="carousel"
      onMouseEnter={() => {
        setAutoPlay(false);
        clearTimeout(timeOut);
      }}
      onMouseLeave={() => {
        setAutoPlay(true);
      }}
    >
      <div class="carousel-wrapper">
        {images.map((image, index) => {
          return (
            <div
              key={index}
              className={
                index === current
                  ? "carousel-card carousel-card-active"
                  : "carousel-card"
              }
            >
              <img
                className="card-image"
                // width="540px"
                // height="300px"
                src={image.image}
                alt="slideImage"
              />
              <div class="card-overlay">
                <h2 class="card-title">{image.title}</h2>
              </div>
            </div>
          );
        })}
        <div class="carousel-arrow-left" onClick={slideLeft}>
          &lsaquo;
        </div>
        <div class="carousel-arrow-right" onClick={slideRight}>
          &rsaquo;
        </div>
        <div class="carousel-pagination">
          {images.map((_, index) => {
            return (
              <div
                key={index}
                className={
                  index === current
                    ? "pagination-dot pagination-dot-active"
                    : "pagination-dot"
                }
                onClick={() => setCurrent(index)}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;

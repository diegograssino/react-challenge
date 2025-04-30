import { default as MultiCarousel } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Carousel = () => {
  const images = [
    "/assets/UI/carousel/promo1.webp",
    "/assets/UI/carousel/promo2.webp",
    "/assets/UI/carousel/promo3.webp",
  ];
  const responsive = {
    all: {
      breakpoint: { max: 4000, min: 0 },
      items: 1,
    },
  };

  return (
    <MultiCarousel
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={4000}
      keyBoardControl={true}
      transitionDuration={500}
      containerClass="carousel__container"
      arrows={false}
      // dotListClass="custom-dot-list-style"
      // itemClass="carousel-item-padding-40-px"
    >
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      ))}
    </MultiCarousel>
  );
};

export default Carousel;

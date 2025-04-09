import { default as MultiCarousel } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Carousel = () => {
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
      // containerClass="carousel-container"
      arrows={false}
      // dotListClass="custom-dot-list-style"
      // itemClass="carousel-item-padding-40-px"
    >
      <img
        src="/public/assets/UI/carousel/ghibli-promo.jpg"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
      <img
        src="/public/assets/UI/carousel/ghibli-promo-2.jpg"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </MultiCarousel>
  );
};

export default Carousel;

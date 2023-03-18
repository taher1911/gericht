// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import images from "../../../assets/slider";

// Import Swiper styles
import "swiper/css";
import "./Slider.css";

const Slider = () => {
  const { slider1, slider2, slider3, slider4, slider5, slider6, slider7 } =
    images;
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={3}
      speed={1000}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      breakpoints={{
        0: {
          slidesPerView: 1.35,
          spaceBetween: 0,
          centeredSlides: true,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        700: {
          slidesPerView: 2.5,
          spaceBetween: 20,
          centeredSlides: true,
        },

        900: {
          slidesPerView: 2,
          spaceBetween: 5,
          centeredSlides: true,
        },
        1300: {
          slidesPerView: 3,
          spaceBetween: 10,
          centeredSlides: true,
        },
      }}
    >
      {[slider1, slider2, slider3, slider4, slider5, slider6, slider7].map(
        (item, i) => (
          <SwiperSlide key={i}>
            <img src={item} alt="slider " className="slider-image" />
          </SwiperSlide>
        )
      )}
    </Swiper>
  );
};

export default Slider;

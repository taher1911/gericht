import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";

import images from "../../../assets/team";

import "./Team.css";
const TeamSlider = () => {
  const { slider1, slider2, slider3, slider4, slider5, slider6 } = images;
  return (
    <section className="team__slider">
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
            slidesPerView: 2,
            spaceBetween: 20,
            centeredSlides: true,
          },
          700: {
            slidesPerView: 2.5,
            spaceBetween: 20,
            centeredSlides: true,
          },

          1300: {
            slidesPerView: 3,
            spaceBetween: 10,
            centeredSlides: true,
          },
        }}
      >
        {[slider1, slider2, slider3, slider4, slider5, slider6].map(
          (item, i) => (
            <SwiperSlide key={i}>
              <div className="team__slider__image">
                {" "}
                <img src={item} alt="slider " className="team-slider-image" />
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </section>
  );
};

export default TeamSlider;

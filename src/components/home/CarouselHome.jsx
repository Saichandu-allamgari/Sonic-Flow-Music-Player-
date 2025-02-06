import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const ImageCarousel = () => {
  const images = [
    "src/assets/pictures/photo-one.avif",
    "src/assets/pictures/photo-two.avif",
    "src/assets/pictures/photo-three.avif",
    "src/assets/pictures/photo-four.avif",
    "src/assets/pictures/photo-five.avif",
    "src/assets/pictures/photo-six.avif",
    "src/assets/pictures/photo-seven.avif",
  ];

  return (
    <div className="w-[100%] max-w-4xl mx-auto ">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 2000 }}
        loop={true}
        className="rounded-lg shadow-lg"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} >
            <img
              src={src}
              alt={`Image ${index + 1}`}
              className="w-[100%] h-[400px] bg-contain object-cover rounded-[10px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageCarousel;

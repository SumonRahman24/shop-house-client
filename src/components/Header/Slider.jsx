// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Slider = () => {
  return (
    <div className="mt-10 container m-auto ">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper rounded-md"
      >
        <SwiperSlide>
          <img src="/slider/slider1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/slider/slider2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/slider/slider3.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;

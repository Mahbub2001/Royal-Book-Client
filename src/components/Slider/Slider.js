import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";
import book from "../../assets/images/book.jpg";
import book2 from "../../assets/images/book2.jpg";
import SecondaryButton from "../SecondaryButton/SecondaryButton";
import { FaArrowRight } from "react-icons/fa";

const Slider = () => {
  return (
    <>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className=""
      >
        <SwiperSlide className="lg:px-16 md:px-10 sm:px-0">
          <div className="flex lg:flex-row flex-col-reverse items-center justify-between gap-5">
            <div className="flex items-center  lg:text-left text-center">
              <div>
                <h1 className="text-6xl my-6">
                  Birds Gonna <p className="py-5">Be Happy</p>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                  aliquid repellat reiciendis libero nostrum <br /> voluptas
                  accusantium corporis debitis, dolor maiores error quis animi
                  pariatur magnam incidunt illo sit veniam ad.
                </p>
                <div className="flex justify-center lg:justify-start">
                  <SecondaryButton classes="lg:my-28 flex items-center gap-3 justify-between">
                    READ MORE
                    <FaArrowRight />
                  </SecondaryButton>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <img src={book} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="lg:px-16 md:px-10 sm:px-0">
          <div className="flex lg:flex-row flex-col-reverse items-center justify-between gap-5">
            <div className="flex items-center lg:text-left text-center">
              <div>
                <h1 className="text-6xl my-6">
                  Life Of The <p className="py-5">Wild</p>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                  aliquid repellat reiciendis libero nostrum <br /> voluptas
                  accusantium corporis debitis, dolor maiores error quis animi
                  pariatur magnam incidunt illo sit veniam ad.
                </p>
                <div className="flex justify-center lg:justify-start">
                  <SecondaryButton classes="lg:my-28 flex items-center gap-3 justify-between">
                    READ MORE
                    <FaArrowRight />
                  </SecondaryButton>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <img src={book2} alt="" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;

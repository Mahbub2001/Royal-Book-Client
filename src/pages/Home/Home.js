import React from "react";
import Slider from "../../components/Slider/Slider";
import bg_slide from "../../assets/images/bg_slide.png";
import BestSellingBook from "../../components/bestSellingBook/BestSellingBook";
import Subscribe from "../../components/Subscribe/Subscribe";
import Categories from "../Categories/Categories";
import Section2Home from "../../components/section2Home/Section2Home";
import useTitle from "../../hook/useTitle";

const Home = () => {
  useTitle("Home")
  return (
    <div className="mt-40  flex flex-col justify-center items-center m-5">
      <div data-aos="fade-right" className="lg:w-[60%] w-[80%]">
        <img className="absolute right-60 top-40" src={bg_slide} alt="" />
        <Slider />
      </div>
      <div className="my-28 h-full lg:h-40 py-10 bg-[#EDEBE4] w-full flex flex-col items-center justify-center">
        <Section2Home />
      </div>
      <div className="mt-28">
        <Categories />
      </div>
      <div className="my-28">
        <BestSellingBook />
      </div>
      <div className="mb-28">
          <Subscribe/>
      </div>
    </div>
  );
};

export default Home;

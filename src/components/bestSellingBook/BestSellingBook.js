import React from "react";
import book2 from "../../assets/images/book2.jpg";
import SecondaryButton from "../SecondaryButton/SecondaryButton";
import { FaArrowRight } from "react-icons/fa";
import "./BestSellingBook.css";

const BestSellingBook = () => {
  return (
    <section className="flex flex-col justify-center items-center">

        <div className="flex lg:flex-row flex-col justify-between items-center gap-10">
          <div>
            <img className="" src={book2} alt="" />
          </div>
          <div>
            <h1 className="lg:text-6xl text-3xl mb-3">Best Selling Book</h1>
            <div className="w-20 flex-grow border-t-4 border-gray-400"></div>
            <p className="mt-10 mb-4">By Timbur Hood</p>
            <h3 className="text-2xl md:text-3xl mb-5">Birds Gonna Be Happy</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
              doloribus nostrum voluptate <br /> blanditiis soluta quis magnam
              beatae. Repudiandae, sit voluptates.
            </p>
            <p className=" my-5 text-2xl">$ 50.00</p>
            <SecondaryButton classes="flex items-center">
              Shop It Now
              <FaArrowRight />
            </SecondaryButton>
          </div>

      </div>
    </section>
  );
};

export default BestSellingBook;

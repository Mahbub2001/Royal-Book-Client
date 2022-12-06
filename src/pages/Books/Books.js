import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Parallax } from "react-parallax";
import image1 from "../../assets/images/paralax-image.jpg";
import Book from "./Book";
import axios from "axios";
import BookDetails from "./BookDetails";
import MainSpinner from "../../components/Spinner/MainSpinner";
import useTitle from "../../hook/useTitle";
import './Book.css'

const Books = () => {
  useTitle("Books")
  const books = useLoaderData();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleBookDetails = (id) => {
    if (id) {
      setLoading(true);
      axios.get(`${process.env.REACT_APP_API_URL}/books/${id}`).then((res) => {
        setData(res.data);
        setLoading(false);
      });
    }
  };
  //  console.log(data);
  return (
    <div>
      <div className="lg:block hidden">
        <Parallax className="h-[90vh] relative" strength={800} bgImage={image1}>
          <div className="absolute top-[10rem] left-[15rem]">
            <span className="border-2 p-1 border-orange-300 text-[7rem]">
              R
            </span>
            <span className="text-6xl">OYAL</span>
            <br />
            <p className="text-6xl">BOOK</p>
            <p className="my-5">
              Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
              Esse tempore libero perferendis explicabo <br /> veritatis totam,
              dolor eos repudiandae tempora, nihil <br /> culpa! Veritatis
              consectetur atque exercitationem libero <br /> quibusdam autem
              aspernatur numquam?
            </p>
          </div>
        </Parallax>
      </div>
      <div className="lg:hidden block relative picture-book">
          <div className="top-[10rem] left-[15rem] p-5">
            <span className="border-2 border-orange-300 sm:text-4xl text-[7rem]">
              R
            </span>
            <span className="lg:text-6xl text-4xl">OYAL</span>
            <br />
            <p className="lg:text-6xl text-4xl">BOOK</p>
            <p className="my-5">
              Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
              Esse tempore libero perferendis explicabo <br /> veritatis totam,
              dolor eos repudiandae tempora, nihil <br /> culpa! Veritatis
              consectetur atque exercitationem libero <br /> quibusdam autem
              aspernatur numquam?
            </p>
          </div>
      </div>
      <h1 className="text-center my-28 text-3xl">
        <span className="border-2 lg:text-[7rem] md:text-[5rem] border-orange-300 font">
          F
        </span>
        EATURED BOOKS
      </h1>
      <div className="flex flex-col justify-center items-center">
        <div className="lg:w-[80%]">
          <div className="grid lg:grid-cols-4 grid-cols-1 gap-10 justify-center">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 justify-center items-center lg:col-span-3 ">
              {books.map((book) => (
                <Book
                  key={book._id}
                  book={book}
                  handleBookDetails={handleBookDetails}
                ></Book>
              ))}
            </div>
            <div className="lg:col-span-1">
              {loading ? (
                <MainSpinner />
              ) : (
                <BookDetails data={data}></BookDetails>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;

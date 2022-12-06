import React, { useState } from "react";
import { IoIosCall } from "react-icons/io";
import { reportProduct } from "../../api/products";
import toast from "react-hot-toast";
import { AiOutlineCheck } from "react-icons/ai";
import { data } from "autoprefixer";

const Book = ({ book, handleBookDetails }) => {
  const [datas, setData] = useState({});
  const {
    _id,
    book_name,
    phone_number,
    location,
    price,
    purchase_year,
    condition,
    book_category,
    date,
    description,
    writter,
    image,
    seller,
  } = book;

  const handleReport = () => {
    const reportBookData = {
      reportBookId: _id,
      book_name,
      phone_number,
      location,
      price,
      purchase_year,
      condition,
      book_category,
      date,
      description,
      writter,
      image,
      seller,
    };
    reportProduct(reportBookData).then((data) => {
      // setLoading(false)
      toast.success("Reported!");
    });
  };

  if (seller?.email) {
    fetch(`${process.env.REACT_APP_API_URL}/verify-seller/${seller.email}`, {
      method: "GET",
      headers: {
        authorization: `bearer ${localStorage.getItem("royal-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }

  return (
    <div
      onClick={() => handleBookDetails(_id)}
      className="relative mx-auto p-0 sm:px-1 cursor-pointer"
    >
      <div
        // to="/"
        className="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full"
      >
        <div className="p-4 rounded-lg shadow-md">
          <div className="flex justify-center relative rounded-lg overflow-hidden ">
            <div className="transition-transform duration-500 transform ease-in-out hover:scale-110 ">
              <div className="">
                <img
                  className="h-[20rem] w-[21.5rem] rounded"
                  src={image}
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="mt-4">
            {datas?.verify ? (
              <div className="flex items-center text-green-600 font-bold">
                <AiOutlineCheck />
                verfied
              </div>
            ) : (
              ""
            )}

            <h2
              className="font-medium text-base md:text-lg text-gray-800 line-clamp-1"
              title="New York"
            >
              {book_name}
            </h2>
            <p
              className="mt-2 font-semibold text-sm text-gray-800 line-clamp-1"
              title="New York, NY 10004, United States"
            >
              {writter}
            </p>
            <p
              className="mt-2 text-sm text-gray-800 line-clamp-1"
              title="New York, NY 10004, United States"
            >
              {location}
            </p>
          </div>

          <div className="grid grid-cols-2 grid-rows-2 gap-4 mt-8">
            <p className="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
              <IoIosCall />
              <span className="mt-2 ml-1 xl:mt-0">
                <small>{phone_number}</small>
              </span>
            </p>
            <p className="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
              <span className="">
                <small>Purchase Year : </small>
              </span>
              <span className="mt-2 ml-1 xl:mt-0">
                {" "}
                <small>{purchase_year}</small>
              </span>
            </p>
            <p className="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
              <span>
                <small>Condition : </small>
              </span>
              <span className="mt-2 ml-1 xl:mt-0">
                <small>{condition}</small>
              </span>
            </p>
            <p className="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
              <span>
                <small>Price : </small>
              </span>
              <span className="mt-2 ml-1 xl:mt-0">${price}</span>
            </p>
          </div>

          <div className="grid grid-cols-2 mt-8 ">
            <div className="flex items-center">
              <div className="relative">
                <div className="rounded-full w-6 h-6 md:w-8 md:h-8 bg-gray-200">
                  <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                    src={seller?.image}
                    alt=""
                  />
                </div>
              </div>
              <p className="ml-2 text-gray-800 line-clamp-1">
                <small>{seller?.name}</small>
              </p>
            </div>
            <div className="flex justify-end mt-2">
              <button
                onClick={handleReport}
                className="bg-red-600 px-2 py-0.5 text-white font-bold tracking-widest rounded text-xs hover:bg-red-500"
              >
                {" "}
                Report !!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;

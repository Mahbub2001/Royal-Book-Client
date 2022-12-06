import React, { useState } from "react";
import toast from "react-hot-toast";
import { deleteProduct } from "../../../api/products";
import DeleteModal from "../../../components/Modal/DeleteModal";

const MyProductsRow = ({ product, fetchProducts }) => {
  console.log(product);
  const { book_name, image, price, _id, advertise } = product;
  let [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const modalHandler = (id) => {
    console.log(id);
    deleteProduct(id)
      .then((data) => {
        console.log(data);
        fetchProducts();
        toast.success("Product deleted");
      })
      .catch((err) => console.log(err));
    closeModal();
  };

  const handleAdvertise = (id) => {
    console.log(id);
    fetch(`${process.env.REACT_APP_API_URL}/advertise/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("royal-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Make Change successful.");
          fetchProducts();
        }
      });
  };

  return (
    <tr className="">
      <td className="p-5 whitespace-nowrap">
        <div className="flex items-center">
          <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
            <img
              className="rounded-full"
              src={image}
              width="40"
              height="40"
              alt="Alex Shatov"
            />
          </div>
          <div className="font-medium text-gray-800">{book_name}</div>
        </div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="text-left text-rose-900 font-bold">${price}</div>
      </td>

      <td className="p-2 whitespace-nowrap">
        {product?.sold ? (
          <div className="inline-flex items-center px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-md">
            SOLD
          </div>
        ) : (
          <div className="inline-flex items-center px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-md">
            ACTIVE
          </div>
        )}
      </td>

      <td className="whitespace-nowrap">
        <div className="">
          {advertise ? (
            <button
              onClick={() => handleAdvertise(product?._id)}
              className="px-5 py-2 rounded-xl text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-800 active:bg-grey-900 focus:outline-none border-4 border-white focus:border-purple-200 transition-all"
            >
              ADDED
            </button>
          ) : (
            <button
              onClick={() => handleAdvertise(product._id)}
              className="px-5 py-2 rounded-xl text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-800 active:bg-grey-900 focus:outline-none border-4 border-white focus:border-purple-200 transition-all"
            >
              ADD
            </button>
          )}
        </div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <span
          onClick={openModal}
          className="lg:ml-24 md:ml-8 relative cursor-pointer text-white inline-block px-3 py-1.5 font-semibold leading-tight"
        >
          <span
            aria-hidden="true"
            className=" absolute inset-0 bg-red-600 rounded"
          ></span>
          <span className="relative">Delete</span>
        </span>
        <DeleteModal
          isOpen={isOpen}
          closeModal={closeModal}
          modalHandler={modalHandler}
          id={product._id}
        />
      </td>
    </tr>
  );
};

export default MyProductsRow;

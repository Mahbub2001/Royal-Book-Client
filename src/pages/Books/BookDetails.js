import React, { useState } from "react";
import toast from "react-hot-toast";
import BookingModal from "../../components/Modal/BookingModal";

const BookDetails = ({ data }) => {
  let [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const modalHandler = (id) => {
    // console.log(id)
    // deleteBooking(id).then(data => {
    //   // console.log(data)
    //   fetchBookings()
    //   toast.success('Booking Canceled')
    // })
    closeModal();
  };
  // console.log(data);
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
  } = data;
  return (
    <div>
      <h1 className="text-4xl my-6">{book_name}</h1>
      <p className="mb-6 text-orange-500">{book_category}</p>
      <p>{description}</p>
      <p>{price}</p>
      {data._id ? (
        <button
          type="button"
          className="mt-6 text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2"
        >
          <span
            onClick={openModal}
            className="text-white relative cursor-pointer inline-block px-3 py-3 font-semibol font-bold leading-tight"
          >
            <span aria-hidden="true" className="absolute "></span>
            <span className="relative px-3 py-3">BOOK NOW</span>
          </span>
          <BookingModal
            isOpen={isOpen}
            closeModal={closeModal}
            modalHandler={modalHandler}
            setIsOpen={setIsOpen}
            data={data}
            id={_id}
          />
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default BookDetails;

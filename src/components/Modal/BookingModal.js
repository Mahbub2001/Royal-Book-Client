import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import BookingForm from "../Form/BookingForm";
import { bookingBook } from "../../api/booking";
import toast from "react-hot-toast";

const BookingModal = ({ modalHandler, closeModal, isOpen, id, data ,setIsOpen}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const bookingInfo = {
      user_name: event.target.name.value,
      user_email: event.target.email.value,
      book_name: event.target.book_name.value,
      book_price: event.target.price.value,
      meeting_location: event.target.meeting_location.value,
      user_phone_number: event.target.user_phone_number.value,
      bookId: data._id,
      image:data.image,
      seller:{
        name:data.seller.name,
        email:data.seller.email,
      }
    };
    bookingBook(bookingInfo).then(data => {
        console.log(data)
        // setLoading(false)
        toast.success('Congrats!!Booking Done')
        setIsOpen(false)
      })
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Fill this form for booking this book
                </Dialog.Title>
                <div className="mt-2">
                  <BookingForm handleSubmit={handleSubmit} data={data} />
                </div>
                <hr className="mt-8 " />
                <div className="flex mt-2 justify-around">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-orange-100 px-4 py-2 text-sm font-medium text-orange-900 hover:bg-orange-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default BookingModal;

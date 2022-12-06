import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

const BookingForm = ({ handleSubmit, data }) => {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex justify-center mt-6">
      <div className="w-full max-w-md p-8 space-y-3 text-gray-800 rounded-xl">
        <form
          onSubmit={handleSubmit}
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-1 text-sm">
            <label htmlFor="location" className="block text-gray-600">
              User Name :
            </label>
            <input
              className="w-full px-4 py-3 text-gray-800 border border-gray-300 focus:outline-green-500 rounded-md bg-gray-50"
              name="name"
              value={user?.displayName}
              type="text"
              disabled
              required
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="title" className="block text-gray-600">
              Email
            </label>
            <input
              className="w-full px-4 py-3 text-gray-800 border border-gray-300 focus:outline-green-500 rounded-md bg-gray-50"
              name="email"
              value={user?.email}
              id="email"
              type="text"
              disabled
              required
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="title" className="block text-gray-600">
              Item Name
            </label>
            <input
              className="w-full px-4 py-3 text-gray-800 border border-gray-300 focus:outline-green-500 rounded-md bg-gray-50"
              name="item_name"
              value={data.book_name}
              id="book_name"
              type="text"
              disabled
              required
            />
          </div>
          <div className="flex justify-between gap-2">
            <div className="space-y-1 text-sm">
              <label htmlFor="price" className="block text-gray-600">
                Price
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-gray-300 focus:outline-gray-500 rounded-md bg-gray-50"
                name="price"
                value={data?.price}
                id="price"
                type="number"
                disabled
                required
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="price" className="block text-gray-600">
                Meeting Location
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-gray-300 focus:outline-gray-500 rounded-md bg-gray-50"
                name="meeting_location"
                id="meeting_location"
                placeholder=""
                type="text"
                required
              />
            </div>
          </div>

          <div className="flex justify-between gap-2">
            <div className="space-y-1 text-sm">
              <label htmlFor="bedrooms" className="block text-gray-600">
                Phone Number
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-gray-300 focus:outline-gray-500 rounded-md bg-gray-50"
                name="user_phone_number"
                type="text"
                placeholder="Your Phone Number"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="block w-full p-3 text-center font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gradient-to-r from-orange-500 to-orange-500 hover:bg-orange-200 hover:text-black focus:shadow-outline focus:outline-none"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;

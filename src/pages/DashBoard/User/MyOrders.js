import React, { useContext, useEffect, useState } from "react";
import { getBookings } from "../../../api/booking";
import { AuthContext } from "../../../contexts/AuthProvider";
import { Link } from "react-router-dom";
import MainSpinner from "../../../components/Spinner/MainSpinner";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const [products, setProducts] = useState([]);
  const fetchProducts = () =>
    getBookings(user?.email, setLoading).then((data) => setProducts(data));

  useEffect(() => {
    fetchProducts();
  }, [user]);

  return (
    <div>
      <h1 className="text-center lg:text-5xl text-4xl">My Products</h1>
      <section className="py-1 bg-blueGray-50">
        <div className="w-full xl:w-6/12 px-4 mx-auto mt-24">
          <div className=" flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white ">
            <div className="block w-full overflow-x-auto">
              <table className="items-center w-full border-collapse text-blueGray-700  ">
                <thead className="thead-light ">
                  <tr className="">
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Product Name
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Price
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-700 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px"></th>
                  </tr>
                </thead>
                {loading ? (
                  <MainSpinner />
                ) : (
                  <tbody>
                    {products.map((product) => (
                      <tr key={product._id}>
                        <th className="flex border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                          <img
                            className="w-16 h-16"
                            src={product?.image}
                            alt=""
                          />
                        </th>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-1xl whitespace-nowrap p-4 ">
                          ${product?.book_price}
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          {!product.paid && (
                            <Link
                              to={`/dashboard/payment/${product._id}`}
                              type="button"
                              className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2"
                            >
                              Pay
                            </Link>
                          )}
                          {product.paid && (
                            <button
                              disabled
                              type="button"
                              className="text-gray-900 bg-white hover:bg-green-100 border border-gray-200 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1 text-center inline-flex items-center dark:focus:ring-orange-600 dark:bg-orange-800 dark:border-orange-700 dark:text-white dark:hover:bg-orange-700 mr-2 mb-2"
                            >
                              Paid
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                )}
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyOrders;

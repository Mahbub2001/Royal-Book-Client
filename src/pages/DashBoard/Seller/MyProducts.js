import React, { useContext, useEffect, useState } from "react";
import { getProducts } from "../../../api/products";
import { AuthContext } from "../../../contexts/AuthProvider";
import MyProductsRow from "./MyProductsRow";

const MyProducts = () => {

    const { user } = useContext(AuthContext)
    const [products, setProducts] = useState([])
    const fetchProducts = () => getProducts(user?.email).then(data => setProducts(data))
  
    useEffect(() => {
      fetchProducts()
    }, [user])

  return (
    <div>
      <h1 className="text-center mt-40 my-10 text-5xl">MY PRODUCTS</h1>
      <section className="antialiased text-gray-600 px-4">
        <div className="flex flex-col justify-center h-full">
          <div className="w-full max-w-5xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <header className="px-5 py-4 border-b border-gray-100">
              <h2 className="font-semibold text-gray-800">Customers</h2>
            </header>
            <div className="p-3">
              <div className="overflow-x-auto">
                <table className="table-auto w-full">
                  <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                    <tr>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">NAME</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">PRICE</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">
                          SALES STATUS
                        </div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">ADVERTISE</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center">DELETE</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-100">
                  {products &&
                  products.map(product => (
                    <MyProductsRow
                      key={product?._id}
                      product={product}
                      fetchProducts={fetchProducts}
                    />
                  ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyProducts;

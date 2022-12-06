import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const AllBuyers = () => {
  const {
    data: buyers = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["buyers"],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/buyers`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("royal-token")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  const handleDelete = (id) =>{
    fetch(`${process.env.REACT_APP_API_URL}/admin-delete/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("royal-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Delete successful.");
        refetch();
      });
  }

  return (
    <section>
      <h1 className="mt-40 my-10 text-5xl text-center">ALL BUYERS</h1>
      <div className="antialiased text-gray-600 px-4">
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
                        <div className="font-semibold text-left">EMIAL</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold">DELETE</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-100">
                    {buyers?.map((buyer) => (
                      <tr key={buyer._id}>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left">{buyer?.name}</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left">{buyer?.email}</div>
                        </td>
                        <td className="p-2 whitespace-nowrap ">
                          <button onClick={()=>handleDelete(buyer?._id)} className="lg:ml-40 md:ml-16 inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 mr-2"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllBuyers;

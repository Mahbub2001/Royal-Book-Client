import { useQuery } from "@tanstack/react-query";
import React from "react";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import MainSpinner from "../../components/Spinner/MainSpinner";
import useTitle from "../../hook/useTitle";

const Categories = () => {
  useTitle("Categories");
  const {
    data: categories = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/categories`);
      const data = await res.json();
      return data;
    },
  });

  return (
    <div>
      <h4 className="my-10 text-center">SOME QUALITY ITEMS</h4>
      <h1 className="text-center lg:text-6xl md:text-4xl text-3xl mb-10">
        Popular Categories
      </h1>
      <div className="flex flex-col justify-center items-center">
        <div className="">
          {isLoading ? (
            <MainSpinner />
          ) : (
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-20 justify-center items-center">
              {categories.map((category) => (
                <CategoryCard
                  key={category._id}
                  category={category}
                ></CategoryCard>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Categories;

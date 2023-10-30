import React from "react";
import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";
import { useState } from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useLoaderData } from "react-router-dom";

const ProductsContainer = () => {
  const { meta } = useLoaderData();
  const totalProd = meta.pagination.total;

  const [layout, setLayout] = useState("grid");

  const setActiveStyles = (pattern) => {
    return `text-xl btn btn-circle btn-sm ${
      pattern === layout
        ? "btn-primary text-primary-content"
        : "btn-ghost text-based-content"
    }`;
  };

  return (
    <>
      <div className="flex justify-between items-center mt-8 border-b border-base-300 pb-5">
        <h4 className="font-medium text-md">
          {totalProd} product{totalProd > 1 && "s"}
        </h4>
        <div className="flex gap-x-2">
          <button
            type="button"
            className={setActiveStyles("grid")}
            onClick={() => setLayout("grid")}
          >
            <BsFillGridFill />
          </button>

          <button
            type="button"
            className={setActiveStyles("list")}
            onClick={() => setLayout("list")}
          >
            <BsList />
          </button>
        </div>
      </div>

      <div>
        {totalProd === 0 ? (
          <h5 className="text-2xl mt-16">Sorry, no products matched your search...</h5>
        ) : layout === "grid" ? (
          <ProductsGrid />
        ) : (
          <ProductsList />
        )}
      </div>
    </>
  );
};
export default ProductsContainer;

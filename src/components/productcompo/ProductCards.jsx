import React, { useContext } from "react";
import { productContext } from "../../context/ProductContext";
import { Link } from "react-router-dom";

const ProductCards = () => {
  const { data } = useContext(productContext);

  const renderProduct = data
    .filter((elem) => elem.unique === "not")
    .map((elem) => (
      <Link
        className="flex w-full sm:w-1/2 lg:w-1/3 flex-col cursor-pointer mb-8 relative"
        to={`/product/details/${elem.id}`}
        key={elem.id}
      >
        <div className="w-full h-[20rem] sm:h-[25rem] lg:h-[30rem] flex group overflow-hidden ">
          <img
            className="h-full w-full object-cover group-hover:hidden"
            src={elem.image1}
            alt=""
          />
          <img
            className="h-full w-full object-cover hidden group-hover:block"
            src={elem.image2}
            alt=""
          />
        </div>
        <div className="absolute bottom-2 left-6 z-10">
          <h1 className=" text-sm  mb-1 font-semibold mix-blend-multiply">
            {elem.title}
          </h1>
          <span className=" text-sm">{elem.price}</span>
        </div>
      </Link>
    ));
  return (
    <div className="w-full px-4 sm:px-8 md:px-12 lg:px-20 flex flex-wrap">
      {renderProduct}
    </div>
  );
};

export default ProductCards;

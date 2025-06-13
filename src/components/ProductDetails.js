import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Skeleton from "./Skeleton";
import useGetSingleProduct from "../hook/useGetSingleProduct";

import { useDispatch } from "react-redux";
import { addItems } from "../store/cartSlice";

const ProductDetails = () => {
  const { id } = useParams();
  //using custom hook for optimization
  const product = useGetSingleProduct(id);
  // console.log(product);
  //   if (!product) return <Skeleton />;

  //handling the redux cart Items
  const dispatch = useDispatch();

  //handling the handleCartItem function
  const handleCartItems = () => {
    //finally added the single product in our
    //redux store slice cartItems
    dispatch(addItems(product));
  };

  return product === null ? (
    <Skeleton />
  ) : (
    <div className="w-[80%] mx-auto flex justify-center items-center">
      <div className="max-w-screen rounded-lg border mt-10 flex flex-col p-10 justify-center items-center ">
        <img src={product.image} alt={product.title} className="prd_img" />
        <h3 className="text-xl font-bold">{product.title}</h3>
        <h4 className="font-bold">Price - {product.price} $</h4>
        <h4 className="font-semibold">Rating - {product.rating?.rate}</h4>
        <h4 className="font-semibold">
          Description -{" "}
          <span className="font-light">{product.description}</span>
        </h4>
        <button
          className="mt-4 border rounded-md bg-pink-200 hover:bg-pink-400 px-3 py-1 text-bold cursor-pointer"
          onClick={handleCartItems}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;

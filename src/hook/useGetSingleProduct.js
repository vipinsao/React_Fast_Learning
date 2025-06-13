//this is custom hook which is used for optimization
//This hook is based on single responsibility principle(srp)

import { useEffect, useState } from "react";

const useGetSingleProduct = (id) => {
  const [singleProduct, setSingleProduct] = useState(null);
  const fetchSingleProduct = async (id) => {
    try {
      const data = await fetch(`https://fakestoreapi.com/products/${id}`);
      const response = await data.json();
      setSingleProduct(response);
    } catch (error) {
      console.log("There is something wrong resolve it!", error);
    }
  };
  useEffect(() => {
    fetchSingleProduct(id);
  }, [id]);
  return singleProduct;
};

export default useGetSingleProduct;

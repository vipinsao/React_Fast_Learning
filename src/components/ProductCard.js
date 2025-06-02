import { useEffect, useState } from "react";
import { array_products } from "../utils/constant";
import Product from "./Product";

const ProductCard = () => {
  //using useEffect to load the data through api
  //it will run in side means background
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch("https://fakestoreapi.com/products/");
        const response = await data.json();
        setProduct(response);
        setLoading(false);
        if (!response) {
          throw new Error("Data is not loading issue in api please check");
        }
      } catch (error) {
        setLoading(false);
        throw new Error("The api has some issue try some time later!", error);
      }
    };
    fetchData();
  }, []);

  //we are going to use the useState
  const [topRated, setTopRated] = useState(false);
  const productDisplay = topRated
    ? product.filter((item) => item.rating.rate >= 4)
    : product;
  return (
    <div>
      {/* I am going to use rated btn as toggle  */}
      <button id="product-btn" onClick={() => setTopRated(!topRated)}>
        {topRated ? "Show all products" : "Top rated products"}
      </button>

      {loading ? (
        <h2>Loading products...</h2>
      ) : (
        <div className="product_card">
          {productDisplay.map((product) => (
            <Product product_item={product} key={product.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductCard;

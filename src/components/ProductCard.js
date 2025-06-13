import { useEffect, useState } from "react";
import Product, { HOC } from "./Product";
import Skeleton from "./Skeleton";

const ProductCard = () => {
  //using useEffect to load the data through api
  //it will run in side means background
  const [product, setProduct] = useState([]);
  const [tempProductList, setTempProductList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const fetchData = async () => {
    try {
      const data = await fetch("https://fakestoreapi.com/products/");
      const response = await data.json();
      setProduct(response);
      setTempProductList(response);
      if (!response) {
        throw new Error("Data is not loading issue in api please check");
      }
    } catch (error) {
      console.error(
        "The api has some issue try some time later!",
        error.message
      );
    }
  };

  useEffect(() => {
    fetchData();

    //for understanding and interview purpose
    //How to clean up the page i mean some function which
    //are making our resource full
    //example
    // const timer = setInterval(() => {
    //   console.log("In functional component understand the clean up");
    // }, 1000);

    //for clean up we return some function
    // return () => {
    //   clearInterval(timer);
    // };
  }, []);

  //Bad Practice here Conditional Rendering
  // if (product.length == 0) {
  //   return <Skeleton />;
  // }

  //calling Higher order component
  const HOFComponent = HOC(Product);

  return product.length == 0 ? (
    <Skeleton />
  ) : (
    <div className="product-card-parent">
      <div className="search-bar">
        <input
          className="border bg-pink-100 px-18 ml-10 mr-1 rounded-md"
          type="text"
          placeholder="search your products.."
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
        />
        <button
          className="border py-1 px-2 rounded-md bg-pink-100 font-semibold cursor-pointer hover:scale-1.1 transition ease-in-out"
          onClick={() => {
            const filterdata = product.filter((item) => {
              return item.title
                .toLowerCase()
                .includes(searchText.toLowerCase());
            });
            setTempProductList(filterdata);
          }}
        >
          Search
        </button>

        {/* I am going to use rated btn as toggle  */}
        <button
          className=" ml-6 border py-1 px-2 rounded-md bg-red-400 font-semibold cursor-pointer"
          id="product-btn"
          onClick={() => {
            const topRated = product.filter((item) => item.rating.rate >= 4);
            setTempProductList(topRated);
          }}
        >
          {"Top rated products"}
        </button>
      </div>

      <input
        className="border bg-pink-100 px-18 ml-10 mr-1 rounded-md"
        type="text"
        placeholder="Change your username"
        onChange={(e) => setSearchText(e.target.value)}
        value={searchText}
      />
      <button
        className="border py-1 px-2 rounded-md bg-pink-100 font-semibold cursor-pointer hover:scale-1.1 transition ease-in-out"
        onClick={() => {
          const filterdata = product.filter((item) => {
            return item.title.toLowerCase().includes(searchText.toLowerCase());
          });
          setTempProductList(filterdata);
        }}
      >
        Change
      </button>

      <div className="product_card">
        {tempProductList.map((product) =>
          product.rating.rate >= 4 ? (
            <HOFComponent product_item={product} key={product.id} />
          ) : (
            <Product product_item={product} key={product.id} />
          )
        )}
      </div>
    </div>
  );
};

export default ProductCard;

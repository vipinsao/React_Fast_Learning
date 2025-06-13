import { Link, useNavigate } from "react-router";

//we received the props
const Product = ({ product_item }) => {
  // const product_list = props.product_item;
  // console.log(props);
  // console.log(product_item);
  const navigate = useNavigate();
  const { id, image, title, price, rating } = product_item;
  return (
    <div className="product_details ">
      {/* 1 way  {product_item.map((item, ind) => (
        <div key={ind} className="products">
          <img src={item.img_url} alt="product 1" className="prd_img" />
          <h3>{item.product_name}</h3>
          <h4>Price - {item.product_price}</h4>
          <p>{item.product_des}</p>
        </div>
      ))} */}
      {/* 2 way */}
      <Link
        to={`/product/${id}`}
        key={id}
        className="products"
        // onClick={() => navigate(`/product/${id}`)}
      >
        <img src={image} alt={title} className="prd_img" />
        <h3>{title}</h3>
        <h4>Price - {price} $</h4>
        <p>Rating - {rating.rate}</p>
      </Link>
    </div>
  );
};

//default export
export default Product;

//but when we do export direct in function call
//thats call (named export)
//Named export is used when we have to export
//multiple components from one file

//we are creating HOC(higher order component) which will
//enhance our ui and add bestseller sticker
//in some cards
export const HOC = (Product) => {
  return (props) => {
    return (
      <div className="relative">
        <span className="absolute -left-2 -top-2 bg-black text-white px-3 py-0 rounded-md">
          BestSeller
        </span>
        <Product {...props} />
      </div>
    );
  };
};

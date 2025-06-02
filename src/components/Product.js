//we received the props
const Product = ({ product_item }) => {
  // const product_list = props.product_item;
  // console.log(props);
  // console.log(product_item);
  const { id, image, title, price, rating } = product_item;
  return (
    <div className="product_details">
      {/* 1 way  {product_item.map((item, ind) => (
        <div key={ind} className="products">
          <img src={item.img_url} alt="product 1" className="prd_img" />
          <h3>{item.product_name}</h3>
          <h4>Price - {item.product_price}</h4>
          <p>{item.product_des}</p>
        </div>
      ))} */}
      {/* 2 way */}
      <div key={id} className="products">
        <img src={image} alt={title} className="prd_img" />
        <h3>{title}</h3>
        <h4>Price - {price} $</h4>
        <p>Rating - {rating.rate}</p>
      </div>
    </div>
  );
};

//default export
export default Product;

//but when we do export direct in function call
//thats call (named export)
//Named export is used when we have to export
//multiple components from one file

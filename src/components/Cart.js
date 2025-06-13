import { useDispatch, useSelector } from "react-redux";
import { clearItems, removeItems } from "../store/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.cartItems);
  const dispatch = useDispatch();

  const handleRemoveItem = (item) => {
    dispatch(removeItems(item));
  };
  const handleClearItem = () => {
    dispatch(clearItems());
  };
  return (
    <div className="max-w-5xl mx-auto mt-10">
      <div className="flex justify-between px-10 items-center">
        <h1 className="font-bold text-xl">
          ALL Cart Items - {cartItems.length}
        </h1>
        <button
          className="bg-red-500 rounded-md mt-4 px-3 py-1 hover:bg-red-800 cursor-pointer"
          onClick={handleClearItem}
        >
          Clear All
        </button>
      </div>
      {cartItems.map((item, index) => (
        <div
          key={index}
          className="max-w-screen rounded-lg border mt-10 flex flex-col p-10 justify-center items-center "
        >
          <img src={item.image} alt={item.title} className="prd_img" />
          <h3 className="text-xl font-bold">{item.title}</h3>
          <h4 className="font-bold">Price - {item.price} $</h4>
          <h4 className="font-semibold">Rating - {item.rating?.rate}</h4>
          <h4 className="font-semibold">
            Description - <span className="font-light">{item.description}</span>
          </h4>

          <button
            className="bg-red-500 rounded-md mt-4 px-3 py-1 hover:bg-red-800 cursor-pointer"
            onClick={() => handleRemoveItem(item.id)}
          >
            Remove Item
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;

import { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import UserContext from "../utils/UserContext.js";
import { useSelector } from "react-redux";

const Navbar = () => {
  // let btnName = "Light";//normal js variable in this changes the react will not able to read this.
  const [btnName, setBtnName] = useState("light");

  //using redux and doing subscribe
  const cartItems = useSelector((store) => store.cart.cartItems);

  useEffect(() => {
    const body = document.querySelectorAll(".products");

    for (let i = 0; i < body.length; i++) {
      if (btnName == "light") {
        body[i].style.backgroundColor = "rgb(225, 215, 215)";
        body[i].style.color = "black";
      } else {
        body[i].style.backgroundColor = "rgb(99, 97, 97)";
        body[i].style.color = "white";
      }
    }
  }, [btnName]);

  //getting the user using context api
  const user = useContext(UserContext);

  return (
    <div className="px-6 py-2 flex justify-between shadow-gray-200 bg-pink-100 b border-b-2">
      <h1 id="navbar-head">
        <Link to={"/"} className="link">
          Navbar
        </Link>
      </h1>
      <ul className="menu_items">
        <li>
          <Link to={"/props"} className="link">
            PROPS
          </Link>
        </li>
        <li>
          <Link to={"/grocery"} className="link">
            GROCERY
          </Link>
        </li>
        <li>
          <Link to={"/men"} className="link">
            MEN
          </Link>
        </li>

        <li>
          {" "}
          <Link to={"/women"} className="link">
            WOMEN
          </Link>
        </li>

        <li>
          <Link to={"/kid"} className="link">
            KIDS{" "}
          </Link>
        </li>

        <li>
          <Link to={"/cart"} className="link">
            CART - {cartItems.length}
          </Link>
        </li>

        <li>
          <Link to={"/about"} className="link">
            {user.name}
          </Link>
        </li>

        <button
          onClick={() => setBtnName(btnName == "light" ? "dark" : "light")}
          className="px-2 py-1 border rounded-lg bg-red-100 cursor-pointer"
        >
          {btnName}
        </button>
      </ul>
    </div>
  );
};

export default Navbar;

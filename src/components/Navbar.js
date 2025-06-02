import { useEffect, useState } from "react";

const Navbar = () => {
  // let btnName = "Light";//normal js variable in this changes the react will not able to read this.
  const [btnName, setBtnName] = useState("light");
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
  return (
    <div className="navbar">
      <h1 id="navbar-head">Navbar</h1>
      <ul className="menu_items">
        <li>MEN</li>
        <li>WOMEN</li>
        <li>KIDS</li>
        <li>CART</li>
        <button
          onClick={() => setBtnName(btnName == "light" ? "dark" : "light")}
        >
          {btnName}
        </button>
      </ul>
    </div>
  );
};

export default Navbar;

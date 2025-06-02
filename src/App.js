import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";

const App = () => {
  return (
    <div>
      <Navbar />
      <ProductCard />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

//What is props?
//Props is a short name of properties, Its object which pass
//as argument from parent function to children function of data.

//config driven AI is basically optimized way \
//of presenting the component with expoiliting
//the DRY (dont repeat yourself) concept

//Knowing about ID
//in every dynamic element of react should have
//unique id because its very important
//if we have features that when ever new elements added
//only that element will be render not the old elements
//so for knowing which elements is old and new we should have
//unique ID

//Inline CSS in react
//we will create a object of style
//then we will pass it or use it
//inside the div or any tags

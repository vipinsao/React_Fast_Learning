import React from "react";
import { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import Kid from "./components/Kid";
import Error from "./components/Error";
import Men from "./components/Men";
import Women from "./components/Women";
import Cart from "./components/Cart";
import ProductCard from "./components/ProductCard";
import ProductDetails from "./components/ProductDetails";
import AboutPage from "./components/About";
import CompoA from "./components/CompoA.js";
import UserContext from "./utils/UserContext.js";
import { Provider } from "react-redux";
import appStore from "./store/store.js";

//normal import na karke hum lazy load me import kiye
// import Grocery from "./components/Grocery";

//different names of lazy loading
//lazy loading
//code splitting
//dynamic import

//we have created seperate bundle for this
//and when the user need this, then only it will import
//thats how its fast and optimized
//but here is one problem because it can be super fast
//so when we are calling any fetched page so we have to
//show some loading things because if not then we will get error
//because if there is no data at very inital time
//thats where we use suspense which provide us the fall
//back ui like loading...  suspense is component
const Grocery = lazy(() => import("./components/Grocery.js"));

const App = () => {
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ name: "Sao" }}>
        <div>
          <Navbar />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

//it will be in temporal dead zone if
//i paste this code above the APP
//this is approuter whcih means
//it defined the whole path
//we have add all the children(sub pages).
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ProductCard />,
        errorElement: <Error />,
      },
      {
        path: "/kid",
        element: <Kid />,
        errorElement: <Error />,
      },
      {
        path: "/men",
        element: <Men />,
        errorElement: <Error />,
      },
      {
        path: "/women",
        element: <Women />,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
        errorElement: <Error />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
        errorElement: <Error />,
      },
      {
        path: "/about",
        element: <AboutPage />,
        errorElement: <Error />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>loading..</h1>}>
            <Grocery />
          </Suspense>
        ),
        errorElement: <Error />,
      },
      {
        path: "/props",
        element: <CompoA />,
        errorElement: <Error />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

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

import React, { useState } from "react";
import ListItems from "./ListItems.js";

//Web page  = UI layer + Data layer

//Very Important
//When parent component handles the states of children
//thats is called controlled layer but when parents component
//dont do this its called uncontrolled component

//Parent component is taking care of state of showlist
//so this is called lifting state up
// 🔷 What is Lifting State Up?
// Lifting State Up means moving shared state from child components to their closest common parent so that the parent can control and coordinate them.

// ✅ Why?
// When multiple components need to share or sync state, the best practice is to lift the state to a common ancestor and pass it down via props.

const Accordian = ({ index, title, showList, setShowList }) => {
  // const [showList, setShowList] = useState(false);
  return (
    <div
      key={index}
      className="my-1 shadow-md border border-gray-200 px-4 py-2 mb-4 w-64"
    >
      <div className="flex justify-between">
        <h1>{title}</h1>
        <button
          className="bg-black text-white px-2 rounded-md cursor-pointer"
          onClick={() => setShowList((prev) => (prev === index ? null : index))}
        >
          Show
        </button>
      </div>
      {showList && <ListItems />}
    </div>
  );
};

export default Accordian;

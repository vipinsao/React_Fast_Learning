import { useState } from "react";
import Accordian from "./Accordian";

const Men = () => {
  const [showList, setShowList] = useState(null);
  return (
    <div className="max-w-6xl mx-auto mt-10">
      <h1 className="font-bold text-xl mb-3">Filter Options</h1>
      {["Brand", "Mens", "Gender", "Kids"].map((title, index) => (
        <Accordian
          key={index}
          index={index}
          title={title}
          showList={index === showList}
          setShowList={setShowList}
        />
      ))}
    </div>
  );
};

export default Men;

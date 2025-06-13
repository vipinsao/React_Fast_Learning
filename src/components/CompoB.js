import React from "react";
import CompoC from "./CompoC";

const CompoB = () => {
  return (
    <div className="mt-4 border rounded-md mb-4">
      <h1>This is ComponentB</h1>
      <CompoC />
    </div>
  );
};

export default CompoB;

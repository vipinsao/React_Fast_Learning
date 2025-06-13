import React from "react";
import CompoB from "./CompoB";

const CompoA = () => {
  const user = {
    name: "Vipin Sao",
    email: "vipinsao@gmail.com",
  };
  return (
    <div className="max-w-5xl mx-auto">
      <h1>Hello This is Component A</h1>
      <CompoB name={user.name} email={user.email} />
    </div>
  );
};

export default CompoA;

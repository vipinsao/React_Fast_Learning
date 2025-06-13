import React, { useContext } from "react";
import UserContext from "../utils/UserContext";

const CompoC = () => {
  const user = useContext(UserContext);
  return (
    <div className="border rounded-md">
      <h1>Hello This is ComponentC</h1>
      <h3>{user.name}</h3>
      <h3>{user.email}</h3>
    </div>
  );
};

export default CompoC;

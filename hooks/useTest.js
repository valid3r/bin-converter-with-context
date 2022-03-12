import React from "react";

const useTest = (value) => {
  console.log("useTest called!");
  console.log("Value: ", value);
  return value;
};

export default useTest;

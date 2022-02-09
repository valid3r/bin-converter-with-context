import React, { useState, useEffect, createContext } from "react";

// Create Context - Define variable and their types, to be exported
// IDK The purpose

/**
 *
 * The defaultValue argument is only used when a component does not have a matching Provider above it in the tree.
 * This default value can be helpful for testing components in isolation without wrapping them.
 * Note: passing undefined as a Provider value does not cause consuming components to use defaultValue.
 *
 */

const AppContext = createContext({
  //   fromFormat: String,
  //   toFormat: String,
  //   binaryInput: Number,
  //   decimalInput: Number,
  //   convertBinToDecimal: () => {},
});

// Create Context Provider - Accepts Childre component
// Container Global variable, functions, whatever
const AppContextProvider = ({ children }) => {
  // States
  const [fromFormat, setFromFormat] = useState("BIN");
  const [toFormat, setToFormat] = useState("DEC");

  const [binaryInput, setBinaryInput] = useState("");
  const [decimalInput, setDecimalInput] = useState("");

  const convertBinToDecimal = () => {
    console.log("convertBinToDecimal called");

    if (fromFormat == toFormat) {
      console.log(
        "%cAppContext.js line:27 nothing to convert",
        "color: #007acc;"
      );

      alert("You must select a different format!!");
    }

    if (fromFormat == "BIN" && toFormat == "DEC") {
      if (binaryInput == "" || binaryInput == null) {
        alert("You must enter a number");
        return;
      }
      //console.log("%cAppContext.js line:34 from bin to dec", "color: #007acc;");
      const result = parseInt(binaryInput, 2);
      //console.log("%cAppContext.js line:37 result", "color: #007acc;", result);
      setDecimalInput(result);
    }

    if (fromFormat == "DEC" && toFormat == "BIN") {
      if (decimalInput == "" || decimalInput == null) {
        alert("You must enter a number");
        return;
      }
      const result = parseInt(decimalInput).toString(2);
      setBinaryInput(result);
    }
  };

  const reset = () => {
    setBinaryInput("");
    setDecimalInput("");
    setFromFormat("BIN");
    setToFormat("DEC");
  };

  return (
    <AppContext.Provider
      value={{
        fromFormat,
        toFormat,
        setFromFormat,
        setToFormat,
        reset,
        binaryInput,
        decimalInput,
        convertBinToDecimal,
        setDecimalInput,
        setBinaryInput,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };

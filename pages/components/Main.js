import React from "react";
import style from "/styles/Main.module.css";
import BinToDecimal from "./BinToDecimal";
import { AppContextProvider } from "../../context/AppContext";

const Main = () => {
  return (
    <AppContextProvider>
      <div>
        <BinToDecimal></BinToDecimal>
      </div>
    </AppContextProvider>
  );
};

export default Main;

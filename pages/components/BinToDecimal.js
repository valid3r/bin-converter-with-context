import React, { useEffect, useState } from "react";
import style from "/styles/Main.module.css";
import useApp from "../../hooks/useApp";

const BinToDecimal = () => {
  const {
    fromFormat,
    toFormat,
    setFromFormat,
    setToFormat,
    convertBinToDecimal,
    binaryInput,
    decimalInput,
    setBinaryInput,
    setDecimalInput,
    reset,
  } = useApp();

  const [display, setDisplay] = useState("decToBin");

  useEffect(() => {
    if (fromFormat == "DEC" && toFormat == "BIN") {
      console.log("setDisplay decToBin");
      setDisplay("decToBin");
    }

    if (fromFormat == "BIN" && toFormat == "DEC") {
      console.log("setDisplay binToDec");
      setDisplay("binToDec");
    }
  }, [fromFormat, toFormat]);

  const renderDisplay = () => {
    if (display == "binToDec") {
      return (
        <>
          <div className={style.user_input}>
            <label htmlFor="">Enter Binary number</label>
            <textarea
              className={style.decimal_results}
              name=""
              id=""
              onChange={(e) => {
                setBinaryInput(e.target.value);
              }}
              value={binaryInput}
              cols="30"
              rows="4"
            ></textarea>
          </div>

          <div className={style.results}>
            <label htmlFor="">Decimal number</label>
            <textarea
              className={style.decimal_results}
              name=""
              id=""
              onChange={(e) => {
                setDecimalInput(e.target.value);
              }}
              value={decimalInput}
              cols="30"
              disabled
              style={{ backgroundColor: "#f1f1f1" }}
              rows="4"
            ></textarea>
          </div>
        </>
      );
    } else if (display == "decToBin") {
      return (
        <>
          <div className={style.results}>
            <label htmlFor="">Enter Decimal number</label>
            <textarea
              className={style.decimal_results}
              name=""
              id=""
              onChange={(e) => {
                setDecimalInput(e.target.value);
              }}
              value={decimalInput}
              cols="30"
              rows="4"
            ></textarea>
          </div>
          <div className={style.user_input}>
            <label htmlFor="">Binary number</label>
            <textarea
              className={style.decimal_results}
              name=""
              id=""
              disabled
              style={{ backgroundColor: "#f1f1f1" }}
              onChange={(e) => {
                setBinaryInput(e.target.value);
              }}
              value={binaryInput}
              cols="30"
              rows="4"
            ></textarea>
          </div>
        </>
      );
    }
  };

  return (
    <div className={style.container}>
      <h2>Binary To Decimal converter</h2>
      <div className={style.form}>
        <div className={style.from_to}>
          <label htmlFor="">From</label>
          <select
            className={style.from}
            onChange={(e) => {
              setFromFormat(e.target.value);
            }}
            value={fromFormat}
          >
            <option value="BIN">Binary</option>
            <option value="DEC">Decimal</option>
          </select>
        </div>
        <div className={style.from_to}>
          <label htmlFor="">To</label>
          <select
            className={style.to}
            onChange={(e) => {
              setToFormat(e.target.value);
            }}
            value={toFormat}
          >
            <option value="DEC">Decimal</option>
            <option value="BIN">Binary</option>
          </select>
        </div>

        {renderDisplay()}

        <div className={style.buttons}>
          <button className={style.convert_btn} onClick={convertBinToDecimal}>
            Convert
          </button>
          <button className={style.reset_btn} onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default BinToDecimal;

import { useState, useRef } from "react";
import Calculator from "./Calculator.js";

export const useCalculator = () => {
  const { current: legacyCalculator } = useRef(new Calculator());

  const [screenValue, setScreenValue] = useState<number | string | null>(null);
  const [resultValue, setResultValue] = useState<number | null>(null);

  const handleOperator = (newOperator: Operator) => {
    if (screenValue !== null) {
      legacyCalculator.setNumbers(Number(screenValue));
      setScreenValue(null);
    }
    legacyCalculator.setOperator(newOperator);
    setResultValue(legacyCalculator.a || null);
  };

  const reset = () => {
    legacyCalculator.reset();
    setResultValue(null);
    setScreenValue(null);
  };

  const calculate = () => {
    if (screenValue !== null) {
      legacyCalculator.setNumbers(Number(screenValue));
      setScreenValue(null);
    }
    legacyCalculator.calculate();
    setResultValue(legacyCalculator.answer || null);
  };

  const addDigit = (digit: number) => {
    const previusValue = screenValue ?? "0";
    const newValue = previusValue + digit.toString();
    const containsDot = newValue.includes(".");
    setScreenValue(containsDot ? newValue : Number(newValue));
  };

  const addDot = () => {
    const value = screenValue ?? resultValue ?? 0;
    const isInteger = Number.isInteger(value);
    setScreenValue(isInteger ? value + "." : value);
  };

  const clearScreen = () => {
    setScreenValue(0);
  };

  return {
    setOperator: handleOperator,
    screenValue,
    resultValue,
    setValue: addDigit,
    reset,
    calculate,
    clearScreen,
    addDot,
  };
};

export type Operator = "add" | "sub" | "multi" | "div";

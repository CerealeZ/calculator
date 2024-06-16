import { useCalculator } from "../../hooks/useCalculator";
import { Buttons } from "./buttons";
import { Header } from "./header";
import { Window } from "./window";

export const Calculator = () => {
  const {
    resultValue,
    reset,
    screenValue,
    setValue,
    setOperator,
    calculate,
    clearScreen,
    addDot,
  } = useCalculator();

  return (
    <div className="h-svh flex justify-center items-center bg-background">
      <div className="max-w-screen-sm w-full">
        <div className="p-2">
          <Header />
        </div>
        <div className="p-2 w-full">
          <Window resultValue={resultValue} screenValue={screenValue} />
        </div>
        <div className="p-2">
          <Buttons
            setValue={setValue}
            reset={reset}
            setOperator={setOperator}
            onEqual={calculate}
            onDelete={clearScreen}
            onDot={addDot}
          />
        </div>
      </div>
    </div>
  );
};

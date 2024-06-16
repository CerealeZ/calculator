import { ReactNode } from "react";
import classNames from "classnames";
import { Operator } from "../../hooks/useCalculator";

export const Buttons = ({
  setValue,
  setOperator,
  onEqual,
  reset,
  onDelete,
  onDot,
}: {
  setValue: (number: number) => void;
  setOperator: (operator: Operator) => void;
  reset: () => void;
  onEqual: () => void;
  onDelete: () => void;
  onDot: () => void;
}) => {
  return (
    <div className="grid grid-cols-4 gap-3 grid-rows-5 p-5 bg-toggle-background rounded">
      <div className="grid grid-cols-subgrid col-span-3 grid-rows-subgrid row-span-4">
        <Button number={7} onClick={() => setValue(7)} />
        <Button number={8} onClick={() => setValue(8)} />
        <Button number={9} onClick={() => setValue(9)} />
        <Button number={6} onClick={() => setValue(6)} />
        <Button number={5} onClick={() => setValue(5)} />
        <Button number={4} onClick={() => setValue(4)} />
        <Button number={1} onClick={() => setValue(1)} />
        <Button number={2} onClick={() => setValue(2)} />
        <Button number={3} onClick={() => setValue(3)} />
        <Button number={"."} onClick={onDot} />
        <Button number={0} onClick={() => setValue(0)} />
        <Button onClick={() => setOperator("div")} number={"/"} />
      </div>
      <div className="grid grid-cols-subgrid col-span-1 grid-rows-subgrid row-span-4">
        <Button theme="special" onClick={onDelete} number={"DEL"} />
        <Button onClick={() => setOperator("add")} number={"+"} />
        <Button onClick={() => setOperator("sub")} number={"-"} />
        <Button onClick={() => setOperator("multi")} number={"x"} />
      </div>

      <div className="grid grid-cols-subgrid col-span-4 grid-rows-subgrid row-span-1">
        <Button
          theme="special"
          onClick={reset}
          className="col-span-2"
          number={"RESET"}
        />
        <Button
          theme="result"
          className="col-span-2"
          onClick={onEqual}
          number={"="}
        />
      </div>
    </div>
  );
};

const Button = ({
  number,
  onClick,
  theme = "basic",
  className,
}: {
  number: ReactNode;
  theme?: "basic" | "special" | "result";
  onClick?: () => void;
  span?: number;
  className?: string;
}) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        "border border-b-4 text-4xl p-2 pb-1 rounded w-full",
        {
          "text-normal-key-text active:border-b-normal-key-shadow active:bg-normal-key-active active:border-normal-key-active border-normal-key-background border-b-normal-key-shadow bg-normal-key-background":
            theme === "basic",
          "text-result-key-text active:border-b-result-key-shadow active:bg-result-key-active active:border-result-key-active  border-b-result-key-shadow border-result-key-background bg-result-key-background":
            theme === "result",
          "text-special-key-text active:border-b-special-key-shadow active:bg-special-key-active active:border-special-key-active  border-b-special-key-shadow border-special-key-background bg-special-key-background":
            theme === "special",
        },
        className
      )}
    >
      {number}
    </button>
  );
};

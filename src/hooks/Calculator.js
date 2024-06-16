/**
 * It's from my old me.
 *
 * I'll keep it...
 *
 */

export default class Calculator {
  constructor() {
    this.a = null;
    this.b = null;
    this.operator = "";
    this.answer = null;
    this.lastAction = "";
    this.textHistorial = "";
    this.historial = [];
  }

  reset() {
    this.a = null;
    this.b = null;
    this.operator = "";
    this.answer = null;
    this.lastAction = "";
    this.textHistorial = "";
    this.historial = [];
  }
  typeHistorial() {
    const operatorCase = {
      add: "+",
      sub: "-",
      multi: "X",
      div: "/",
    };
    const operator = operatorCase[this.operator];
    this.textHistorial = `${this.a ?? ""} ${operator || ""} ${this.b ?? ""} ${
      this.answer ? "= " + this.answer : ""
    }`;
  }
  setNumbers(numb) {
    if (this.lastAction !== "operator") {
      this.a = numb;
      this.answer = null;
      this.lastAction = "typingA";
    } else {
      this.b = numb;
      this.typeHistorial();
      this.lastAction = "typingB";
    }
  }
  setOperator(operator) {
    if (this.lastAction === "result") {
      this.a = this.answer;
      this.answer = null;
    }
    if (this.lastAction === "typingB") {
      this.a = this.calculate();
      this.typeHistorial();
      this.answer = null;
    }
    this.b = null;
    this.operator = operator;
    this.lastAction = "operator";
  }

  checkRange(numb) {
    if (numb > Number.MAX_SAFE_INTEGER) {
      return +Infinity;
    }
    if (numb < -Number.MAX_SAFE_INTEGER) {
      return -Infinity;
    }
    return numb;
  }

  calculate() {
    const setValues = (answer) => {
      this.answer = answer;
      this.typeHistorial();
      this.historial.push(this.textHistorial);
      this.textHistorial = "";
      this.lastAction = "result";
      return this.answer;
    };
    if (!this.operator) {
      setValues(this.a);
      return;
    }
    if (this.lastAction === "result") {
      this.a = this.answer;
    }
    if (this.b === null) {
      this.b = this.a;
    }
    const selectCase = {
      add: this.a + this.b,
      sub: this.a - this.b,
      multi: this.a * this.b,
      div: this.a / this.b,
    };
    const answer = this.checkRange(selectCase[this.operator]);
    return setValues(answer);
  }
}

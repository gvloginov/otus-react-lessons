import { random } from "faker";

import {
  mul,
  div,
  add,
  minus,
  pow,
  factorial,
} from "./mathOperators";

describe("mathOperators test cases", () => {

  it("factorial 5 should return 120", () => {
    expect(factorial(5)).toBe(120);
  });

  it("add 100 + 4 to equal 104", () => {
    expect(add(100, 4)).toBe(104);
  });

  it("mul 3 * 2 to equal 6", () => {
    expect(mul(3, 2)).toBe(6);
  });

  it("div 8 / 2 to equal 4", () => {
    expect(div(8, 2)).toBe(4);
  });

  it("add 7 + 2 to equal 9", () => {
    expect(add(7, 2)).toBe(9);
  });

});

import { sum } from "../src/sum";

it("adds 1 + 2 to equal 3 in TScript", () => {
  expect(sum(1, 2)).toBe(3);
});

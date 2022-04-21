import "mocha";
import { expect } from "chai";
import { FilterMapAddReduce } from "../src/filterMapAddReduce";
import * as functions from "../src/filterAndmapFunctions"

describe("FilterMapAddReduce", () => {
  it("FilterMapAddReduce 1", () => {
    const filterMapAddReduce = new FilterMapAddReduce([1,2,3,4,5,6,7,8,9,10])
    expect(filterMapAddReduce.run(functions.smallerThan4, functions.cubed)).to.eql(36);
  });

  it("FilterMapAddReduce 2", () => {
    const filterMapAddReduce = new FilterMapAddReduce([1,2,3,4,5,6,7,8,9,10])
    expect(filterMapAddReduce.run(functions.greaterThan4, functions.squared)).to.eql(371);
  });
});

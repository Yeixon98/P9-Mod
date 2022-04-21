import "mocha";
import { expect } from "chai";
import { FilterMapSubReduce } from "../src/filterMapSubReduce"
import * as functions from "../src/filterAndmapFunctions"

describe("FilterMapSubReduce", () => {
  it("FilterMapSubReduce 1", () => {
    const filterMapSubReduce = new FilterMapSubReduce([1,2,3,4,5,6,7,8,9,10])
    expect(filterMapSubReduce.run(functions.smallerThan4, functions.cubed)).to.eql(-36);
  });

  it("FilterMapSubReduce 2", () => {
    const filterMapSubReduce = new FilterMapSubReduce([1,2,3,4,5,6,7,8,9,10])
    expect(filterMapSubReduce.run(functions.greaterThan4, functions.squared)).to.eql(-371);
  });
});

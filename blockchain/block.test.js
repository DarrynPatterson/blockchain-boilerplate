const Block = require("./block");
const { DIFFICULTY } = require("../config");

describe("Block", () => {
  let data, lastBlock, block;

  beforeEach(() => {
    data = "bar";
    lastBlock = Block.genesis();
    block = Block.mineBlock(lastBlock, data);
  });

  test("sets the `data` to match the input", () => {
    expect(block.data).toEqual(data);
  });

  test("sets the `lastHash` to match the hash of the last batch", () => {
    expect(block.lastHash).toEqual(lastBlock.hash);
  });

  test("generates a hash that matches the difficulty", () => {
    expect(block.hash.substring(0, DIFFICULTY)).toEqual("0".repeat(DIFFICULTY));
    console.log(block.toString());
  });
});

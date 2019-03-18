const Block = require("./block");

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
});

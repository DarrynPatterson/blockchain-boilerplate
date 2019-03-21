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

  test("generates a hash that matches the difficulty", () => {
    expect(block.hash.substring(0, block.difficulty)).toEqual(
      "0".repeat(block.difficulty)
    );
    //console.log(block.toString());
  });

  test("lowers the difficulty for slowly mined blocks", () => {
    expect(Block.adjustDifficulty(block, block.timestamp + 360000)).toEqual(
      block.difficulty - 1
    );
  });

  test("raises the difficulty for quickly mined blocks", () => {
    expect(Block.adjustDifficulty(block, block.timestamp + 1)).toEqual(
      block.difficulty + 1
    );
  });
});

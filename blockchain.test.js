const Blockchain = require("./blockchain");
const Block = require("./block");

describe("Blockchain", () => {
  let bc, bc2;

  beforeEach(() => {
    bc = new Blockchain();
    bc2 = new Blockchain();
  });

  test("start with genesis block", () => {
    expect(bc.chain[0]).toEqual(Block.genesis());
  });

  test("adds a new block", () => {
    const data = "foo";
    bc.addBlock(data);

    expect(bc.chain[bc.chain.length - 1].data).toEqual(data);
  });

  test("validates a valid chain", () => {
    bc2.addBlock("foo");
    expect(bc.isValidChain(bc2.chain)).toBe(true);
  });

  test("invalidates a chain with a corrupt genesis block", () => {
    bc2.chain[0].data = "Bad data";
    expect(bc.isValidChain(bc2.chain)).toBe(false);
  });

  test("invalidates a corrupt chain", () => {
    bc2.addBlock("foo");
    bc2.chain[1].data = "Not foo";
    expect(bc.isValidChain(bc2.chain)).toBe(false);
  });
});

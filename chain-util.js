const EC = require("elliptic").ec;
const uuidV1 = require("uuid/v1");
const ec = new EC("secp256k1");

class ChainUtil {
  static getKeyPair() {
    return ec.genKeyPair();
  }

  static id() {
    return uuidV1();
  }
}

module.exports = ChainUtil;

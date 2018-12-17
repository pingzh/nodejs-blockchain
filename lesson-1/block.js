const SHA256 = require("crypto-js/sha256")

class Block {
  constructor(timestamp, data) {
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = "";
    this.hash = this.calculateHash();
  }

  calculateHash() {
    let data = this.hash + this.data + this.timestamp + this.previousHash
    return SHA256(SHA256(data).toString()).toString();
  }
}


module.exports = Block

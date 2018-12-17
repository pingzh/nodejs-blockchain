const Block = require("./block")

class Blockchain{
  constructor() {
    this.blockchain = [this.createGenesis()];
  }

  createGenesis() {
    let timestamp = Date.parse("2018/12/16")
    return new Block(timestamp, "Genesis block")
  }

  latestBlock() {
    return this.blockchain[this.blockchain.length - 1]
  }

  addBlock(data){
    const newBlock = new Block(Date.now(), data)

    newBlock.previousHash = this.latestBlock().hash;
    this.blockchain.push(newBlock);
  }

  print() {
    this.blockchain.forEach((block, idx) => {
      console.log(`
      blockHeight: ${idx}
      previsousHash: ${block.previousHash}
      data: ${block.data},
      hash: ${block.hash}
      `)
    });
  }
}

module.exports = Blockchain

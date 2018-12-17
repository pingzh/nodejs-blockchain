const Block = require("./block")
const Blockchain = require("./blockchain")

const nodejsChain = new Blockchain()


nodejsChain.addBlock("Send 100 BTC to Fulin Xiang")
nodejsChain.addBlock("Send 100 BTC to Ping")


nodejsChain.print()

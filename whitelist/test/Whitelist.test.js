
const { expect } = require("chai");
const { network, deployments, ethers } = require("hardhat");

describe("Whitelist",function () {
  beforeEach(async() => {
    accounts = await  ethers.getSigners()
    whitelist = ethers.getContract("Whitelist");
  })
  it("constructor adding max",async function() {
    whitelist
  })
})


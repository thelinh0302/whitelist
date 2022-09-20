const chai = require("chai")
const { ethers } = require("hardhat");
const web3 = require("web3");
const BN = web3.utils.BN;
const chaiBN = require("chai-bn")(BN);
const chaiAsPromised = require("chai-as-promised")
const {solidity} = require("ethereum-waffle");
const expect = chai.expect;
chai.use(chaiBN);
chai.use(chaiAsPromised);
chai.use(solidity)
chai.use(solidity);

describe("My token sales contract", function () {
  it("All tokens should be empty in first account", async () => {
    const [owner] = await ethers.getSigners();

    const MyToken = await ethers.getContractFactory("MyToken");

    const instanceMyToken = await MyToken.deploy();

    const MyCrowdSales = await ethers.getContractFactory("MyCrowdsale");
    
    const instance = await MyCrowdSales.deploy(3,owner.address,instanceMyToken.address);
    console.log(instanceMyToken)
    // await expect(instance.balanceOf(owner).to.be.a.bignumber.equal(new BN(0)) )
  })
});

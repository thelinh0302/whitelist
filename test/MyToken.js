const chai = require("chai")
const { ethers } = require("hardhat");
const web3 = require("web3");
const BN = web3.utils.BN;
const chaiBN = require("chai-bn")(BN);
const chaiAsPromised = require("chai-as-promised")
const expect = chai.expect;
chai.use(chaiBN);
chai.use(chaiAsPromised);


describe("Token contract", function () {
  it("Deployment should assign the total supply of tokens to the owner", async function () {
    const [owner] = await ethers.getSigners();

    const Token = await ethers.getContractFactory("MyToken");

    const hardhatToken = await Token.deploy();

    const ownerBalance = await hardhatToken.balanceOf(owner.address);
    const totalSupply = await hardhatToken.totalSupply()
    
    expect(ownerBalance.toString()).to.be.bignumber.equal(totalSupply.toString());
  });
});
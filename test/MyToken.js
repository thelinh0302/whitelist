const chai = require("chai")
const { ethers } = require("hardhat");
const web3 = require("web3");
const BN = web3.utils.BN;
const chaiBN = require("chai-bn")(BN);
const chaiAsPromised = require("chai-as-promised")
const {solidity} = require("ethereum-waffle")
const expect = chai.expect;
chai.use(chaiBN);
chai.use(chaiAsPromised);
chai.use(solidity)
chai.use(solidity);

describe("Token contract", function () {
  it("Deployment should assign the total supply of tokens to the owner", async function () {
    const [owner] = await ethers.getSigners();
    const Token = await ethers.getContractFactory("MyToken");

    const hardhatToken = await Token.deploy();

    const ownerBalance = await hardhatToken.balanceOf(owner.address);
    const totalSupply = await hardhatToken.totalSupply()
    
    expect(ownerBalance.toString()).to.be.bignumber.equal(totalSupply.toString());
  });
  it("it possible to send token between accounts", async function () {
    const [owner,add1]  = await ethers.getSigners();
    
    const sendToken =  new BN(1).toString();
    
    const Token = await ethers.getContractFactory("MyToken");
    
    const instance = await Token.deploy();
    
    const totalSupp = await instance.totalSupply()
    
    const ownerBalance = await instance.balanceOf(owner.address)

    // const case3 =  totalSupp.sub(sendToken);
    
    await expect(ownerBalance).to.be.a.bignumber.equal(totalSupp)
    
    //transfer token success
    await expect(instance.transfer(add1.address,1)).to.eventually.be.fulfilled;
    
    // await expect(ownerBalance).to.eventually.be.a.bignumber.equal(case3);
  
    await expect(await instance.balanceOf(add1.address)).to.be.a.bignumber.equal(sendToken)
  });

  it("it not possible to send more token than available in total", async function () {
    const [owner,add]  = await ethers.getSigners();

    const Token = await ethers.getContractFactory("MyToken");
    
    const instance = await Token.deploy();
    
    const balanceOfDeployed = await instance.balanceOf(owner.address);


  
    await expect(instance.transfer(add.address,new BN(balanceOfDeployed +1))).to.eventually.be.rejected;
    
    await expect(await instance.balanceOf(owner.address)).to.be.a.bignumber.equal(balanceOfDeployed);

  });
});

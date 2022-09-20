// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "./Crowdsale.sol";
import "./KycContract.sol";
contract MyCrowdsale is Crowdsale {

    // KycContract kyc;
    constructor(
        uint256 rate,    // rate in TKNbits
        address payable wallet,
        IERC20 token
        // KycContract _kyc
    )
        Crowdsale(rate, wallet, token)
    {
        // kyc = _kyc;
    }
        // function _preValidatePurchase(address beneficiary, uint256 weiAmount) internal view override {
        //     super._preValidatePurchase(beneficiary,weiAmount);
        //     require(kyc.kycCompleted(beneficiary),"Kyc is not completed yet, please try again");
        // }
 
}
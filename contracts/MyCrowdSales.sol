// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "./Crowdsales.sol";
contract MyCrowdSales is Crowdsales{
    constructor (uint256 rate, address payable wallet, IERC20 token )
   
    Crowdsales(rate, wallet, token)
    {

    }
}
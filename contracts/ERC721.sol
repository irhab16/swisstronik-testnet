// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract CypherNFT is ERC721 {
    constructor()ERC721("CypherNFT","CYP"){}

    function mint1tokens() public {
        _mint(msg.sender,1*10**18);
    }
}
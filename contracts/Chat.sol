// SPDX-License-Identifier: MIT
pragma solidity 0.8.26;

contract Chat {
    mapping (address => string[]) public messages;

    function addMessage(string memory _message) public {
        messages[msg.sender].push(_message);
    }

    function getMesseges(address _owner) public view returns (string[] memory) {
        return messages[_owner];
    }

    function getMessageCount(address _owner) public view returns (uint256) {
        return messages[_owner].length;
    }

    function getMessageByIndex( address _owner, uint256 index) public view returns (string memory) {
        return messages[_owner][index];
    }

}

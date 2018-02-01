pragma solidity ^0.4.17;

contract Word {
  string public word;
   uint256 public blocknumber;
    uint256 public blockdifficulty;
    uint256 public timestamp;
    uint256 public Gp;

    function Word (string initialWord) public {
        word = initialWord;
    }

    function setWord (string newWord) public {
      word = newWord;
       blocknumber = block.number;
        blockdifficulty = block.difficulty;
        timestamp = block.timestamp;
        Gp = tx.gasprice;
    }

} 

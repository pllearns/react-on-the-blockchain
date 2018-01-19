pragma solidity ^0.4.17;

contract Word {
  string public word;

    function Word (string initialWord) public {
        word = initialWord;
    }

    function setWord (string newWord) public {
      word = newWord;
    }

} 
import React, { Component } from 'react';
import './styles/App.css';
import NavBar from './components/NavBar';
import InfoDisplay from './components/InfoDisplay';
import Footer from './components/Footer';
import Web3 from 'web3';

var provider = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

provider.eth.defaultAccount = provider.eth.accounts[0];

var MyContract = provider.eth.contract([{ "constant": true, "inputs": [], "name": "get", "outputs": [{ "name": "", "type": "bytes32" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "x", "type": "bytes32" }], "name": "set", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }]
);

var contract = MyContract.at('0x3051b4cf6a6b2d776aea5ab7c1020c1fc648195b');

var balance = provider.eth.getBalance(provider.eth.defaultAccount);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      accountNumber: '',
      word: '',
      confirmWord: '',
      accountBalance: null,
      gasPrice: null
    }
    this.storeWord = this.storeWord.bind(this)
    this.getWord = this.getWord.bind(this)
    this.getBalance = this.getBalance.bind(this)
    this.getGasPrice = this.getGasPrice.bind(this)
    this.showAccount = this.showAccount.bind(this)
  }

    storeWord = () => {
      return this.setState({word: contract.set(this.state.word)})
    }

    getWord = () => {
      return contract.get(this.state.word)
    }

    getBalance = () => {
      return this.setState({accountBalance: Number(balance)})
    }

    getGasPrice = () => {
      return this.setState({gasPrice: provider.eth.gasPrice})
    }

    showAccount = () => {
      return this.setState({ accountBalance: provider.eth.defaultAccount})
    }

 
  render() {
    return (
      <div className="App">
        <NavBar />
        <InfoDisplay 
          storeWord={this.storeWord} 
          getWord={this.getWord}
          getBalance={this.getBalance}
          getGasPrice={this.getGasPrice}
          showAccount={this.showAccount}
          balance={this.state.accountBalance} 
          word={this.state.word}
          gasPrice={this.state.gasPrice}
          />
        <Footer />
      </div>
    );
  }
}


export default App;

import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import InfoDisplay from './components/InfoDisplay';
import Footer from './components/Footer';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: '',
      word: '',
      confirmWord: '',
      balance: null,
      gasPrice: null
    }


  }
  render() {
    return (
      <div className="App">
        <NavBar />
        <InfoDisplay />
        <Footer />
      </div>
    );
  }
}

export default App;

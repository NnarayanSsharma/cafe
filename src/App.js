import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Data from './data'
import Header from './components/Header';
import Footer from './components/Footer';
import Menu1 from './components/Menu1';
import Menu2 from './components/Menu2';
import Navbar from './components/Navbar';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       data: Data,
       
    }
  }
  
  render(){
    console.log(this.state)
    return (
      <div className="App">
        {/* <Navbar /> */}
        <Header data={this.state.data} />
        <Menu1 data={this.state.data} />
        <Menu2 data={this.state.data} />
        <Footer data={this.state.data} />
      </div>
    );
  }
}

export default App;

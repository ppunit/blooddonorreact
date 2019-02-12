import React, { Component } from 'react';
import Home from './component/home';




class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img style={{width:"100%",height:"300px"}}src="http://www.savelifeindia.org/site/slider/images/slide1.jpg" alt="img"/>
          
        </header>
        <div className="container">
        <Home/>
        </div>
      
      </div>
    );
  }
}

export default App;

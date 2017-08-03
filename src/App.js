import React, { Component } from 'react';
import Clock from './Clock/Clock';
import './App.css';

class App extends Component {
  render() {
    const appStyle = {
      width: '100%',
      height: '100%'
    }
    
    const containerStyle = {
      display: 'flex',
      flex: 'auto',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      height: '100%'
    };
    
    const itemStyle = {
      display: 'flex',
      flex: 'auto',
      flexDirection: 'row',
      alignItems: 'center',
    };

    return (
      <div className="App" style={appStyle}>
        <div className="flex-container" style={containerStyle} >
          <div className="flex-item" style={itemStyle}>
            <Clock></Clock>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Container from './components/Container/Container';




export default class HoroscopeApp extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      currentSign: 'sagittarius',
    }
  }
  render() {
  return (
    <div className="HoroscopeApp">
       
        <Container currentSign={this.state.currentSign}/>
    </div>
  );
}
}

export default HoroscopeApp;
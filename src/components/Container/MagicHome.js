import { render } from '@testing-library/react';
import React, { Component } from 'react';
import Container from './components/Container/Container';

// https://reactjs.org/docs/react-component.html

        class MagicHome extends Component {
            constructor(props){
              super(props)
              this.state = {
                currentSign: 'sagittarius',
              }
            }
            render() {
            return (
              <div className="MagicHome">
                  <Header />
                  <Container currentSign={this.state.currentSign}/>
              </div>
            );
          }
          }
          
          export default MagicHome;
          
// // reference https://www.w3schools.com/react/react_props.asp
// Props are arguments passed into React components.

// Props are passed to components via HTML attributes.

// React Props
// React Props are like function arguments in JavaScript and attributes in HTML.

// To send props into a component, use the same syntax as HTML attributes:
// The component receives the argument as a props object:


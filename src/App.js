import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      rows: null,
      colorA: 'red',
      colorB: 'black'
    }
  }
  componentWillMount() {
    let rows = prompt('How many rows?');
    this.setState(() => ({rows:rows}))
    let colorA = prompt('First color? Note, must be hexadecimal');
    let colorB = prompt('Second color? Note, must be hexadecimal');
    if (/^#[0-9a-f]{3}([0-9a-f]{3})?$/i.test(colorA)) {
        this.setState(() => ({colorA:colorA}))
    }
    if (/^#[0-9a-f]{3}([0-9a-f]{3})?$/i.test(colorB)) {
        this.setState(() => ({colorB:colorB}))
    }
  }
  render() {
    let width = Math.round(500 / Number(this.state.rows)) + "px";
    let tmp = Array(Number(this.state.rows)).fill(1)
    let list = tmp.map(
      (a, b) => {
        return tmp.map(
          (x, y) => {
            return b %2 === 0 ? y %2 === 0 ? 0 : 1 :
             b%2 !== 0 ? y %2 === 0 ? 1 : 0 : y %2 === 1 ? 0 : 1
          }
        )
      }
    )
    let colorA = this.state.colorA;
    let colorB = this.state.colorB;
    if (list && width && colorA && colorB) {
      return (
        <div id="app">
          {list && list.map((x,y) => {
            return (
              <div key={y} className="row">
              {list && list[y].map((a,b) => {
                return (
                  <div
                    key={b}
                    className="cell"
                    style={a === 0 ? 
                      {background:colorA, width:'45px', height:'45px', display:'inline-block'} :
                      {background:colorB, width:'45px', height:'45px', display:'inline-block'}}
                    >
                  </div>
                )
              })}
              </div>
            )
          })}
        </div>
      );
    }  
  }
}

export default App;

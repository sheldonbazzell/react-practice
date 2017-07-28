import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let styles = {
  row: {height: '20px'},
  cell: {height: '20px', width: '20px', display:'inline-block'},
  colorA: 'black',
  colorB: 'red'
}

let rows = prompt("How many rows?");
let colorA = prompt("First color? Must be hex");
let colorB = prompt("Second color? Must be hex");
if (!/^#[0-9a-f]{3}([0-9a-f]{3})?$/i.test(colorA)) {
    colorA = null;
}
if (!/^#[0-9a-f]{3}([0-9a-f]{3})?$/i.test(colorB)) {
    colorB = null;
}
ReactDOM.render(<App styles={styles} colors={[colorA, colorB]} rows={rows} />, document.getElementById('root'));
registerServiceWorker();

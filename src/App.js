import React from 'react';
import './App.css';

function Cell(props) {
  return (
    <div
      style={
          {
            background:props.background,
            height:props.height,
            width:props.width,
            display:props.display,
            backgroundColor:props.background
          }
        }
    ></div>
  )
}

function Row(props) {
  let cells = [];
  for (let i = 0; i < props.rows; ++i) {
    cells.push(<Cell
      key={i}
      height={props.css.cell.height}
      width={props.css.cell.width}
      display={props.css.cell.display}
      background={
        props.zero && i % 2 === 0 ?
          props.css.colorA :
        props.zero && i % 2 === 1 ?
          props.css.colorB :
        !props.zero && i % 2 === 0 ?
          props.css.colorB :
        !props.zero && i % 2 === 1 ?
          props.css.colorA :
          props.css.colorB
      }
    />)
  }
  return (
    <div
      style={{width:'100%',height: props.css.row.height}}
    >
      {cells}
    </div>
  )
}

function App(props) {
  let rows = [];
  if (props.colors[0]) props.styles.colorA = props.colors[0];
  if (props.colors[1]) props.styles.colorB = props.colors[1];
  for (let i = 0; i < props.rows; ++i) {
    rows.push(<Row key={i} zero={i%2 === 0} rows={props.rows} css={props.styles} />)
  }
  return (
    <div>{rows}</div>
  )
}


export default App;

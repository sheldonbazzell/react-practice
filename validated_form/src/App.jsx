import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      validEmail: false,
      submitted: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.isValidEmail = this.isValidEmail.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  isValidEmail(email) {
    let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(email);
  }
  handleChange(e) {
    let id = e.target.id;
    let val = e.target.value;
    let newState = this.state;
    newState[id] = val;
    if (id === "email" && this.isValidEmail(val)) {
      newState.validEmail = true;
    }
    this.setState(() => newState);
  }
  handleClick() {
    this.setState(() => ({submitted:true}))
  }
  render() {
    if (this.state.submitted) {
      return <h1>Thanks!</h1>
    } else {
      return (
        <div className="App">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input 
            type="text"
            id="name"
            onChange={this.handleChange}
          />
          {this.state.name.length < 8 &&
            <div className="error">Name must be at least 8 characters</div>
          }
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>        
          <input 
            type="text"
            id="email"
            onChange={this.handleChange}      
          />
          {!this.state.validEmail &&
            <div className="error">Email must be valid</div>
          }
        </div>
          <input 
            type="button"
            value="Submit" 
            disabled={
              this.state.name.length > 7 &&
              this.state.validEmail
              ? false : true
            }
            onClick={this.handleClick}
          />
        </div>
      );
    }
  }
}

export default App;

import React, { Component } from 'react';

class Textbox extends Component {
  state = { 
    term: '',
    day: 'Today',
   }

  handleChange = e => {
    this.setState({
      term: e.target.value
    });
  }

  handleSelect = e => {
    this.setState({
      day: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.updateEntry(this.state.term, this.state.day);
    this.setState({
      term: ''
    });
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="form">
          <fieldset className="form-group form-warning">
            <label htmlFor="day">FOR DAY : </label>
            <select value={this.state.day} id="day" onChange={this.handleSelect} className="form-control">
              <option value="Today">Today</option>
              <option value="Tomorrow">Tomorrow</option>
              <option value="Day_After_Tomorrow">Day After Tomorrow</option>
            </select>
          </fieldset>
          <fieldset className="form-group form-warning">
            <label>YOUR GOAL : </label>
            <input type="text" id="aim" value={this.state.term} placeholder="type your aim here and press enter" onChange={this.handleChange} className="form-control"/>
          </fieldset>
          <button className="btn btn-warning btn-ghost">I WILL DO THIS.</button>
        </form>
      </div>    
    );
  }
}

export default Textbox;
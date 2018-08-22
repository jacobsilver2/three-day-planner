import React, { Component } from 'react';
import Textbox from './components/Textbox';
import Header from './components/header';
import DisplayToday from './components/DisplayToday';
import DisplayTomorrow from './components/DisplayTomorrow';
import DisplayDayAfterTomorrow from './components/DisplayDayAfterTomorrow';
// import './App.css';
import 'hack';
import SimpleStorage from 'react-simple-storage';

class App extends Component {
  state = { 
    Today: [],
    Tomorrow: [],
    Day_After_Tomorrow: [],
    username: 'yo buddy!'
   }

  updateEntry = (term, day) => {
    if(day === 'Today') {
      this.setState({
        Today: [...this.state.Today, term],
      });
    } else if (day === 'Tomorrow') {
      this.setState({
        Tomorrow: [...this.state.Tomorrow, term],
      });
    } else if (day === 'Day_After_Tomorrow') {
      this.setState({
        Day_After_Tomorrow: [...this.state.Day_After_Tomorrow, term],
      })
    }
  }

  deleteEntry = (index, day) => {
    if (day === 'Today') {
      let filterList = this.state.Today.filter((elem, i) => {
        if (i === index) {
          return false;
        }
        return true;
      })
      this.setState({
        Today: filterList
      });
    } else if (day === 'Tomorrow') {
      let filterList = this.state.Today.filter((elem, i) => {
        if (i === index) {
          return false;
        }
        return true;
      })
      this.setState({
        Tomorrow: filterList
      });
    } else if (day === 'Day_After_Tomorrow') {
      let filterList = this.state.Today.filter((elem, i) => {
        if (i === index) {
          return false;
        }
        return true;
      })
      this.setState({
        Day_After_Tomorrow: filterList
      });
    } else {
      console.log("Something went wrong while removing item...")
    }
  }
  

  render() {
    return (
      <div>
      <SimpleStorage parent={this} />
        <Header name={this.state.username}/>
        <Textbox updateEntry={this.updateEntry} />
        <hr />
        <div className="grid">
          <DisplayToday items={this.state.Today} deleteItem={this.deleteEntry}/>
          <DisplayTomorrow items={this.state.Tomorrow} deleteItem={this.deleteEntry}/>
          <DisplayDayAfterTomorrow items={this.state.Day_After_Tomorrow} deleteItem={this.deleteEntry}/>
        </div>
      </div>
    );
  }
}

export default App;

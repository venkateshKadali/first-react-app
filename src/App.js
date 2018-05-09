import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  state = {
    persons: [
      {name: "venky", age: 20},
      {name: "kadali", age: 22},
      {name: "keerthi", age: 24}
    ],
    otherState: 'some other values'
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: 20},
        {name: "kadali", age: 22},
        {name: "keerthi", age: 18}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'venky', age: 20},
        {name: event.target.value, age: 22},
        {name: "Pavani", age: 18}
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '2px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    return (
      <div className='App'>
        <h1>Hi, I am React App</h1>

        <button style={style}
        onClick = {this.switchNameHandler.bind(this, 'Venkatesh')}>Switch Name</button>

        <Person
         name={this.state.persons[0].name}
         age={this.state.persons[0].age}/>

        <Person
        name={this.state.persons[1].name}
        age ={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this, 'Venkatesh!!!')}
        changed={this.nameChangedHandler}>My Hobbies: Cooking</Person>

        <Person
        name={this.state.persons[2].name}
        age={this.state.persons[2].age}/>
      </div>
    );
    //Cumbersome: return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I\'am React App'));
  }
}

export default App;

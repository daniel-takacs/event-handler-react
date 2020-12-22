import './App.css';
import EventHandler from './EventHandler';
import Form from './Form';
import React, { Component } from 'react';
import UserList from './UserList';

class App extends React.Component {

  state = {
    title: "Text"
    
  }

  titleHandler = (newValue) => {
    this.setState({ title: newValue});
    
  }

  render(){
    return (
      <div className="App">
        <Form titleHandler={this.titleHandler} inputValue={this.state.title}/>
        <h2>{this.state.title}</h2>
      <EventHandler />
      <UserList />
      </div>
    );
  }
}

export default App;

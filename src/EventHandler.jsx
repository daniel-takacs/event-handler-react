import React, { Component } from 'react';
import './EventHandler.css'

export default class EventHandler extends Component {

    state = {
        click: 0
    }

    onClickHandler = ()=> {
       this.setState({ click: this.state.click + 1})
       console.log(this.state.click)
    }
    render() {
        return (
            <div>
                <div className="clickme" onClick={this.onClickHandler}>Click me {this.state.click}</div>
            </div>
        )
    }
}

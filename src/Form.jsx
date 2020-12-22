import React, { Component } from 'react';
import './EventHandler.css';

export default class Form extends Component {

    onChangeHandler = (e) => {
        this.props.titleHandler(e.target.value);
        
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                    action="#"
                    methon="GET"
                    name="input-key" 
                    className="inputfield" 
                    type="text" 
                    onChange={this.onChangeHandler} 
                    value={this.props.inputValue}/>
                </form>
            </div>
        )
    }
}

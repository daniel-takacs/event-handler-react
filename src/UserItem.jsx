import React, { Component } from 'react';

export default class UserItem extends Component {
    render() {
        return (
            <div>
                {this.props.name}{this.props.email} {this.props.address}
            </div>
        )
    }
}

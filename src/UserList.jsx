import React, { Component } from 'react';
import UserItem from './UserItem';

export default class UserList extends Component {

    state = {
        users: [
            {
              name: "Somebody",
              address: "Somewhere",
              email: "Somebody.gmail.com"
          },
            {
              name: "Somebody2",
              address: "Somewhere2",
              email: "Somebody2.gmail.com"
          },
            {
              name: "Somebody3",
              address: "Somewhere3",
              email: "Somebody3.gmail.com"
          },
        ]
    }


    render() {

        const getKey = (name, address, email) => `${name}${address}${email}`;


        const UserItems = this.state.users.map(
            user => <UserItem name={user.name} 
                            address={user.address} 
                            email={user.email} 
                            key={getKey(user.name, user.address, user.email)}/>
            );

        return (
            <div>
                UserList {UserItems}
            </div>
        )
    }
}

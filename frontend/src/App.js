import React from 'react'
import UserList from "./components/UserList";
// import logo from './logo.svg';
// import './App.css';

class App extends React.Component {
    constructor(prop) {
        super(prop)
        this.state = {
            'users': []
        }
    }

    render() {
        return (
            <div>
                < UserList users={this.state.users} />
            </div>
        )
    }
}

export default App;

import React from 'react'
import UserList from "./components/UserList";
import axios from 'axios'

// import logo from './logo.svg';
// import './App.css';

class App extends React.Component {
    constructor(prop) {
        super(prop)
        this.state = {
            'users': []
        }
    }

    componentDidMount() {
        axios
            .get('http://localhost:8000/api/users/')
            .then( response => {
                const users = response.data

                this.setState({
                'users': users
                })
            })
            .catch( error => console.log(error))

        // шаблон для хард данных
        // const users = [
        //     {
        //         "id": 1,
        //         "first_name": "Василий",
        //         "last_name": "Поддубный",
        //         "email": "vasiliy.poddubny@ya.ru",
        //         "birthday": 1992
        //     },
        // ]
        // this.setState({
        //     'users': users
        // })
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

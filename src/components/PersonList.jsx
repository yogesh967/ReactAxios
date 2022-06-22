import React from 'react'
import axios from 'axios'

export default class PersonList extends React.Component {
    state = {
        persons: [],
    };

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
              .then( res => {
                this.setState({ persons: res.data });
            });
    }

    render() {
        return <ol>
            { this.state.persons.map(person => <li>
                {person.name}
            </li>) }
        </ol>
    }

}
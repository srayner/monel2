import React, {Component} from 'react';
import Card from '../components/Card/Card';
import Table from '../components/Table/Table';
import Axios from 'axios';

class Users extends Component
{
    state = {
        columns: [
            {field: 'name', text: 'Name'},
            {field: 'username', text: 'Username'},
            {field: 'email', text: 'Email Address'},
            {field: 'salary', text: 'Salary'}
        ],
        data: []
    }

    componentDidMount() {
        Axios.get('https://test-4e910.firebaseio.com/users.json')
            .then(response => {
                let data = Object.keys(response.data).map(key => {
                    return {id: key, ...response.data[key]};
                  });
                
                console.log(data);
                this.setState({data: data});
            });
    }

    render() {
        return (
            <div>
                <h2>Users</h2>
                <Card type="card-2">
                    <Table data={this.state}/>
                </Card>
            </div>
        )
    }
}

export default Users;
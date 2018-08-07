import React, { Component } from 'react';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';

class UserForm extends Component {

    state = {
    }

    render() {
        return (
            <form>
                <Input placeholder="fred" id='form-username' name="username" label="Username"/>
                <Input id='form-department' name="department" label="Department"/>
                <Input prepend="£" append=".00" id='form-salary' name="salary" label="Salary"/>
                <Button type="primary" text="Add"/>
            </form>
        );
    }
}

export default UserForm;
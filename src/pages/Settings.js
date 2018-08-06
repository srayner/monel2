import React from 'react';
import Card from '../components/Card/Card';
import Input from '../components/Input/Input';

const Settings = (props) => {
    return (
        <div>
            <h2>Settings</h2>
            
                <form>
                    <Input placeholder="fred" id='form-username' name="username" label="Username"/>
                    <Input id='form-department' name="department" label="Department"/>
                    <Input prepend="£" append=".00" id='form-salary' name="salary" label="Salary"/>
                </form>
            
        </div>
    )
}

export default Settings;
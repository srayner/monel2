import React from 'react';
import Card from '../components/Card/Card';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';

const Settings = (props) => {
    return (
        <div className="grid">
            <div>
                <h2>Settings</h2>
                <form>
                    <Input placeholder="fred" id='form-username' name="username" label="Username"/>
                    <Input id='form-department' name="department" label="Department"/>
                    <Input prepend="£" append=".00" id='form-salary' name="salary" label="Salary"/>
                    <Button type="primary" text="Add"/>
                </form>
            </div>
        </div>
    )
}

export default Settings;
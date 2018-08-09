import React, {Component} from 'react';
import Notification from '../components/Notification/Notification';
import DynamicForm from '../components/DynamicForm/DynamicForm';
import formConfig from '../config/form';
import axios from 'axios';

class SocialMedia extends Component {
    
    render () {
        return (
            <div>
                <h2>Social Media</h2>
                <Notification text="test notification" close/>
                <DynamicForm
                    className="form"
                    title="Add User"
                    model={formConfig}
                    onSubmit = {(model) => {this.onSubmit(model)}}
                />
            </div>
        )
    }

    onSubmit (model){
        const $url = 'https://test-4e910.firebaseio.com/users.json';
    
        axios.post($url, model)
            .then(response => {
                console.log('post response');
            });
    }
}

export default SocialMedia;
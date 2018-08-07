import React from 'react';
import DynamicForm from '../components/DynamicForm/DynamicForm';
import formConfig from '../config/form';

const SocialMedia = (props) => {
    return (
        <div>
            <h2>Social Media</h2>
            <DynamicForm
                className="form"
                title="Registration"
                model={formConfig}
                onSubmit = {(model) => {this.onSubmit(model)}}
            />
        </div>
    )
}

export default SocialMedia;
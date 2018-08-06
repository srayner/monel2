import React from 'react';
import './Input.css';

const Input = (props) => {

    var prepend = null;
    if (props.prepend) {
        prepend = <span class="input-prepend">{props.prepend}</span>
    }

    var append = null;
    if (props.append) {
        append = <span class="input-append">{props.append}</span>
    }

    return (
        <div class="FormControl">
            <label for={props.id}>{props.label}</label>
            <div class="input-control">
                {prepend}
                <input
                    className={props.className}
                    autocomplete="off"
                    type="text"
                    placeholder={props.placeholder}
                    name={props.name}
                    id={props.id}
                    value={props.value}
                />
                {append}
            </div>
        </div>
    );
}

export default Input;
import React from 'react';

const Option = (props) => (
    <div className='option'>
        <p className='option__text'>{props.index}. {props.text}</p>
        <button 
            className='button--link'
            onClick={(e) => {
                props.handleDeleteOption(props.text);
            }}
        >
            Remove
        </button>
    </div>
);

export default Option;
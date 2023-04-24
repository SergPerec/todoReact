/* eslint-disable prettier/prettier */

import React, { useState } from 'react';
import  ImgAdd  from '../Images/ImgAdd';

const minLength = 2;

function Form(props) {
    const { priority, addTodo } = props;
    const [inputValue, setInputValue] = useState('');
    const getInputValue = (e) => {
        setInputValue(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.length <= minLength) return;
        addTodo({ id: String(Date.now()), task: inputValue, priority, status: 'todo' });
        setInputValue('');
    };

    return (
        <Form onSubmit={handleSubmit}>
            <input
                onChange={getInputValue}
                className='new-high-item__text'
                placeholder='Добавьте задачу...'
                id='input_high'
                type='item-text'
                value={inputValue}
            />
            <button type='submit' className='new-item_add'>
                <ImgAdd />
            </button>
        </Form>
    )
}

export default Form;
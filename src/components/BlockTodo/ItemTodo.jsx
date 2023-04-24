/* eslint-disable prettier/prettier */

import React, { useEffect, useState } from 'react';
import ImgClose from '../Images/ImgClose';

function ItemTodo({ id, task, status, changeTodo, deleteTodo }) {

    const check = status === 'done';
    const [checked, setchecked] = useState(check);

    const getInputCheck = () => {
        setchecked(!checked)
    }

    useEffect(() => {
        const status = checked ? 'done' : 'todo';
        changeTodo( id, status );   
    }, [checked]);

    const checkedStyle = {
        backgroundColor: '#dbdbdb'
    }

    return (
        <div className='item' style={checked ? checkedStyle : null}>
            <input 
            type="chckbox"
            defaultChecked={checked}
            onChange={getInputCheck}
            className='item-check'
            id={id}
            />
            <label htmlFor={id} className='item-text'>
                {task}
            </label>
            <div onClick={() => deleteTodo(id)} className='item-close'>
                <ImgClose />
            </div>
        </div>
    )
}

export default ItemTodo;

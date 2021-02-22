import React, { SyntheticEvent } from 'react';

import './AddTodo.css';

type AddTodoProps = {
    todoItem: { id: number, text: string };
    updateTodoItem: (todoText: string) => void;
    addTaskToList: () => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ todoItem, updateTodoItem, addTaskToList }) => {
    const submitHandler = (event: SyntheticEvent) => {
        event.preventDefault();
        addTaskToList();
    }
    return (
        <form className="addTodoContainer" onSubmit={submitHandler}>
            <div  className="controlContainer">
                <input className="controlSpacing" style={{flex: 1}} type="text" value={todoItem?.text ?? ''} onChange={(ev) => updateTodoItem(ev.target.value)} placeholder="Enter task todo ..." />
                <input className="controlSpacing" style={{flex: 1}} type="submit" value="submit" />
            </div>
            <div>
                <label>
                    <span style={{ color: '#ccc', padding: '20px' }}>{todoItem?.text}</span>
                </label>
            </div>
        </form>
    )
}

export default AddTodo;

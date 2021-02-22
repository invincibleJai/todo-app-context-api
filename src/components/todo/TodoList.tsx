import React from 'react';

import './TodoList.css';

export type TodoItemProp = {
    id: number;
    text: string;
    completed: boolean;
}

export type TodoListProps = {
    listData: TodoItemProp[];
    removeItem: (id: number) => void;
    toggleItemStatus: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ listData, removeItem, toggleItemStatus }) => {
    return listData.length > 0 ? (
        <div className="todoListContainer">
            { listData.map((lData) => {
                return (
                    <ul key={lData.id}>
                        <li>
                            <div className="listItemContainer">
                                <input type="checkbox" style={{ padding: '10px', margin: '5px' }} onChange={() => toggleItemStatus(lData.id)} checked={lData.completed}/>
                                <span className="listItems" style={{ textDecoration: lData.completed ? 'line-through' : 'none', flex: 2 }}>{lData.text}</span>
                                <button type="button" className="listItems" onClick={() => removeItem(lData.id)}>Delete</button>
                            </div>
                        </li>
                    </ul>
                )
            })}
        </div>
    ) : (<span> No Todo list exist </span >)
}

export default TodoList;

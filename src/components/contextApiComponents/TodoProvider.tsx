import React from 'react';
import { TodoItemProp } from '../todo/TodoList';
import TodoReducer from '../../reducers/TodoReducer';

type TodoContextProps = {
    state : {todoList: TodoItemProp[]};
    dispatch: ({type, payload}: {type:string, payload: any}) => void;
}

export const TodoContext = React.createContext({} as TodoContextProps);

const TodoProvider : React.FC = (props) => {
    const [state, dispatch] = React.useReducer(TodoReducer, {todoList: []});
    const value = {state, dispatch}
    return (
        <TodoContext.Provider value={value}>
            {props.children}
        </TodoContext.Provider>
    )
}

export default TodoProvider;

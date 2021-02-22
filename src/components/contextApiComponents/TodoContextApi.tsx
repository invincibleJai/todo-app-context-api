import React from 'react';
import { ADD_TODO_ACTION, REMOVE_TODO_ACTION, UPDATE_TODO_ACTION } from '../../constants';
import Footer from '../Footer';
import FilterReducer from '../../reducers/FilterReducer';
import AddTodo from '../todo/AddTodo';
import TodoList, { TodoItemProp } from '../todo/TodoList';
import { TodoContext } from './TodoProvider';

const defaultTodoItem: TodoItemProp = { id: Date.now(), text: '', completed: false };

const TodoContextApi: React.FC = () => {
    const { state: { todoList }, dispatch } = React.useContext(TodoContext);
    const [todoItem, setTodoItem] = React.useState(defaultTodoItem);
    const [todoListData, setTodoListData] = React.useState(todoList);

    React.useEffect(() => {
        setTodoListData(todoList);
    }, [todoList])

    const updateTodoItem = (text: string) => {
        setTodoItem({
            id: Date.now(),
            text,
            completed: false
        })
    }
    const addTaskToList = () => {
        dispatch({
            type: ADD_TODO_ACTION,
            payload: todoItem
        });
        setTodoItem(defaultTodoItem);
    }
    const removeItem = (id: number) => {
        dispatch({
            type: REMOVE_TODO_ACTION,
            payload: { id }
        })
    }
    const toggleItemStatus = (id: number) => {
        dispatch({
            type: UPDATE_TODO_ACTION,
            payload: { id }
        })
    }
    const filterTodoList = (type: string) => {
        const filteredList = FilterReducer(todoList, {type});
        setTodoListData(filteredList)

    }

    return (
        <>
            <AddTodo todoItem={todoItem} updateTodoItem={updateTodoItem} addTaskToList={addTaskToList} />
            <TodoList listData={todoListData} removeItem={removeItem} toggleItemStatus={toggleItemStatus} />
            <Footer item={todoListData.length} storage="Context API" filterTodoList={filterTodoList} />
        </>
    )
}

export default TodoContextApi;

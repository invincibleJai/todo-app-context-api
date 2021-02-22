import { TodoItemProp } from "../components/todo/TodoList";
import { ADD_TODO_ACTION, REMOVE_TODO_ACTION, UPDATE_TODO_ACTION } from "../constants";


type ActionProps = {
    type: string;
    payload: TodoItemProp;
}

type StateProps = {
    todoList: TodoItemProp[];
}

const TodoReducer = (state: StateProps = {todoList:[]}, action: ActionProps) => {

    switch(action.type) {
        case ADD_TODO_ACTION:
            return { todoList: [...state.todoList, action.payload]}
        case REMOVE_TODO_ACTION:
            return { todoList: state.todoList.length ? state.todoList.filter((d) => d.id !== action.payload.id) : []};
        case UPDATE_TODO_ACTION:
            return { todoList: state.todoList.length ? state.todoList.map((d) => {
                if(d.id === action.payload.id) d.completed = !d.completed;
                return d;
            }): []}
        default:
            return state;
    }
}

export default TodoReducer;

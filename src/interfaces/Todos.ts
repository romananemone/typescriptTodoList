import {TodoType, TodoInProgress, TodoCompleted} from '../types/Todo';
import {AddTodoWrapper, RemoveTodoWrapper, ToggleTodoWrapper} from "../types/TodoCallbacks";

export default interface Todos {
    finishedTodos: Array<TodoType>;
    inProgressTodos: Array<TodoType>;
    addTodoWrapper: AddTodoWrapper;
    removeTodoWrapper: RemoveTodoWrapper;
    toggleTodoWrapper: ToggleTodoWrapper;
}
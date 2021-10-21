import {TodoType, TodoInProgress, TodoCompleted} from '../types/Todo';
import {AddTodoWrapper, RemoveTodoWrapper, ToggleTodoWrapper} from "../types/TodoCallbacks";

export default interface Todos {
    finishedTodos: Array<TodoCompleted>;
    inProgressTodos: Array<TodoInProgress>;
    addTodoWrapper: AddTodoWrapper;
    removeTodoWrapper: RemoveTodoWrapper;
    toggleTodoWrapper: ToggleTodoWrapper;
}
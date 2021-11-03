import {createSelector} from 'reselect'
import {TodoType} from "../types/Todo";
import {RootState} from "../store/store";

const todosSelector = (state: RootState) => state.todos.todosList;

export const finishedTodosSelector = createSelector(
    todosSelector,
    (todos: Array<TodoType>) => todos.filter((todo) => todo.completed)
);

export const inProgressTodoSelector = createSelector(
    todosSelector,
    (todos: Array<TodoType>) => todos.filter((todo) => !todo.completed)
);

import {RawTodo, TodoInProgress} from "../types/Todo";
import {todoStartTimer} from "./todoTime";

export const rawTodosMapping = (todos: Array<RawTodo>): Array<TodoInProgress> => {
    const mappedTodos = todos.map(({userId, ...rest}) => {
        const uncompletedTodo = {...rest, completed: false};
        return todoStartTimer(uncompletedTodo);
    });
    return mappedTodos;
}
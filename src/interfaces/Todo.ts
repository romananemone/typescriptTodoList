import {RemoveTodoWrapper, ToggleTodoWrapper} from "../types/TodoCallbacks";

export default interface Todo {
    id: number;
    title: string;
    completed: boolean;
    removeTodoWrapper: RemoveTodoWrapper;
    toggleTodoWrapper: ToggleTodoWrapper;
    startDate?: string;
    endDate?: string;
    timeSpent?: string;
};
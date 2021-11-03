import {TodoType} from "../types/Todo";

export const getMaxId = (todos: Array<TodoType>, archive: Array<TodoType>): number => {
    if (todos.length === 0 && archive.length === 0) return 0;
    const todosIds = todos.map((item: TodoType) => item.id);
    const archiveIds = archive.map((item: TodoType) => item.id);
    const maxId = Math.max(...todosIds, ...archiveIds);
    return maxId;
}
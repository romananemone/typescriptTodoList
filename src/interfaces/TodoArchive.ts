import {TodoType} from "../types/Todo";
import {ResotreTodoWrapper} from '../types/TodoCallbacks';

export default interface TodoArchive {
    todosArchive: Array<TodoType>;
    restoreTodoWrapper: ResotreTodoWrapper;
}
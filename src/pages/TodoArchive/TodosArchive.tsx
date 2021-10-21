import {useSelector} from "react-redux";
import {RootState} from '../../store/store';
import TodoArchiveView from "../../components/TodoArchive/TodoArchiveView";
import {restoreTodo} from '../../store/slices/todoSlice';
import {useDispatch} from "react-redux";

const TodosArchive = (): JSX.Element => {
    const todosArchive = useSelector((state: RootState) => state.todos.todosArchive);
    const dispatch = useDispatch();

    const restoreTodoWrapper = (todo: number) => {
        dispatch(restoreTodo(todo));
    }
    return <TodoArchiveView todosArchive={todosArchive} restoreTodoWrapper={restoreTodoWrapper} />
}

export default TodosArchive;
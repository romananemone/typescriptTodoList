import {useDispatch, useSelector} from "react-redux";
import {RootState} from '../../store/store';
import TodoListView from '../../components/TodoList/TodoListView';
import {useEffect} from "react";
import {fetchTodos} from '../../store/slices/todoSlice';
import {finishedTodosSelector, inProgressTodoSelector} from '../../selectors/todos';
import {addTodo, removeTodo, toggleTodo} from "../../store/slices/todoSlice";

const TodoList = (): JSX.Element => {
    const todos = useSelector((state: RootState) => state.todos.todosList);
    const finishedTodos = useSelector(finishedTodosSelector);
    const inProgressTodos = useSelector(inProgressTodoSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        if (todos.length !== 0) return;
        dispatch(fetchTodos());
    }, [])

    const addTodoWrapper = (title: string) => {
        dispatch(addTodo(title));
    }

    const removeTodoWrapper = (id: number) => {
        dispatch(removeTodo(id));
    }

    const toggleTodoWrapper = (id: number) => {
        dispatch(toggleTodo(id));
    }

    return <TodoListView finishedTodos={finishedTodos}
                         inProgressTodos={inProgressTodos}
                         addTodoWrapper={addTodoWrapper}
                         removeTodoWrapper={removeTodoWrapper}
                         toggleTodoWrapper={toggleTodoWrapper}/>
}

export default TodoList;
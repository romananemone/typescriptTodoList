import {createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit'
import {todoApi} from "../../services/serviceApi";
import {TodoType} from "../../types/Todo";
import {getMaxId} from '../../helpers/maxIdFromTodosAndArchive';
import {inProgressToCompleted, finishedToInProgress, todoStartTimer} from '../../helpers/todoTime';

type TodosSliceReducer = {
    isFetching: boolean;
    todosList: Array<TodoType>;
    todosArchive: Array<TodoType>;
}

const initialState: TodosSliceReducer = {
    isFetching: false,
    todosList: [],
    todosArchive: []
}

export const fetchTodos = createAsyncThunk(
    'todos/fetchStatus',
    async (): Promise<Array<TodoType>> => {
        const todos = await todoApi.getTodos();
        return todos;
    }
)

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            const lastTodoId = getMaxId(state.todosList, state.todosArchive);
            const newTodoWithId = {id: lastTodoId + 1, title: action.payload, completed: false};
            const newTodoWithStartTime = todoStartTimer(newTodoWithId);
            return {
                ...state,
                todosList: [...state.todosList, newTodoWithStartTime]
            };
        },
        removeTodo: (state, action: PayloadAction<number>) => {
            return {
                ...state,
                todosList: [...state.todosList.filter(todo => todo.id !== action.payload)],
                todosArchive: [...state.todosArchive, ...state.todosList.filter(todo => todo.id === action.payload)]
            };
        },
        restoreTodo: (state, action: PayloadAction<number>) => {
            const todoToRestore = state.todosArchive.find(todo => todo.id === action.payload);
            const updatedTodo = finishedToInProgress(todoToRestore);
            return {
                ...state,
                todosList: [...state.todosList, {...updatedTodo, completed: false}],
                todosArchive: [...state.todosArchive.filter(todo => todo.id !== action.payload)]
            }
        },
        toggleTodo: (state, action: PayloadAction<number>) => {
            return {
                ...state,
                todosList: [...state.todosList.map(todo => {
                        if (todo.id === action.payload) {
                            if (todo.completed) {
                                return {...finishedToInProgress(todo), completed: false};
                            }
                            if (!todo.completed) {
                                return {...inProgressToCompleted(todo), completed: true};
                            }
                        }
                        return todo;
                    }
                )]
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.pending,
                (state) => {
                    return {...state, isFetching: true}
                })
            .addCase(fetchTodos.fulfilled, (state, action: PayloadAction<Array<TodoType>>) => {
                return {
                    ...state,
                    isFetching: false,
                    todosList: [...action.payload],
                }
            })
            .addCase(fetchTodos.rejected, (state) => {
                return {...state}
            })
    }
})

export const {addTodo, removeTodo, toggleTodo, restoreTodo} = todosSlice.actions

export default todosSlice.reducer
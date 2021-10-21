import {createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit'
import {todoApi} from "../../services/serviceApi";
import {TodoType} from "../../types/Todo";

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
            const lastTodoId = state.todosList[state.todosList.length - 1].id || 0;
            const newTodoWithId = {id: lastTodoId + 1, title: action.payload, completed: false}
            return {
                ...state,
                todosList: [...state.todosList, newTodoWithId]
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
            return {
                ...state,
                todosList: [...state.todosList, ...state.todosArchive.filter(todo => todo.id === action.payload)],
                todosArchive: [...state.todosArchive.filter(todo => todo.id !== action.payload)]
            }
        },
        toggleTodo: (state, action: PayloadAction<number>) => {
            return {
                ...state,
                todosList: [...state.todosList.map(todo => {
                    if (todo.id === action.payload) {
                        return {...todo, completed: !todo.completed}
                    }
                    return todo;
                })]
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
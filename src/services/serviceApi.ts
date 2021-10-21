import axios from 'axios';
import {RawTodo} from '../types/Todo';
import {rawTodosMapping} from "../helpers/rawTodosFormating";

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
});

export const todoApi = {
        getTodos() {
            return instance.get<RawTodo[]>('todos?_limit=10').then((response) => {
                const {data} = response;
                const mappedData = rawTodosMapping(data);
                return mappedData;
            });
        },
    }
;

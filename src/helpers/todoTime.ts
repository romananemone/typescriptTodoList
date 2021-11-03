import {RawTodo, TodoInProgress, TodoCompleted} from "../types/Todo";
const moment = require("moment");
require("moment-duration-format");


export const todoStartTimer = (todo: RawTodo): TodoInProgress => {
    return {...todo, startDate: moment().format('lll')}
};

export const inProgressToCompleted = (todo: any): TodoCompleted => {
    const startDateRaw = moment(todo.startDate);
    const endDateRaw = moment();
    const timeDifference = endDateRaw.diff(startDateRaw);
    const timeSpent = moment.duration(timeDifference).format("d [days], h [hours], m [minutes]");
    const endDateFormated = endDateRaw.format('lll');

    const updatedTodo = {...todo, endDate: endDateFormated, timeSpent: timeSpent};
    return updatedTodo;
};

export const finishedToInProgress = (todo: any): TodoInProgress => {
    const {startDate, endDate, timeSpent, ...restTodoFields} = todo;
    const updatedTodo = todoStartTimer(restTodoFields);
    return updatedTodo;
}
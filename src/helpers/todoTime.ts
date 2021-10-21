import {RawTodo, TodoInProgress, TodoCompleted} from "../types/Todo";

const moment = require("moment");
require("moment-duration-format");


export const todoStartTimer = (todo: RawTodo): TodoInProgress => {
    // const date1 = moment('Oct 21, 2021 12:20 PM');
    // const date2 = moment().format('lll');
    // const currentDate = moment(date2);
    // // console.log(date2, currentDate)
    // const diff = currentDate.diff(date1);
    // const dur = moment.duration(diff,).format("d [days], h [hours], m [minutes]");
    // console.log(dur)
    return {...todo, startDate: moment().format('lll')}
};

export const todoFinishTimer = (todo: TodoInProgress): TodoCompleted => {
    const startDateRaw = moment(todo.startDate);
    const endDateRaw = moment();
    const timeDifference = endDateRaw.diff(startDateRaw);
    const timeSpent = moment.duration(timeDifference).format("d [days], h [hours], m [minutes]");
    const endDateFormated = endDateRaw.format('lll');
    return {...todo, endDate: endDateFormated, timeSpent: timeSpent}
};
export type RawTodo = {
    userId?: number;
    id: number;
    title: string;
    completed: boolean;
};

export type TodoType = {
    id: number;
    title: string;
    completed: boolean;
    startDate?: string;
    endDate?: string;
    timeSpent?: string;
};

export type TodoInProgress = {
    id: number;
    title: string;
    completed: boolean;
    startDate: string;
}

export type TodoCompleted = {
    id: number;
    title: string;
    completed: boolean;
    startDate: string;
    endDate: string;
    timeSpent: string;
}

export type ArchivedTodo = {
    id: number;
    title: string;
    completed: string;
    restore: number;
}

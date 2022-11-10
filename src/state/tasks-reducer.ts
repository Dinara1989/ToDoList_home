import { TasksStateType } from "../App";
import {v1} from "uuid";
import {AddTodolistActionType} from "./todolists-reducer";

export type RemoveTaskActionType = {
    type: 'REMOVE-TASK',
    todolistId: string,
    taskId: string
}
export type AddTaskType = {
    type: 'ADD-TASK',
    todolistId: string,
    title: string
}
export type ChangeTaskStatusType = {
    type: 'CHANGE-TASK-STATUS',
    taskId: string
    todolistId: string
    isDone: boolean
}
export type ChangeTaskTitleActionType = {
    type: 'CHANGE-TASK-TITLE',
    taskId: string
    title: string
    todolistId: string
}

export type ActionsType =
    RemoveTaskActionType
    | AddTaskType
    | ChangeTaskStatusType
    | ChangeTaskTitleActionType
    | AddTodolistActionType;

export const tasksReducer = (state: TasksStateType, action: ActionsType): TasksStateType => {
    switch (action.type) {

        case 'REMOVE-TASK': {
            const stateCopy = {...state};
            const tasks = state[action.todolistId];
            const filteredTasks = tasks.filter((t: { id: string; }) => t.id !== action.taskId)
            stateCopy[action.todolistId] = filteredTasks;
            return stateCopy;
        }
        case 'ADD-TASK': {
            const stateCopy = {...state};
            const tasks = state[action.todolistId];
            const newTask = {id: v1(), title: action.title, isDone:false}
            const newTasks = [newTask, ...tasks]
            stateCopy[action.todolistId] = newTasks;
            return stateCopy
        }
        case 'CHANGE-TASK-STATUS': {
        return {
                ...state,
                [action.todolistId]: state[action.todolistId]
                .map(t => t.id === action.taskId ? {...t, isDone: !t.isDone} : t)
            }
        }
        case 'CHANGE-TASK-TITLE':{
            return {
                ...state,
                [action.todolistId]: state[action.todolistId]
                    .map(t => t.id === action.taskId ? {...t, title: action.title} : t)
            }
        }
        case "ADD-TODOLIST": {
            const stateCopy = {...state};

            stateCopy[action.todolistId] = [];

            return stateCopy;
        }
        default:
            throw new Error("Error");

    }

}

export const removeTaskAC = (taskId: string, todolistId: string): RemoveTaskActionType => {
    return { type: 'REMOVE-TASK', todolistId, taskId }
}
export const addTaskAC = (title: string, todolistId: string,): AddTaskType => {
    return {type: 'ADD-TASK', title, todolistId}
}
export const changeTaskStatusAC = (taskId: string, isDone: boolean, todolistId: string): ChangeTaskStatusType => {
    return {type: 'CHANGE-TASK-STATUS', taskId, isDone, todolistId}
}
export const changeTaskTitleAC = (taskId: string, title: string, todolistId: string): ChangeTaskTitleActionType => {
    return {type: 'CHANGE-TASK-TITLE', taskId, title, todolistId}
}

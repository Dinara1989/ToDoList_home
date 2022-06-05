import React, {useState} from "react";
import {FilterValueType} from "./App";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}
type PropsType = {
    title:string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValueType) => void
    addTask: (title: string) => void
}

export function Todolist(props: PropsType) {
    const [newTaskTitle, setNewTaskTitle] = useState("");

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={newTaskTitle} onChange={ (e) => {
                    setNewTaskTitle(e.currentTarget.value)
                }} />
                <button onClick={ () => { props.addTask(newTaskTitle) }}>+</button>
            </div>
            <ul>
                {
                    props.tasks.map(t => <li key={t.id}>
                            <input type="checkbox" checked={t.isDone}/>
                            <span>{t.title}</span>
                            <button onClick={ (e) => { props.removeTask(t.id) } }>x</button>
                        </li>
                    )
                }
            </ul>
            <div>
                <button onClick={ (e) => {props.changeFilter("all") } }>All</button>
                <button onClick={ (e) => {props.changeFilter("active") } }>Active</button>
                <button onClick={ (e) => {props.changeFilter("completed") } }>Completed</button>
            </div>
        </div>
    )
}
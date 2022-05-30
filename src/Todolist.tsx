import React from "react";
import {FilterValueType} from "./App";

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}
type PropsType = {
    title:string
    tasks: Array<TaskType>
    removeTask: (taskId: number) => void
    changeFilter: (value: FilterValueType) => void
}

export function Todolist(props: PropsType) {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input type="text"/>
                <button>+</button>
            </div>
            <ul>
                {/*//map-это метод массива, который на основе каждого элемента создает какой-то другой элемент*/}
                {
                    //Длинное написание
                    // props.tasks.map((t) => {
                    //     return <li><input type="checkbox" checked={t.isDone}/>
                    //         <span>{t.title}</span>
                    //     </li>
                    // })
                    //Короткое написание:
                    props.tasks.map(t => <li><input type="checkbox" checked={t.isDone}/>
                            <span>{t.title}</span>
                            <button onClick={ () => { props.removeTask(t.id) } }>x</button>
                        </li>
                    )
                }
            </ul>
            <div>
                <button onClick={ () => {props.changeFilter("all") } }>All</button>
                <button onClick={ () => {props.changeFilter("active") } }>Active</button>
                <button onClick={ () => {props.changeFilter("completed") } }>Completed</button>
            </div>
        </div>
    )
}
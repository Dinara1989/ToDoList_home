import React from 'react';

type TaskType = {
    id: number
    title: string
    isDone: boolean
}
type listPropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask:Function
}

export const Todolist = (props:listPropsType) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input type="text"/>
                <button>+</button>
            </div>
            <ul>
                {
                    props.tasks.map( (t) => {
                        return <li><input type="checkbox" checked={t.isDone}/>
                            <span>{t.title}</span>
                            <button onClick={ ()=> {props.removeTask(t.id)}}>x</button>
                        </li>})
                }
            </ul>
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
        </div>
    );
};


import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist";

// Счетчик
// export function Counter() {
//     console.log("Counter rendered")
//     let arr = useState(5);
//     let data = arr[0]
//     let setData = arr[1]
//
//     return <div onClick={ () => { setData(data+1)} }>{data}</div>
// }

export type FilterValueType = 'all' | 'completed' | 'active';

function App() {

    let [tasks, setTasks] =  useState<Array<TaskType>>([
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false },
        { id: 4, title: "Redux", isDone: true }
    ]);
    let [filter, setFilter] = useState<FilterValueType>('all');

    function removeTask(id: number) {
        let filteredTasks = tasks = tasks.filter( t => t.id !== id)
        setTasks(filteredTasks);
    }
    function changeFilter(value: FilterValueType) {
        setFilter(value);
    }

    let tasksForTodolist = tasks;
    if (filter === "completed") {
        tasksForTodolist = tasks.filter(t => t.isDone === true);
    }
    if (filter === "active") {
        tasksForTodolist = tasks.filter(t => t.isDone === false);
    }

    return (
        <div className="App">
            <Todolist title = "What to learn"
                      tasks={tasksForTodolist}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;


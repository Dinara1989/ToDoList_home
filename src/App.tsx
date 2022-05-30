import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";

// Счетчик
// export function Counter() {
//     console.log("Counter rendered")
//     let arr = useState(5);
//     let data = arr[0]
//     let setData = arr[1]
//
//     return <div onClick={ () => { setData(data+1)} }>{data}</div>
// }
function App() {

    let initTasks = [
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false },
        { id: 4, title: "Redux", isDone: true }
    ]
    // const tasks2 = [
    //     { id: 1, title: "Harry Potter", isDone: true },
    //     { id: 2, title: "Pride and Prejudice", isDone: false },
    //     { id: 3, title: "Ulysses", isDone: false }
    // ]


    let arr =  useState(initTasks);
    let tasks = arr[0];
    let setTasks = arr[1];

    function removeTask(id: number) {
        let filteredTasks = tasks = tasks.filter( t => t.id !== id)
        setTasks(filteredTasks);
    }

    return (
        <div className="App">
            <Todolist title = "What to learn"
                      tasks={tasks}
                      removeTask={removeTask}
            />
            {/*<Todolist title = "Books" tasks={tasks2}/>*/}
        </div>
    );
}

export default App;


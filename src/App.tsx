import React from 'react';
import './App.css';
import {Todolist} from "./components/Todolist";

const App = () => {

    let tasks1 = [
        { id: 1, title: "CSS & HTML", isDone: true},
        { id: 2, title: "JS", isDone: false},
        { id: 3, title: "REACT", isDone: true}
    ]
    let tasks2 = [
        { id: 1, title: "Shower", isDone: true},
        { id: 2, title: "Shopping", isDone: false},
        { id: 3, title: "Laundry", isDone: true}
    ]

    return (
        <div>
            <Todolist title={"What to read"} tasks={tasks1}/>
            <Todolist title={"What to do"} tasks={tasks2}/>
            {/*<Todolist title={"What to watch"}/>*/}
        </div>
    );
};

export default App;
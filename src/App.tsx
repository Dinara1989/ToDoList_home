import React from 'react';
import './App.css';
import {Todolist} from "./components/Todolist";

const App = () => {

    let tasks1 = [
        { id: 1, title: "CSS & HTML", isDone: true},
        { id: 2, title: "JS", isDone: false},
        { id: 3, title: "REACT", isDone: true}
    ]

    return (
        <div>
            <Todolist title={"What to read"}/>
            <Todolist title={"What to do"}/>
            <Todolist title={"What to watch"}/>
        </div>
    );
};

export default App;
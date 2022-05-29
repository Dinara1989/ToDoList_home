import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";

const tasks1 = [
    { id: 1, title: "HTML&CSS", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "ReactJS", isDone: false }
]
const tasks2 = [
    { id: 1, title: "Harry Potter", isDone: true },
    { id: 2, title: "Pride and Prejudice", isDone: false },
    { id: 3, title: "Uliss", isDone: false }
]

function App() {
    return (
        <div className="App">
            <Todolist title = "What to learn" tasks={tasks1}/>
            <Todolist title = "Books" tasks={tasks2}/>
        </div>
    );
}

export default App;

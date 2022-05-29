import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";

function App() {

    let tasks = [
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
    //Оствновилась на UseState и Counter
        useState(tasks, removeTask());


    function removeTask(id: number) {
        tasks = tasks.filter( t => t.id !== id)
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

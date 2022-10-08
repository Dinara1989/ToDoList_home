import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./components/Todolist";
import Counter from "./components/counter/Counter";

export type FilterValuesType = "all" | "active" | "completed";

const App = () => {

    let [tasks, setTasks] = useState([
        { id: 1, title: "CSS & HTML", isDone: true},
        { id: 2, title: "JS", isDone: false},
        { id: 3, title: "REACT", isDone: true},
        { id: 4, title: "JS", isDone: false},
        { id: 5, title: "REACT", isDone: true}
    ]);
    let [filter,setFilter] = useState<FilterValuesType>("active")

    function removeTask(id: number) {
        let filteredTasks = tasks.filter( t => t.id !== id)
        setTasks(filteredTasks);
    }
    let tasksForTodolist = tasks;


    return (
        <div>
            <Todolist title={"What to learn"}
                      tasks={tasksForTodolist}
                      removeTask={removeTask}
            />
            {/*<Todolist title={"What to do"} tasks={tasks}/>*/}
            {/*<Todolist title={"What to watch"}/>*/}
            <Counter/>
        </div>
    );
};

export default App;
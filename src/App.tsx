import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./components/Todolist";
import Counter from "./components/counter/Counter";
import {v1} from "uuid";

export type FilterValuesType = "all" | "active" | "completed";

const App = () => {

    let [tasks, setTasks] = useState([
        { id: v1(), title: "CSS & HTML", isDone: true},
        { id: v1(), title: "JS", isDone: false},
        { id: v1(), title: "REACT", isDone: true},
        { id: v1(), title: "JS", isDone: false},
        { id: v1(), title: "REACT", isDone: true}
    ]);
    let [filter,setFilter] = useState<FilterValuesType>("all")

    function removeTask(id: string) {
        let filteredTasks = tasks.filter( t => t.id !== id)
        setTasks(filteredTasks);
    }
    function addTask(title:string) {
        let newTask = {
            id: v1(),
            title: title,
            isDone: false
        };
        let newTasks = [newTask, ...tasks];
        setTasks(newTasks);
    }

    let tasksForTodolist = tasks;

    if (filter === "active") {
        tasksForTodolist = tasks.filter(t => t.isDone === false);
    }
    if (filter === "completed") {
        tasksForTodolist = tasks.filter(t => t.isDone === true);
    }

    function changeFilter(value: FilterValuesType) {
        setFilter(value);
    }


    return (
        <div>
            <Todolist title={"What to learn"}
                      tasks={tasksForTodolist}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
                      addTask={addTask}
            />
            {/*<Todolist title={"What to do"} tasks={tasks}/>*/}
            {/*<Todolist title={"What to watch"}/>*/}
            <Counter/>
        </div>
    );
};

export default App;
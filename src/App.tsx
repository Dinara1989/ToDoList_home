import React, {useState} from 'react';
import './App.css';
import {v1} from 'uuid';
import {TaskType, Todolist} from "./Todolist";
import {AddItemForm} from "./AddItemForm";

export type FilterValuesType = "all" | "active" | "completed";
type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}

type TaskStateType = {
    [key: string]: Array<TaskType>
}

function App() {

    function removeTask(id: string, todolistID: string) {
        let tasks = tasksObj[todolistID];
        let filteredTasks = tasks.filter(t => t.id != id);
        tasksObj[todolistID] = filteredTasks;
        setTasks({...tasksObj});
        //or
        // let filteredTasks = {...tasks,[ID_td]:tasks[ID_td].filter(t => t.id !== id)}
        // setTasks(filteredTasks);
    }

    function addTask(title: string, todolistID: string) {
        let task = {id: v1(), title: title, isDone: false};
        let tasks = tasksObj[todolistID];
        let newTasks = [task, ...tasks];
        tasksObj[todolistID] = newTasks;
        setTasks({...tasksObj});
        // let task = {id: v1(), title: title, isDone: false};
        // let newTasks = [task, ...tasks];
        // setTasks(newTasks);
    }

    function changeStatus(taskId: string, isDone: boolean, todolistID: string) {
        let tasks = tasksObj[todolistID];
        let task = tasks.find(t => t.id === taskId);
        if (task) {
            task.isDone = isDone;
            setTasks({...tasksObj});
        }
    }

    function changeFilter(value: FilterValuesType, todolistID: string) {
        let todolist = todolists.find(tl => tl.id === todolistID);
        if(todolist) {
            todolist.filter = value;
            setTodolists([...todolists])
        }
    }
    //or
    // function changeFilter(value: FilterValuesType) {
    //     setFilter(value);
    // }

    let todolistID1 = v1();
    let todolistID2 = v1();

    let [todolists, setTodolists] = useState <Array<TodolistType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'}
    ])

    let removeTodolist = (todolistsID: string) => {
        let filteredTodolist = todolists.filter(tl => tl.id !== todolistsID)
        setTodolists(filteredTodolist);
        delete tasksObj[todolistsID];
        setTasks({...tasksObj});
    }

    let [tasksObj, setTasks] = useState<TaskStateType>({
        [todolistID1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistID2]:[
            {id: v1(), title: "Milk", isDone: true},
            {id: v1(), title: "Bread", isDone: true},
            {id: v1(), title: "Honey", isDone: false},
            {id: v1(), title: "Cola", isDone: false},
            {id: v1(), title: "Water", isDone: false},
        ],
    });

    function addTodolist(title:string) {
        let todolist: TodolistType = {
            id: v1(),
            filter: 'all',
            title: title
        };
        setTodolists([todolist, ...todolists]);
        setTasks({
            ...tasksObj,
            [todolist.id]:[]
        })
    }

    return (
        <div className="App">
            <AddItemForm addItem={addTodolist}/>
            {
             todolists.map( (tl)=> {

                 let tasksForTodolist = tasksObj[tl.id];

                 if (tl.filter === "active") {
                     tasksForTodolist = tasksForTodolist.filter(t => t.isDone === false);
                 }
                 if (tl.filter === "completed") {
                     tasksForTodolist = tasksForTodolist.filter(t => t.isDone === true);
                 }

                 return <Todolist
                     key={tl.id}
                     id={tl.id}
                     title={tl.title}
                     tasks={tasksForTodolist}
                     removeTask={removeTask}
                     changeFilter={changeFilter}
                     addTask={addTask}
                     changeTaskStatus={changeStatus}
                     filter={tl.filter}
                     removeTodolist={removeTodolist}
                 />
             })
            }
        </div>
    );
}

export default App;

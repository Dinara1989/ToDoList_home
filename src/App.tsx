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


// import ReactDOM from 'react-dom'
//
// export const VideoHeader = (props: {videoName: string}) => {
//     return <div>
//         😀 {props.videoName}
//     </div>
// }
// export const VideoContent = (props: {videoContent: string}) => {
//     return <div>
//         📼 <a href={props.videoContent}>{props.videoContent}</a>
//     </div>
// }
// export const VideoDescription = (props: {videoDescription: string}) => {
//     return <div>
//         📑 {props.videoDescription}
//     </div>
// }
//
// export const YoutubeVideo = (props: any) => {
//     return <div>
//         <VideoHeader xxx />
//         <VideoContent yyy />
//         <VideoDescription zzz />
//     </div>
// }
//
// export const App = () => {
//     const video = {
//         title: 'Samurai way',
//         link: 'https://www.youtube.com/watch?v=gb7gMluAeao&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8',
//         description: 'Best free react-course'
//     }
//
//     return <YoutubeVideo video={video} />
// }
//
// ReactDOM.render(<App />,
//     document.getElementById('root')
// );
//
// import ReactDOM from 'react-dom'
//
// const Son = (props: any) => {
//     return <div>
//         I am son. My name is {props.name}
//     </div>
// }
//
//
// const Father = (props: any) => {
//     return <div>
//         I am father. My name is {props.name}
//         <Son name={props.sonName} />
//     </div>
// }
//
// const Granny = (props: any) => {
//     return <div>
//         I am granny. My name is {props.name}
//         <Father name={props.fatherName} sonName={props.sonName} />
//     </div>
// }
//
// export const App = () => {
//     return <div>
//         <Granny XXX={'Бабуля'} YYY={'Батя'} ZZZ={'Сын'}/>
//     </div>
// }
//
// ReactDOM.render(<App/>,
//     document.getElementById('root')
// )
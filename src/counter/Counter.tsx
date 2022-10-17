import React, {useState} from 'react';
import s from './Counter.module.css'

const Counter = () => {
    let[arr, setArr] = useState(1)
    const plusHandler=()=>{
        setArr(++arr)
    }
    const zeroHandler=()=>{
        setArr(arr=0)
    }
    const minusHandler=()=>{
        setArr(--arr)
    }
    return (
        <div className={s.counter}>
            <h1 className={s.number}>{arr}</h1>
            <button className={s.button} onClick={plusHandler}>+</button>
            <button className={s.button} onClick={zeroHandler}>0</button>
            <button className={s.button} onClick={minusHandler}>-</button>
        </div>
    );
};

export default Counter;
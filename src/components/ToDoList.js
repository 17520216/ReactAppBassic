import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const ToDoList = () => {


    const [todo, setTodo] = useState([{
        title: "HOMEWORK",
        status: false,
    }]);


    const [valueInput, setValueInput] = useState("");



    const handleChange = (ev) => {
        setValueInput(ev.target.value);
    };


    const handleSubmit = () => {

        const newTodo = [...todo, {
            title: valueInput,
            status: false,
        }]
        console.log('newTodo---->', newTodo);
        setTodo(newTodo);
        setValueInput("")
    };


    const checkDone = (index) => {
        // console.log('index---->', index);

        const newTodo = [...todo];
        newTodo[index].status = !newTodo[index].status;
        setTodo(newTodo);

    }

    return (
        <div className='todo p-5'>
            {/* <div className="dashboard text-3xl">
                {
                    todo.map((item, index) => <div key={index} className="flex">
                        <p>{item.title}</p>
                        <div className='mx-[20px] flex'>status: <p>{item.status ? <p className="badge badge-primary">Chúc mừng bạn đã hoàn thành nhiệm vụ</p> : <p className="badge badge-secondary">Vui lòng hoàn thành nhiêm vụ</p>}</p></div>
                        <button className={`btn ${item.status ? "btn-error" : "btn-success"}`} onClick={() => checkDone(index)}>{item.status ? "UNDONE" : "DONE"}</button>
                    </div>)
                }
            </div>
            <input className='my-[20px] border-black border-solid flex border-[2px] input' type="text" name="" id="" value={valueInput}
                onChange={handleChange}
            />
            <button onClick={handleSubmit} className='btn mt-3'>add</button> */}
        </div>
    )
}

export default ToDoList
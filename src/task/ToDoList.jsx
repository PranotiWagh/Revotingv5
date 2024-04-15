import React, { Fragment, useState } from 'react';
import axios from 'axios';

const ToDoList = () => {
    let [input, setInput] = useState("");
    let [task, setTask] = useState([]);

    let addtask = (e) => {
        e.preventDefault();
        if (input === "") {
            alert("Enter Something");
        } else {
            setTask([...task, input]);
        }
    };

    console.log(task);
    let handleDelete = (key) => {
        console.log(key);
        let updateArray = task.filter((value, index) => key !== index)
        setTask(updateArray);
    };

    return (
        <>
            <h2>TO DO LIST</h2>
            <form>
                <input 
                    type="text"
                    name="input"
                    placeholder="add task"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button onClick={addtask}>+</button>
            </form>
            <section>
                {task.map((value, index) => (
                    <Fragment key={index}>
                        <p>{value}</p>
                        <div onClick={() => handleDelete(index)}>MdDelete</div>
                    </Fragment>
                ))}
            </section>
        </>
    );
};

export default ToDoList;

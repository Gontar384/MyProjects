import styles from './ToDoList.module.css'
import React, {useState} from 'react'

function ToDoList() {

    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

    function handleSetTask(event) {
        setTask(event.target.value);
    }

    function handleAddTask() {
        if (task.trim() !== "") {
            setTasks(t => [...t, task]);
            setTask("");
        }
    }

    function handleRemoveTask(index) {
        setTasks(tasks.filter((_, i) => i !== index));
    }

    function handleMoveTask(index, i) {
        if (!(index === 0 && i === 1) && !(index === tasks.length - 1 && i === -1)) {
            const movingTask = tasks.splice(index, 1)[0];
            tasks.splice(index - i, 0, movingTask);
            setTasks(t => [...t]);
        }
    }

    document.title = "ToDoList";

    return (
        <body className={styles.todolistBody}>
        <div className={styles.container}>
            <h1 className={styles.myH1}>To Do List</h1>
            <div className={styles.inputContainer}>
                <input className={styles.input} type="text" value={task}
                       onChange={handleSetTask} placeholder="Enter a task..."/>
                <button className={styles.submitButton} onClick={handleAddTask}>Add</button>
            </div>
            <ul className={styles.list}>
                {tasks.map((task, index) =>
                    <li key={index}>
                        <span className={styles.text}>{task}</span>
                        <button className={styles.deleteButton}
                                onClick={() =>
                                    handleRemoveTask(index)
                                }>Delete
                        </button>
                        <button className={styles.moveButton} onClick={() =>
                            handleMoveTask(index, 1)}>☝️
                        </button>
                        <button className={styles.moveButton} onClick={() =>
                            handleMoveTask(index, -1)}>👇
                        </button>
                    </li>
                )}
            </ul>
        </div>
        </body>
    );

}

export default ToDoList;
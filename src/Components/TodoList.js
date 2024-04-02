import { useMemo, useState } from "react";

const TodoList = ()=> {
    const [tasks, setTasks] = useState([]);
    const [ newTasks, setNewTasks] = useState('');

    const toggleAddTaskButton = useMemo(
        ()=> (
            newTasks ==='' ? true : false
        ), [newTasks]
    );
    
    
    const addNewTasks = () => {
        if(newTasks.trim() !== '') {
            setTasks([...tasks, newTasks]);
            setNewTasks('');
        }
    };
    const removeTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    }
    return (
        <div className="todo-list-container">
            <h1>Todo App</h1>
            <div className="input-container">
                <input type="text" value={newTasks} onChange={(e)=>  setNewTasks(e.target.value)}></input>
                <button className="add-task-button" disabled={toggleAddTaskButton} onClick={addNewTasks}>Add Task</button>
            </div>
            <ul>
                {tasks.map((task,index) => (
                    <li key={index}>
                        {task}
                        <button className="remove-button" onClick={()=>removeTask(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    )
};
export default TodoList;
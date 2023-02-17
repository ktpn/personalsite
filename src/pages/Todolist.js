
import { useState } from "react";
import { Task } from "../Task";

export const Todolist = () => {
    const [todoList, setTodoList] = useState([]);
    const [newTask, setNewTask] = useState("");

    const handleChange = (event) => {
    setNewTask(event.target.value);
    };

    const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      done: false,
    }
    setTodoList([...todoList, task]);
    };

  const deleteTask = (id) => {
    const newTodoList = todoList.filter((task) => {
      return task.id !== id;
    })
    setTodoList(newTodoList)
  }
  
  const doneTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return {...task, done: true};
        } else {
          return task;
        };
      })
    );
  }

  const notDoneTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return {...task, done: false};
        } else {
          return task;
        }
      })
    );
  };

  const handleKeyAddTask = (event) => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      done: false,
    }
    if (event.key === "Enter") {
        setTodoList([...todoList, task]);
    }
  }

  return (
    <div className="App">
      <div className="addTask">
        <h1 className="title">To-Do List</h1>
        <input onChange={handleChange} onKeyDown={handleKeyAddTask} />
        <button className="graybutton" onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task) => {
          return (
            <Task 
              taskName={task.taskName}
              id={task.id}
              deleteTask={deleteTask}
              done={task.done}
              doneTask={doneTask}
              notDoneTask={notDoneTask}

              />
          );  
        })}
      </div>
    </div>
  )
    
};
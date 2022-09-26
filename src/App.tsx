import React from 'react';
import { useState } from "react";
import InputField from './components/InputField';
import TaskList from './components/TaskList';
import { Task } from './interfaces/TaskInterface';
import './App.css';


const App: React.FC = () => {

  // Usando TS para determinar el tipo de dato de un estado
  const [ task, setTask ] = useState<string>("");

  const [ allTask, setAllTask ] = useState<Task[]>([]);

  const addTask = (event: React.FormEvent) => { //Type sacado de Stack Overflow para el event xD
    event.preventDefault();

    if (task) {
      setAllTask([
        ...allTask,
        {
          id: Date.now(), //para generar un id random
          task,
          completed: false
        }
      ]);

      setTask("");
    }
  }

  return (
    <div className="App">

      <h1 className='header__title'>Planificador de Tareas</h1>

      <InputField task={task}
                  setTask={setTask}
                  addTask={addTask}/>

      <TaskList allTask={allTask}
                setAllTask={setAllTask}/>
                  
    </div>
  );
}

export default App;

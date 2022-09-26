import React, { useState, useRef, useEffect } from 'react'
import { Task } from '../interfaces/TaskInterface';
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "./SingleTask.css";

interface SingleTaskProps {
  task: Task;
  allTask: Task[];
  setAllTask: React.Dispatch<React.SetStateAction<Task[]>>;
}

const SingleTask = ({task, allTask, setAllTask}: SingleTaskProps) => {

  const [ edit, setEdit ] = useState<boolean>(false);
  const [ editTask, setEditTask ] = useState<string>(task.task);

  const handleTaskCompleted = (id: number) => {
    setAllTask( allTask.map( ( task ) => task.id === id ? 
                                        {...task, completed: !task.completed} : 
                                        task ) )
  }

  const handleDeleteTask = (id: number) => {
    setAllTask( allTask.filter( ( task ) => task.id !== id ) );
  }

  const handleEditTask = (event: React.FormEvent, id: number) => {
    event.preventDefault();

    setAllTask(allTask.map( ( task ) => ( 
      task.id === id ? 
      {...task, task: editTask} :
      task
    ) ) );

    setEdit(false);
  }

  //////////////////////////////////////////////////////////////

  // Para mantener el focus en el input, lol
  const editTextRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    editTextRef.current?.focus();
  }, [edit])
  
  //////////////////////////////////////////////////////////////

  return (
    <form action="" 
          className='task__card'
          onSubmit={(event) => handleEditTask(event, task.id)}>

      {
        edit ? (
          <input type="text" 
                 className='task-edit'
                 value={editTask}
                 onChange={(event) => setEditTask(event.target.value)}
                 ref={editTextRef}/>
        ) : 
          task.completed ? (
            <s className="task-text">
              {task.task}
            </s>
          ) : (
            <span className="task-text">
              {task.task}
            </span>
          )
      }

      <div>

        <span className="task-icon"
              onClick={() => { 
                if (!edit && !task.completed) {
                  setEdit(!edit);
                }
              }}>
          <AiFillEdit />
        </span>

        <span className="task-icon"
              onClick={() => handleDeleteTask(task.id)}>
          <AiFillDelete />
        </span>

        <span className="task-icon"
              onClick={() => handleTaskCompleted(task.id)}>
          <MdDone />
        </span>

      </div>

    </form>
  )
}

export default SingleTask
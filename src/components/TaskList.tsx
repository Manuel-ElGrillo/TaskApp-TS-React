import React from 'react'
import { Task } from '../interfaces/TaskInterface';
import SingleTask from "./SingleTask"
import "./TaskList.css";

interface TaskListProps {
  allTask: Task[];
  setAllTask: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskList = ({allTask, setAllTask}: TaskListProps) => {
  return (
    <div className='task-list'>

      {
        allTask.map( task => (
          <SingleTask key={task.id}
                      task={task}
                      allTask={allTask}
                      setAllTask={setAllTask}/>
        ))
      }

    </div>
  )
}

export default TaskList
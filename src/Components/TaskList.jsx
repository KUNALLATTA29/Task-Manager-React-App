import React from 'react'
import { useSelector } from 'react-redux'
import TaskItem from './TaskItem';

export default function TaskList() {
    const tasks = useSelector((state)=>state.tasks);
  return (
    <div className="flex flex-col space-y-2">
        {tasks.map((item)=>{
            return(
            <TaskItem key={item.id} task={item}/>
        )})}
    </div>
  )
}

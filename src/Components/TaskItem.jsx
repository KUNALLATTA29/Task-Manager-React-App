import React from 'react'
import { useDispatch } from 'react-redux'
import { removeTask, updateTask } from '../Redux/cartSlice'


export default function TaskItem({task}) {
    const dispatch = useDispatch();

    const handleDelete=()=>{
        dispatch(removeTask(task.id));
    }

    const handleUpdate = ()=>{
        const updatedTask = {...task, completed: !task.completed};
        dispatch(updateTask(updatedTask)) 
    }
  return (
    <div className={`flex justify-between items-center p-4 border border-gray-300 rounded-md mb-2 ${task.completed ? 'bg-green-100' : 'bg-white'}`}>
        <h3 className={`text-lg ${task.completed ? 'line-through text-gray-500' : ''}`}>{task.title}</h3>
        <button className={`mr-2 ${task.completed ? 'bg-gray-300' : 'bg-blue-500'} text-white rounded-md px-3 py-1 hover:bg-blue-600 transition duration-200`} onClick={handleUpdate}>Complete</button>
        <button className="bg-red-500 text-white rounded-md px-3 py-1 hover:bg-red-600 transition duration-200" onClick={handleDelete}>Delete</button>
    </div>
  )
}

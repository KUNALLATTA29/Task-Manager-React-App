import React, {useState}from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../Redux/cartSlice'


export default function AddTask() {
    const [taskTitle, setTaskTitle] = useState('')
    const dispatch = useDispatch();

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(taskTitle){
            dispatch(addTask({id: Date.now(), title: taskTitle, completed: false}))
            setTaskTitle('');
        }
    }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-2 mb-4">
        <input
        className="border border-gray-300 rounded-md p-2 flex-grow focus:outline-none focus:ring-2 focus:ring-blue-400"
        type='text'
        value={taskTitle}
        onChange={(e)=>setTaskTitle(e.target.value)}
        placeholder='Add a new Task'
        />
        <button className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 transition duration-200" type='submit'>Add Task</button>
    </form>
  )
}

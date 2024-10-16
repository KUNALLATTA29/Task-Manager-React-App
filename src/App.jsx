import React from 'react'

import TaskList from './Components/TaskList'
import AddTask from './Components/AddTask'
export default function App() {
  return (
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4 text-center">Task Manager</h1>
          <AddTask/>
          <TaskList/>
        </div>
  )
}

import { useState } from 'react'
import AddTask from './Components/AddTask';
import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import './index.css'
function App() {
  const [showAddTask,setShowAddTask]=useState(false)

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointments ',
      day: 'Feb 15th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting at School ',
      day: 'March 6th at 4:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Food Shopping ',
      day: 'April 12th at 1:30pm',
      reminder: false,
    }

  ])

  //Add Task
  const addTask=(task)=>{
    const id=Math.floor(Math.random()*10000+1)
    const newTask={id,...task}
    setTasks([...tasks,newTask])
  }

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => (
      task.id === id ? { ...task, reminder: !task.reminder } : task
    )))
  }
  return (
    <div className="container">
      <Header tittle="Task Tracker" onAdd={()=> setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ?
        (<Tasks tasks={tasks} onDelete={deleteTask} ontoggle={toggleReminder} />)
        :
        ('No Task To Show')}
    </div>
  );
}

export default App;

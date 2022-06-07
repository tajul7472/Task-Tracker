import {useState} from 'react'
import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import './index.css'
function App() {
  
  const [tasks,setTasks]=useState([
    {
        id:1,
        text:'Doctors Appointments ',
        day:'Feb 15th at 2:30pm',
        reminder:true,
    },
    {
        id:2,
        text:'Meeting at School ',
        day:'March 6th at 4:30pm',
        reminder:true,
    },
    {
        id:3,
        text:'Food Shopping ',
        day:'April 12th at 1:30pm',
        reminder:true,
    }

])
  return (
    <div className="container">
      <Header tittle="Task Tracker"/>
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;

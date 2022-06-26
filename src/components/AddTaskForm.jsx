
import { TextField, Button } from '@mui/material'
import React from 'react'
import { useState } from 'react'
const AddTaskForm = ({create}) => {
    const [task, setTask]=useState({title:'',body:'',})
    const AddNewTask=(e)=>{
      
      e.preventDefault()
      const NewTask={...task, id:Date.now()}
      create(NewTask)
      setTask({title:'',body:''})
    }
       
  return (
    <div>
        <form className='AddTaskForm' action="">
            <TextField  value={task.title} onChange={(e)=>setTask({...task, title: e.target.value})} type="text" placeholder='Локация'/> 
            <TextField  value={task.body} onChange={(e)=>setTask({...task, body: e.target.value})} type="text" placeholder='Задача' />
            <Button onClick={AddNewTask} >добавить</Button>
        </form>
    </div>
  )
}

export default AddTaskForm
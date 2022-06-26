import React from 'react'
import '../App.css'
 
import { Button } from '@mui/material';
import { Checkbox } from '@mui/material';
const Task = (props) => {
   
  return (
    <div className='task'>
        <div className='task_title'>
          <Checkbox value={props.completed} onClick={()=>props.completed(props.tasks)} className='checkbox'/>
          {props.number+'. '+props.task.title}
        </div>  
          
        <div className='task_txt'>{props.task.body}</div>
        <div>
          <Button></Button>
          
        </div>
           
    </div>
  )
}

export default Task
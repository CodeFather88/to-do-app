import React from 'react'
import '../App.css'
 
import { Button } from '@mui/material';
import { Checkbox } from '@mui/material';
const Test = (props) => {
   
  return (
    <div className='task'>
        <div className='task_title'>
           
          {props.item.name}
        </div>  
          
        <div className='task_txt'>{props.item.email}</div>
        <div>
          <Button variant='contained'>Удалить</Button>
          
        </div>
           
    </div>
  )
}

export default Test
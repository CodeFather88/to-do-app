import React from 'react'

import Task from './Task'
const TaskList = (props) => {
    
  function completed(){
    const copy=[...props.tasks]
    const current=copy.find(t=>t.id===props.tasks.task.id)
    current.isCompleted = !current.isCompleted
    props.setTasks(copy)
  }
  console.log(props.tasks)
  
    return (
    <div>
        {props.tasks.map((task,index)=>(//перебираем массив и ловим из него задачи по-отдельности, потом передаем в Task и отображаем в этом же листе
          
          <Task number={index+1} task={task} key ={task.id}/>
        ))}
        
    </div>
  )
}

export default TaskList
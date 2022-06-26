import React from 'react'
import SearchAppBar from './components/SearchAppBar'
import './App.css'
import { useState } from 'react'
import AddTaskForm from './components/AddTaskForm'
import TaskList from './components/TaskList'

const App = () => {
   
const [tasks, setTasks]=useState([
  {title: 'Домэ', body: 'dfgdfg', id: 1, isCompleted: false},
  {title: 'rrrrr', body: 'dfgdfg', id: 2, isCompleted: false},
  {title: 'ggggg', body: 'dfgdfg', id: 3, isCompleted: false},

]) //используем хук, задаем стандартное значение для tasks 




function createTask(NewTask){//разворачиваем массив имеющихся задач и добавляем в него новую
    setTasks([...tasks,NewTask])
}
  return (
    <div>
    <SearchAppBar/>
    <TaskList tasks={tasks} setTasks={setTasks}/>
    <AddTaskForm create={createTask //прокидываем пропсом функцию
    }/> 
      
      
           
    </div>
  )
}

export default App

import React from 'react'
import SearchAppBar from './components/SearchAppBar'
import './App.css'
import { useState } from 'react'
import AddTaskForm from './components/AddTaskForm'
import TaskList from './components/TaskList'
import Test from './components/Test'
import { Button } from '@mui/material'
import map from "lodash"
import { useEffect } from 'react'
import axios from "axios"

const App = () => {
   
  const [tasks, setTasks]=useState([
    {title: 'Домэ', body: 'dfgdfg', id: 1, isCompleted: false},
    {title: 'rrrrr', body: 'dfgdfg', id: 2, isCompleted: false},
    {title: 'ggggg', body: 'dfgdfg', id: 3, isCompleted: false},
  
  ])   
  function createTask(NewTask){//разворачиваем массив имеющихся задач и добавляем в него новую
    setTasks([...tasks,NewTask])
  }
  const [data,setData]=useState([])
  { useEffect(() => {
    const getUsers = async () => {
        const response=await axios.get("https://jsonplaceholder.typicode.com/users")
       const res=response.data
       console.log()
       setData(res)
       
    }
    getUsers();
  }
  );
}



return(

   <>
      <SearchAppBar/>
      {data.map(item => (<Test item = {item}/>))}
  </>
)
}

export default App

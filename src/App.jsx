import { useEffect } from 'react'
import './App.css'
import Card from './Component/Card/Card'
import { useState } from 'react'
function App() {
  const [useData ,setUseData]=useState([]);

  useEffect(()=>{
    fetch('Registration.json')
    .then(res => res.json())
    .then(data =>setUseData(data) )
  },[])
  return (
    <div className='bg-gray-200'>
      <div className='text-center text-4xl font-bold p-10 container mx-auto '>Program Foundation</div>
      <Card useData={useData}></Card>
    </div>
  )
}

export default App

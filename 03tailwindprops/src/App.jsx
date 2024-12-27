import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Vite with Tailwind</h1>
      <Card username='jack' post="Assist Engineer" />
      <Card username='luka' post="Senior Engineer"/>
      <Card username='shawn' post='react intern ' />
    </>
  )
}

export default App


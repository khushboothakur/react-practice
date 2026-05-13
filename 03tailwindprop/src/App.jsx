import { useState } from 'react'
import './App.css'
import Card from './components/card.jsx'

function App() {
  let myObj = {
    name: "Khushboo",
    age: 20
  }

  return (
    <>
      <div>
        <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">Tailwind Test</h1>
      </div>

      <Card userName="Khushboo" user={myObj} btnText="Click me"/>
      <Card userName="Jennie"  user={myObj}/>
    </>
  )
}

export default App
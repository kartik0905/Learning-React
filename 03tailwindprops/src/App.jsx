import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
      <h1 className="bg-amber-900 text-black p-4 rounded-xl">Tailwind test</h1>
      <Card username="Kartik Garg" btnText="Click me ->" />
      <Card username="Rakhi Garg" btnText="Visit me ->" />
    </>
  );
}

export default App

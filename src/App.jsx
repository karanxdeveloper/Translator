import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Translator from './component/Translator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Translator/>
    </>
  )
}

export default App

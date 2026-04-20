import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <h1>Hello, React!</h1>
        <h2>Welcome to your React application.</h2>
        <p>Meu primeiro aplicativo React!</p>
      </div>
    </>
  )
}

export default App

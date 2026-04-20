import { useState } from 'react'

// importando compoenente criado para ser utilizado no componente
import FirstComponent from './components/FirstComponent'
import TemplateExmpressions from './components/TemplateExpressions'
import EventComponent from './components/EventComponent'
import ChallengeComponent from './components/ChallengeComponent'

// importando as imagens para serem utilizadas no componente
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

// importando arquivo de estilo para ser utilizado no componente
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <h1>Hello, React!</h1>
        <h2>Welcome to your React application.</h2>
        <p>Meu primeiro aplicativo React!</p>
        <FirstComponent />
        <TemplateExmpressions />
        <EventComponent />
        <div className="card">
          <ChallengeComponent />
        </div>
      </div>
    </>
  )
}

export default App

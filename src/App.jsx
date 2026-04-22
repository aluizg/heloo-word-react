import { useState } from 'react'

// importando compoenente criado para ser utilizado no componente
import FirstComponent from './components/FirstComponent'
import TemplateExmpressions from './components/TemplateExpressions'
import EventComponent from './components/EventComponent'
import ChallengeComponent from './components/ChallengeComponent'
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import CondicionalRender from './components/CondicionalRender'
import ShowUserName from './components/ShowUserName'
import CardDetails from './components/CardDetails'
import Container from './components/Container'
import ExecuteFunction from './components/ExecuteFunction'
import Message from './components/Message'
import ChangeMsgState from './components/ChangeMsgState'

// importando as imagens para serem utilizadas no componente
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

// importando arquivo de estilo para ser utilizado no componente
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  const usuario = 'Maria';
  const objeto = {
    nome: 'Carlos',
    idade: 30
  }
  const [stateNome, setStateNome] = useState('Ana');
  const carros = [
    { id: 1, fabricante: 'Nissan', modelo: 'Sentra', ano: 2020 },
    { id: 2, fabricante: 'Kia', modelo: 'Sportage', ano: 2019 },
    { id: 3, fabricante: 'Renault', modelo: 'Captur', ano: 2018 },
    { id: 4, fabricante: 'Chevrolet', modelo: 'Blazer', ano: 2021 },
  ];
  const [message, setMessage] = useState('');
  const handleMessageChange = (msg) => {
    setMessage(msg);
  }

  function showMessage() {
    console.log('Evento do componente pai')
  }


  return (
    <>
      <div className="App">
        <div id='info'>
          <img src={reactLogo} className="logo react" alt="React logo" />
          <h1>Hello, React!</h1>
          <h2>Welcome to your React application.</h2>
          <p>Meu primeiro aplicativo React!</p>
        </div>
        <FirstComponent />
        <TemplateExmpressions />
        <EventComponent />
        <div id='challenge'>
          <ChallengeComponent />
        </div>
        <div id="card">
          <h2>Manage Data</h2>
          <ManageData />
        </div>
        <ListRender />
        <div id='condicional'>
          <CondicionalRender />
        </div>
      </div>
      <br />
      <div>
        {/* Componente utilizando props */}
        <ShowUserName name="João" usuario={usuario} objeto={objeto} stateNome={stateNome} />
        
        {/* Destructuring com props */}
        <CardDetails fabricante="Toyota" modelo="Corolla" ano={2020} />

        {/* Reaproveitando componentes */}
        <CardDetails fabricante="Honda" modelo="Civic" ano={2019} />
        <CardDetails fabricante="Ford" modelo="Focus" ano={2018} />
        {/* Reaproveitando componente em lista */}
        {carros.map((carro) => (
          <CardDetails
            key={carro.id}
            fabricante={carro.fabricante}
            modelo={carro.modelo}
            ano={carro.ano}
          />
        ))}
        {/* Omponentes filhos */}
        <Container>
          <p>Este é um componente filho dentro do Container.</p>
        </Container>
        <Container>
          <p>Outro componente filho dentro do Container.</p>
        </Container>
        {/* Componente que executa uma função */}
        <ExecuteFunction myFunction={showMessage} />
        {/* Componente que exibe uma mensagem state lift */}
        <Message msg={message} />
        <ChangeMsgState handleMessage={handleMessageChange} />
      </div>
    </>
  )
}

export default App

import { useState } from 'react'

const ManageData = () => {
    // Variaveis estaticas nao sao renderizadas em tempo de tela 
    let someData = 10

    // Variaveis de estado sao renderizadas em tempo de tela, entao o valor exibido muda quando a variavel de estado é atualizada
    const [myStateData, setMyStateData] = useState(99)

  return (
    <div>
        {/* Exibindo valor da variavel estatica */}
        <p>Valor: {someData}</p>
        {/* Modificando valor da variavel estatica */}
        <button onClick={() => {
            someData = 15
            /* Variaveis estaticas nao sao renderizadas em tempo de tela, entao o valor exibido nao muda */
            console.log('Valor da variavel someData: ', someData)
        }}>Mudar valor</button>
        <br />
        {/* Exibindo valor da variavel de estado */}
        <p>Valor do estado: {myStateData}</p>
        {/* Modificando valor da variavel de estado */}
        <button onClick={() => {
            setMyStateData(150)
            /* Variaveis de estado sao renderizadas em tempo de tela, entao o valor exibido muda quando a variavel de estado é atualizada */
            console.log('Valor da variavel myStateData: ', myStateData)
        }}>Mudar valor do estado</button>
    </div>
  )
}

export default ManageData
import { useState } from 'react'

const CondicionalRender = () => {
    const xCondicional = () => {
        return Date.now() % 2 === 0
    }

    // Utilizando o useState para armazenar o valor da função xCondicional
    const [x] = useState(xCondicional)

    return (
        <div>
            <h2>CondicionalRender</h2>
            {x ? <p>O número é par</p> : <p>O número é ímpar</p>}
            {x && <p> Numero par</p>}
            {!x && <p> Numero ímpar</p>}
        </div>
    )
}

export default CondicionalRender
import React from 'react'

const CardDetails = ({ fabricante, modelo, ano }) => {
  return (
    <div>
        <h2>CardDetails</h2>
        <ul>
            <li>Fabricante: {fabricante}</li>
            <li>Modelo: {modelo}</li>
            <li>Ano: {ano}</li>
        </ul>
    </div>
  )
}

export default CardDetails
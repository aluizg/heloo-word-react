import { useState } from 'react'

const ListRender = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 4, name: 'Item 4' }
  ])


  // Funcao para deletar um item aleatorio da lista. Atualiza o estado usando a funcao de atualizacao do useState, que recebe o estado anterior como argumento e retorna o novo estado. O filtro remove o item com o indice aleatorio da lista.
  const deleteItem = () => {
    const randomIndex = Math.floor(Math.random() * items.length)
    console.log('Deleting item at index:', randomIndex)
    setItems((prevItems) => {
      console.log('Previous items:', prevItems)
      return prevItems.filter((_, index) => index !== randomIndex)
    })  
  }

  return (
    <div id='next-steps'>ListRender
        <ul>
          {items.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
        <button onClick={deleteItem}>Delete Item</button>
    </div>
  )
}

export default ListRender
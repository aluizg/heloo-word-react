const ChangeMsgState = ({ handleMessage }) => {
    const saudacao = [
        'Olá, seja bem-vindo ao curso de React!',
        'Fique à vontade para explorar os componentes e aprender mais sobre React.',
        'Se tiver alguma dúvida, não hesite em perguntar!'
    ]
  return (
    <div>
        <button onClick={() => handleMessage(saudacao[0])}>Saudação 1</button>
        <button onClick={() => handleMessage(saudacao[1])}>Saudação 2</button>
        <button onClick={() => handleMessage(saudacao[2])}>Saudação 3</button>
    </div>
  )
}

export default ChangeMsgState
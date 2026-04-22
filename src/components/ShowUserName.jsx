// Componente para mostrar o nome do usuário
// O componente rcebe o nome do usuário como uma prop e o exibe na tela
const ShowUserName = (props) => {
  return (
    <div>
        ShowUserName
        <p>Valor declarado na chamada do componente: {props.name}</p>
        <p>Variavel declarada no objeto pai: {props.usuario}</p>
        <p>Variavel de objetos: {props.objeto.nome} - {props.objeto.idade}</p>
        <p>Variavel state: {props.stateNome}</p>
    </div>
  )
}

export default ShowUserName
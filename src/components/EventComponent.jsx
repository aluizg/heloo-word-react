const EventComponent = () => {
    // Criando uma função para ser chamada quando o botão for clicado
    // A funcao ira importar o evento de clique do mouse e exibir uma mensagem no console quando o botão for clicado.
    const handleClick = (e) => {
        console.log('Botão clicado!');
        console.log('Evento:', e);
    };

    // Criando uma função para renderizar uma mensagem com base em um valor booleano
    // A função renderMessage recebe um valor booleano e retorna um parágrafo indicando se o valor é verdadeiro ou falso. Essa função pode ser usada para renderizar condicionalmente conteúdo com base em estados ou props.
    const renderMessage = (value) => {
       if (value) {
        return <p>Valor verdadeiro</p>;
       }

       return <p>Valor falso</p>;
    }

    return (
        <div>
            <h1>Event Component</h1>
            {/* Ao incluir o nome da função sem os parênteses, estamos passando a referência da função para o evento onClick, em vez de executá-la imediatamente. Isso garante que a função seja chamada apenas quando o botão for clicado. */}
            <button onClick={handleClick}>Evento em funcao</button>
            <button onClick={() => console.log('Evento em linha')}>Evento em linha</button>
            <button onClick={(e) => {
                console.log('Evento em bloco de comando');
                console.log('Evento:', e);
            }}>Evento em bloco</button>
            <div>
                {renderMessage(true)}
                {renderMessage(false)}
            </div>
        </div>
    );
};

export default EventComponent;
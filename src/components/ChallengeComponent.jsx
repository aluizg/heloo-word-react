const ChallengeComponent = () => {
    const numeros = {
        valor1: 10,
        valor2: 20,
        valor3: 30,
        valor4: 40
    }

    const isPair = (instante) => {
        const divisor = 2;

        if (instante % divisor === 0) {
            console.log('O número é par');
            return true;
        }

        console.log('O número é ímpar');
        return false;
    }

    const somarValores = (e) => {
        if (isPair(e.timeStamp)) {
            console.log('Soma dos valores 2 e 4:', numeros.valor2 + numeros.valor4);
            return numeros.valor2 + numeros.valor4;
        }
        
        console.log('Soma dos valores 1 e 3:', numeros.valor1 + numeros.valor3);
        return numeros.valor1 + numeros.valor3;
    };

    return (
        <div>
            <h1>Challenge Component</h1>
            <p>Desafio: Criar um componente que some dois valores com base em um evento de clique, utilizando uma função para verificar se o valor do evento é par ou ímpar.</p>
            <p>Valores: {numeros.valor1}, {numeros.valor2}, {numeros.valor3}, {numeros.valor4}</p>
            <button onClick={somarValores}>Somar Valores</button>
        </div>
    );
}

export default ChallengeComponent;
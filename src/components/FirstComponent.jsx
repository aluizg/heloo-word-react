import MyComponent from './MyComponent';

// Criacao do primeiro component utilizando ca comvecao de nome com letra maiuscula e utilizando a funcao arrow function em Arrow Functions (funções de seta), introduzidas no ES6
const FirstComponent = () => {
    return (
        <div>
            <h1>Meu primeiro componente</h1>
            <p>Este é o meu primeiro componente em React!</p>
            <MyComponent />

        </div>
    );
}

export default FirstComponent;
const TemplateExpressions = () => {
    const name = 'Andre Luiz';
    const data = {
        age: 45,
        job: 'Developer'
    };

    return (
        <div>
            <h1>Template Expressions</h1>
            <p>Meu nome é {name} e tenho {data.age} anos. Trabalho como {data.job}.</p>
            {
                console.log(`Meu nome é ${name} e tenho ${data.age} anos. Trabalho como ${data.job}.`)
            }
            <p>Pagina atualizada em {new Date().toLocaleDateString()}</p>
        </div>
    );
}

export default TemplateExpressions;
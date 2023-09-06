Resumo: Arrow functions

        As "arrow functions" são uma forma concisa de escrever funções em JavaScript, introduzidas no ECMAScript 6 (também conhecido como ES6). Elas 
        oferecem uma sintaxe mais curta e mais clara em comparação com as funções tradicionais. Aqui estão alguns pontos-chave sobre arrow functions, juntamente com exemplos de código:

1. Sintaxe simplificada:

    Arrow functions eliminam a necessidade das palavras-chave "function" e "return" quando a função é simples e tem apenas uma instrução de retorno.

Exemplo:

- Função tradicional

    function somar(a, b) {
    return a + b;
    }

- Arrow function equivalente

    const somar = (a, b) => a + b;


2. this léxico:

    Ao contrário das funções tradicionais, arrow functions não criam seu próprio contexto "this". Em vez disso, elas herdam o valor de "this" do escopo pai. Isso é útil em métodos de objeto e callbacks.

Exemplo:

- Isso não funcionará

    const objeto = {
    nome: "Exemplo",
    saudacao: function() {
        setTimeout(function() {
        console.log(`Olá, ${this.nome}!`); 
        }, 1000);
    }
    };

 - Usando uma arrow function para manter o contexto "this"

    Isso funcionará

    const objeto = {
    nome: "Exemplo",
    saudacao: function() {
        setTimeout(() => {
        console.log(`Olá, ${this.nome}!`); 
        }, 1000);
    }
    };


3. Sem argumentos "arguments":

    Arrow functions não possuem o objeto "arguments", o que pode ser útil em funções tradicionais para acessar todos os argumentos passados para a função.

Exemplo:

    
- Função tradicional com "arguments"

    function mostrarArgumentos() { console.log(arguments); }
      
- Arrow function equivalente (não tem acesso a "arguments")

     Isso não funcionará
      
     const mostrarArgumentos = () => console.log(arguments);   

4. Uso comum:

Arrow functions são frequentemente usadas em callbacks, funções curtas e expressões lambda, onde a sintaxe concisa e o comportamento do "this" são vantajosos.

Lembre-se de que arrow functions não são adequadas para todas as situações, especialmente quando você precisa de funções construtoras ou quando deseja acessar o objeto "arguments". Portanto, é importante escolher a abordagem certa para cada caso

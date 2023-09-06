    Resumo Promise
As Promises são um recurso essencial na linguagem de programação JavaScript para lidar com tarefas assíncronas de forma eficaz. Elas oferecem uma maneira estruturada e mais fácil de controlar o fluxo de programas quando se trata de operações que podem levar algum tempo para serem concluídas. Este resumo explora os principais conceitos relacionados às Promises, desde a criação até a manipulação e o uso de métodos avançados como `Promise.all` e `Promise.race`. Aprender a trabalhar com Promises é fundamental para escrever código JavaScript robusto e responsivo, especialmente em ambientes onde operações assíncronas são comuns.


  1. Manipulando Promises
Você pode encadear métodos .then() para manipular o resultado bem-sucedido de uma Promise e o método .catch() para lidar com erros.


    - Manipular o resultado bem-sucedid
  minhaPromise
  .then((resultado) => {            
  })

    - Lidar com erros
  .catch((erro) => {                
  });
  
 2. Promise.all e Promise.race
Promise.all permite que você execute várias Promises em paralelo e espera até que todas sejam resolvidas. Promise.race espera apenas a primeira Promise ser resolvida ou rejeitada.


const promessas = [promise1, promise2, promise3];

Promise.all(promessas)

    - Todos os resultados estão prontos
  .then((resultados) => {          
  })

    - Lidar com um erro em qualquer uma das Promises
    
  .catch((erro) => {              
  });


     - A primeira Promise resolvida
   
Promise.race(promessas)
  .then((primeiraResolvida) => {       
  });

As Promises são essenciais para lidar com operações assíncronas de maneira eficaz e legível em JavaScript. Elas facilitam o tratamento de casos complexos de fluxo de dados e melhoram a organização do código.

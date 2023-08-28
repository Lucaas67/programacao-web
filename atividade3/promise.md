# Promise 

#### Uma Promise é um objeto que representa uma eventual conclusão ou falha de uma operação assíncrona. Ela fornece uma maneira mais estruturada e fácil de lidar com operações que levam tempo para serem concluídas, como requisições de rede, acesso a bancos de dados ou qualquer outra tarefa que possa ser assíncrona.

## Principais características das Promises:

* **Estados:** Uma Promise pode estar em um de três estados:

    1. Pendente (pending): O estado inicial, quando a operação ainda está em progresso.
    1. Realizada (fulfilled): A operação foi concluída com sucesso, e um valor resultante é disponibilizado.
    1. Rejeitada (rejected): A operação falhou, e um motivo de falha é fornecido. 

* **Encadeamento:** Promises permitem o encadeamento de operações assíncronas, tornando o código mais legível e evitando o chamado "callback hell" (aninhamento excessivo de callbacks).

* **Tratamento de erros:** Através do método .catch() ou do segundo argumento do método .then(), é possível tratar erros de forma centralizada.

* **Composição:** Promises podem ser combinadas usando métodos como .all() (espera por várias Promises serem concluídas) e .race() (resolve quando a primeira Promise é resolvida ou rejeitada).

## EXEMPLOS 

* Estrutura básica:

~~~javascript
new Promise((resolveOuter) => {
  resolveOuter(
    new Promise((resolveInner) => {
      setTimeout(resolveInner, 1000);
    }),
  );
});
  ~~~

* Encadeamento de Promises:

~~~javascript
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 300);
});

myPromise
  .then(handleFulfilledA, handleRejectedA)
  .then(handleFulfilledB, handleRejectedB)
  .then(handleFulfilledC, handleRejectedC);
~~~

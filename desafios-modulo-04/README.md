# Exercícios: Módulo 04

## 1º exercício

Crie uma função que recebe a idade de um usuário e retorna uma Promise que depois de 2
**segundos** retornará se usuário é maior ou não que 18 anos. Se o usuário ter mais que 18 anos de
idade o resultado deve cair no _.then_, caso contrário, no _.catch_

```js
function checaIdade(idade) {
  // Retornar uma promise
}
checaIdade(20)
  .then(function () {
    console.log("Maior que 18");
  })
  .catch(function () {
    console.log("Menor que 18");
  });
```

<br>

## 2º exercício

Crie uma tela com um _< input >_ que deve receber o nome de um usuário no Github. Após digitar o
nome do usuário e clicar no botão buscar a aplicação deve buscar pela API do Github (conforme
URL abaixo) os dados de repositórios do usuário e mostrá-los em tela:

URL de exemplo: https://api.github.com/users/paulohdelia/repos

Basta alterar "paulohdelia" pelo nome do usuário.

```js
<input type="text" name="user">
<button onclick="">Adicionar</button>
```

Depois de preencher o input e adicionar, a seguinte lista deve aparecer abaixo:

```js
<ul>
  <li>repo1</li>
  <li>repo2</li>
  <li>repo3</li>
  <li>repo4</li>
  <li>repo5</li>
</ul>
```

<br>

## 3º exercício

A partir do resultado do exemplo anterior adicione um indicador de carregamento em tela no lugar
da lista apenas enquanto a requisição estiver acontecendo:

> Troquei para API de Pokemon porque ultrapassei o limite de requisições da API do GitHub

```js
<li>Carregando...</li>
```

Além disso, adicione uma mensagem de erro em tela caso o usuário no Github não exista.

_Dica: Quando o usuário não existe, a requisição irá cair no .catch com código de erro 404_
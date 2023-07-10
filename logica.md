## Sobre lógica, algoritimos e JS:

O processo de aprendizado de Algoritmos e Lógica de Programação é semelhante. Vamos começar pela compreensão dos conceitos de variáveis.
Depois veremos as partes que compõem um programa (entrada,
processamento e saída). E vamos avançando, com o acréscimo de
estruturas de condições, repetições, manipulação de listas de dados (vetores) e outras técnicas.

Ao estruturar os passos de um programa, estamos montando um
algoritmo. Portanto, um algoritmo é uma sequência de passos (comandos)
a serem executados para a realização de uma tarefa, em um tempo nito.
Organizar essa sequência de passos de forma lógica é a nossa atribuição
enquanto programadores de sistemas.

## Pontos a serem cobertos para resolução de problemas envolvendo lógica:

- Compreender oq é pedido:

- Realizar deduções naconstrução do programa

- Enumerar as etapas a serem realizadas

- Analisar outras possibilidades desolução

- Ensinarao computador uma solução

- Pensaremtodos os detalhes

- Entrada, processamento e saída

- Aplicação na linguagem: javascripto 💕

### Cap. 1 - variaveis:

    - Este capítulo objetivou destacar os pontos essenciais necessários para o aprendizado de lógica de programação com JavaScript.

    - Lógica de programação é algo que se aprende com treinamento. Ao criar um algoritmo, vamos “ensinar” o computador a realizar uma tarefa. Com a compreensão e a prática dos exercícios, passamos a assimilar a forma como as estruturas de um programa devem estar organizadas. Usamos a lógica para montar corretamente essas estruturas.

    - Uma boa regra a seguir para resolver os primeiros exercícios de programação é que todo o programa  tem três etapas: entrada,processamento e saída. Ou seja, ele recebe alguns dados, executa alguma operação sobre esses dados e apresenta a resposta.

### Cap 2 - Integração com HTML (DOM pt.1)

`Método getElementById:`
**Para referenciar um elemento HTML identicado no documento, deve-se utilizar o método getElementById(). Esse método permite referenciar qualquer elemento da página, como um campo de formulário, um parágrafo, um botão, uma imagem, entre outros. Para que um elemento HTML seja referenciado, ele precisa conter um atributo id.**

`Propriedades textContent, innerHTMLevalue:`

**- A propriedade value obtém ou altera o conteúdo de um campo de formulário HTML.**

**- Já a propriedade textContent serve para alterar ou obter o conteúdo de elementos de texto do documento identicados no código HTML.**

**- Há também a propriedade innerHTML, semelhante a textContent quanto aos elementos em que atua, porém renderiza os códigos HTML existentes no seu conteúdo.**

`Uso dos listeners - addEventListener:`
**- Para criar um listener, deve-se utilizar o método addEventListener, cuja sintaxe é:**

```
elemento.addEventListener('evento', função)

```

`Inserir texto - textContent / innerHTML:`
**- Para criar um listener, deve-se utilizar o método addEventListener, cuja sintaxe é:**

```
elemento.textContent ="valor"
elemento.innerHTML ="valor" (evitar usar questões de segurança)

```

`Inserir css - elemento.style:`
**- Para criar um listener, deve-se utilizar o método addEventListener, cuja sintaxe é:**

```
elemento.style.valorCSS
```

### Cap 3 - Condições

`if/ else`
**Eles são úteis para facilitar a compreensão do uxo dos comandos em uma estrutura de controle.**

`Operadores relacionais`
**Utilizados para denir as condições utilizadas nas estruturas condicionais, deve-se fazer uso dos operadores relacionais.**

**_==(igual), !=(diferente), <(menor), >(maior), >=(mair ou igual), <=(menor ou igual)_**

`operadores lógicos`
**Utilizados para denir mais de uma condição em um programa**
**_!(not), &&(and), ||(or)_**

`switch... case`
**Ele é útil quando tivermos várias alternativas denidas a partir do conteúdo de uma variável.**

### Cap 4 - Loops

**As estruturas de repetição permitem fazer com que um ou mais comandos em um programa sejam executados várias vezes. Essas estruturas, também denominadas laços de repetição ou loops, complementam a programação sequencial e a programação condicional, vistas anteriormente.**

`for(clássico) | while | do while :`
**Todos coumprem a mesma função porem a sintaxe é diferente:**

### for:
```
 for(let i = 0(atribuição do valor inicial ); i > | = | < valor - condição p parar o loop ; i ++ | -- -> incremento ou decremento){
    comandos a serem exectados repetidamente(parte lógica)
}

```
### while: 
```


while (condição) {
comandos;
}

```
### do while: 
```


do {
comandos;
} while (condição);


```
manipulação de listas

-

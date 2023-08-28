# Função Arrow <h1>

### Uma função arrow em JavaScript é uma forma concisa de criar funções anônimas, proporcionam uma maneira mais enxuta de escrever funções em comparação com as funções tradicionais.

### Principais características das funções arrow: 

* Sintaxe concisa: A sintaxe das funções arrow é mais curta e direta do que a das funções tradicionais. Elas podem ser definidas usando o operador =>. 
* Sem binding de this: Uma das características mais importantes das funções arrow é que elas não têm o seu próprio valor this. Em vez disso, o valor this dentro de uma função arrow é herdado do contexto onde a função foi criada. 
* Retorno implícito: Se a função arrow contiver apenas uma expressão, o valor resultante dessa expressão é automaticamente retornado, sem a necessidade de usar a palavra-chave: return. 

## EXEMPLOS 

* Função arrow sem argumentos
```const saudacao = () => "Olá, mundo!";```

*  Função arrow com um argumento
```const dobro = (x) => x * 2;```

* Função arrow com múltiplos argumentos
```const soma = (a, b) => a + b;```
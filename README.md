# 🦸‍♂️ Classificador de Nível de Herói

Projeto desenvolvido como parte do **Desafio Classificador de nível de Herói** da DIO, com o objetivo de praticar **Lógica de Programação**, estruturas de decisão e laços de repetição.

Neste repositório, o desafio foi resolvido de **duas formas diferentes**, explorando abordagens distintas para o mesmo problema.


## 📌 Objetivo

Criar uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

### Regras de Classificação

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"

## 🧠 Conceitos Utilizados

- Variáveis  
- Operadores lógicos  
- Estruturas condicionais (`if / else if / else`)  
- Laços de repetição (`for`)  

## 🚀 Abordagens Implementadas

### 🔹 1. Utilizando `if`

Nesta abordagem, a lógica é construída com uma **cadeia de decisões**, avaliando o XP do herói em ordem crescente.

A ideia principal é:
- Testar o menor valor primeiro
- Usar `else if` para evitar repetir condições já eliminadas
- Garantir que apenas uma faixa seja atendida

Desta maneira facilitando o entendimento e simplificando na hora de validar.

📂 Arquivo: `usandoIf.js`

---

### 🔹 2. Utilizando `for`

Nesta abordagem, o problema é resolvido de forma mais **dinâmica e escalável**.

A lógica funciona assim:
- Criamos uma estrutura com os níveis e seus valores máximos de XP
- Percorremos essa estrutura com um `for`
- Quando o XP do herói for menor ou igual ao `maxExp`, o nível correspondente é atribuído

Esta forma permite uma melhor organização, possível expansão e resolve em menos linhas.

📂 Arquivo: `usandoFor.js`


## 🎯 Aprendizados

Com este desafio foi possível:
- Entender como estruturar decisões lógicas
- Evitar repetição desnecessária de condições
- Aprender a variável global Infinity para facilitar resultados excedentes
- Comparar soluções simples com soluções mais escaláveis
- Praticar JavaScript
- Treinar como traduzir pensamentos em código


## 👤 Autor

Desenvolvido por **Emmanoel Melo**  
📚 Estudante de Lógica de Programação  
🚀 Projeto para a plataforma DIO

FizzBuzz
===

## Consegna

Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.

**BONUS 1:**
Crea un container nel DOM , aggiungendo (attraverso la funzione `append()`) un elemento html con il numero o la stringa corretta da mostrare.

**BONUS 2:**
Applica stili differenti agli elementi aggiunti al DOM nel *BONUS 1*, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.


## Step da seguire:

1. Utilizzare un ciclo for per iterare i numeri da 1 a 100.
2. Controllare se il numero corrente è divisibile per 3 e/o per 5 utilizzando l'operatore modulo.
3. Se il numero è divisibile per entrambi i numeri, aggiungere un elemento di lista con la classe "fizzbuzz" e il testo "FizzBuzz" alla stringa
4. Se il numero è divisibile solo per 3, aggiungere un elemento di lista con la classe "fizz" e il testo "Fizz" alla stringa
5. Se il numero è divisibile solo per 5, aggiungere un elemento di lista con la classe "buzz" e il testo "Buzz" alla stringa 
6. Se il numero non è divisibile per 3 o 5, aggiungere un elemento di lista con il numero come testo alla stringa 


// Seleziono l'elemento HTML con l'id "my-list"
let list = document.getElementById('my-list');

// Inizializzo una stringa vuota per gli elementi di lista
let listItems = '';

// Ciclo for per iterare i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
  // Controllo se il numero corrente è divisibile per 3 e/o per 5 utilizzando l'operatore modulo
  if ((i % 3 ==0) && (i % 5 ==0)) {
    // Aggiungo un elemento di lista con la classe "fizzbuzz" e il testo "FizzBuzz" alla stringa listItems
    listItems += `<li class="fizzbuzz">FizzBuzz</li>`;
  } else if (i % 3 ==0) {
    // Aggiungo un elemento di lista con la classe "fizz" e il testo "Fizz" alla stringa listItems
    listItems += `<li class="fizz">Fizz</li>`;
  } else if (i % 5 ==0) {
    // Aggiungo un elemento di lista con la classe "buzz" e il testo "Buzz" alla stringa listItems
    listItems += `<li class="buzz">Buzz</li>`;
  } else {
    // Aggiungo un elemento di lista con il numero corrente come testo alla stringa listItems
    listItems += `<li>${i}</li>`;
  }
}

// Imposto la stringa listItems come innerHTML dell'elemento di lista non ordinato selezionato in precedenza
list.innerHTML = listItems;
// Un alert espone 5 numeri casuali. Da li parte un
// timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt
// alla volta i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software
// dice quanti e quali dei numeri da indovinare sono
// stati individuati

function getRandomNumber(min, max) {
  for (var i = 0; i < 5; i++)
  {
    var random = Math.floor(Math.random()*(max-min+1)+min);
    console.log(random);

  }
  return random;
}

alert(getRandomNumber(0,9))
console.log(alert);

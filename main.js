// Un alert espone 5 numeri casuali. Da li parte un
// timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt
// alla volta i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software
// dice quanti e quali dei numeri da indovinare sono
// stati individuati

function getRandomNumber(min, max)
{
  var randomNumber = Math.floor(Math.random()*(max-min+1)+min);
  return randomNumber;
}

var arrayNumber = [];

for (var i = 0; i < 5; i++)
{
  var randomArray = ' '
  randomArray += getRandomNumber(1,100)
  arrayNumber.push(randomArray)
}
console.log(arrayNumber);

var alertNumbers = ''
for (var i = 0; i < arrayNumber.length; i++ )
{

  alertNumbers = alertNumbers + arrayNumber[i];
  console.log(alertNumbers);

}

alert('Ecco i numeri' + alertNumbers);

var arrayId = [];

for (var i = 0; i < 5; i++)
{
  setTimeout(myFunction, 5000);
  function myFunction() {
  parseInt(prompt('inserisci il tuo numero'));
  }
  arrayId.push(prompt());
}
console.log(arrayId);

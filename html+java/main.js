// ￼Il software deve chiedere all’utente il suo nome e il sesso con due prompt diversi.
// Sulla pagina html deve apparire “Ciao <nome>”, il colore del nome deve essere azzurro o rosa a seconda del sesso inserito

var nome = prompt('quale è il tuo nome?')

document.getElementById('utente').innerHTML = 'ciao ' + nome;


var sceltasesso = prompt('Digita maschio o femmina');
if (sceltasesso == 'maschio') {
  utente.style.background = "blue";

}

else if (sceltasesso == 'femmina') {
  utente.style.background = "pink";

}

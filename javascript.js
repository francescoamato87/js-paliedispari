
// 1.Palindroma
// Chiedere all'utente di inserire una parola
// Creare una funzione per invertire i caratteri di una stringa.
// Capire se la parola inserita è palindroma

var parola = prompt('Inserisci una parola!!!');
console.log('PAROLA:', parola);

var parolaReverse = invertiCaratteri(parola);
// console.log('REVERSE', parolaReverse);

if(parolaReverse == parola) {
  console.log('Hai inserito una parola palindroma: ' + parola);
} else{
  console.log('non hai inserito una parola palindroma: ' + parola);
}


// Function
function invertiCaratteri(parola) {
  var parolaReverse = '';
  for(var i = parola.length -1; i >=0; i--){
    parolaReverse += parola [i];
  }

return parolaReverse

}

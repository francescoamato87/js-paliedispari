
// 1.Palindroma
// Chiedere all'utente di inserire una parola
// Creare una funzione per invertire i caratteri di una stringa.
// Capire se la parola inserita è palindroma

// var parola = prompt('Inserisci una parola!!!').toLowerCase().trim();
// console.log('PAROLA:', parola);
//
// var parolaReverse = invertiCaratteri(parola);
// // console.log('REVERSE', parolaReverse);
//
// if(parolaReverse == parola) {
//   console.log('Hai inserito una parola palindroma: ' + parola);
// } else{
//   console.log('non hai inserito una parola palindroma: ' + parola);
// }
//
//
// // Function
// function invertiCaratteri(parola) {
//   var parolaReverse = '';
//   for(var i = parola.length -1; i >=0; i--){
//     parolaReverse += parola [i];
//   }
//
// return parolaReverse
//
// }


// 2. L'utente sceglie pari o dispari
// L'utente inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto in base alla scelta pario o dispari fatta all'inizio dall'utente.


// ...............Prima Prova...............


// var sceltaUtentePariDispari = prompt('scegli pari o dispari');
//
// var sceltaUtenteNumero = parseInt(prompt('scegli un numero da 1 a 5'));
//
// console.log(sceltaUtentePariDispari);
//
// console.log(sceltaUtenteNumero);
//
// // Random Computer
// var randomNumber = getRandom(1, 5);
// console.log(randomNumber);
//
// // // Generazione NUMERO RANDOM
// function getRandom(min, max) {
//   var random = Math.floor(Math.random() * (max - min + 1) ) + min;
// }
//
//
//
//
// function pariDispari(numero) {
//
//   if(numero % 2 ==0){
//     return 'pari';
//   }
//   else{
//     return 'dispari';
//
//   }
// }



// PARI E dispari fatto con PAolo
// ............................................


// GIOCATE
var sceltaGiocatore = prompt('inserisci pari o dispari').toLowerCase().trim();
console.log('Scelta Giocatore: ', sceltaGiocatore);

var numeroGiocatore = parseInt(prompt('inserisci un umero da 1 a 5').trim() );
console.log('Numero giocatore', numeroGiocatore);

// OPPONENTE
var numeroOpponente = getRandomNumber(1, 5);  // Computer

// somma
var somma = numeroGiocatore + numeroOpponente;
console.log('Somma',somma);
// CONTROLLO
var risultato = checkPariDispari(somma);
// Vincitore
if (sceltaGiocatore === risultato) {
  console.log('Vince il Giocatore');
}
else {
  console.log('Vince Opponente');
}

// Genera Num RANDOM
function getRandomNumber(min, max){
  return Math.floor( Math.random() * (max - min +1 ) ) + min;

}

// ..Controllo Natura Pari o DIspari di un numero

function checkPariDispari(num){
  if (num % 2 ===0){
    return 'pari';
  }
  return 'dispari';
}

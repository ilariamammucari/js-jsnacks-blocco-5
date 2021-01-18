// - Creare un oggetto palla che abbia le seguenti proprietà.
// Nome = palla
// Peso = 10
// Attraverso un prompt dare la possibilità all'utente di modificare il peso della palla.

// creo l'oggetto e lo visualizzo
var palla = {
    nome: 'palla',
    peso: 10
};
for ( var key in palla ){
    console.log(key + ': ' + palla[key]);
}

// faccio inserire all'utente il peso che vuole per la palla
var modificaPeso = parseInt(prompt('Inserisci un numero e modifica il peso della palla!'));

// modifico il peso alla palla in base alla scelta dell'utente
palla.peso = modificaPeso;

// visualizzo di nuovo l'oggetto con peso modificato
console.log('Oggetto con peso modificato: ')
for ( var key in palla ){
    console.log(key + ': ' + palla[key]);
}
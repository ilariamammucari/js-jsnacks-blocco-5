// - Creare  un array che contiene 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm. Infine stampa separatamente quanto pesano i due gruppi di zucchine.

// creo l'arrey di oggetti con le loro proprietà
var zucchine = [
    {
        varietà: 'Nero di Milano',
        peso: 2,
        lunghezza: 7
    },
    {
        varietà: 'Romanesco',
        peso: 1,
        lunghezza: 8
    },
    {
        varietà: 'Striata di napoli',
        peso: 3,
        lunghezza: 17
    },
    {
        varietà: 'Rigata pugliese',
        peso: 1,
        lunghezza: 18
    },
    {
        varietà: 'Tondo di Piacenza',
        peso: 2,
        lunghezza: 15
    },
    {
        varietà: 'Lunga fiorentina',
        peso: 3,
        lunghezza: 20
    },
    {
        varietà: 'Ortolano di Faenza',
        peso: 3,
        lunghezza: 9
    },
    {
        varietà: 'Zucchino siciliano',
        peso: 2,
        lunghezza: 13
    },
    {
        varietà: 'Bianca triestina',
        peso: 1,
        lunghezza: 19
    },
    {
        varietà: 'Trombeta di Albenga',
        peso: 1,
        lunghezza: 21
    }
];

// divido le zucchine in due arrey differenti in base alla loro lunghezza
var zucchineLunghe = [];
var zucchineCorte = [];
for ( var i = 0; i < zucchine.length; i++ ){
    if ( zucchine[i].lunghezza >= 15 ){
        zucchineLunghe.push(zucchine[i]);
    } else {
        zucchineCorte.push(zucchine[i]);
    }
}

// sommo il peso delle zucchine da 15cm in su
var somma = 0;
for ( var i = 0; i < zucchineLunghe.length; i++ ){
    var zucchinaPeso = zucchineLunghe[i].peso;
    somma += zucchinaPeso;
}
console.log('Le zucchine lunghe da 15cm in su pesano in totale: ' + somma);

// sommo il peso delle zucchine da 14cm in giù
var somma = 0;
for ( var i = 0; i < zucchineCorte.length; i++ ){
    var zucchinaPeso = zucchineCorte[i].peso;
    somma += zucchinaPeso;
}
console.log('Le zucchine lunghe da 14cm in giù pesano in totale: ' + somma);
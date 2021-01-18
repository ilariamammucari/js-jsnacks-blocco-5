// - Creare un array che contiene 10 oggetti che rappresentano una zucchina, indicandone per ognuno varietà, peso e lunghezza. Calcola quanto pesano tutte le zucchine.

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
        lunghezza: 5
    },
    {
        varietà: 'Rigata pugliese',
        peso: 1,
        lunghezza: 6
    },
    {
        varietà: 'Tondo di Piacenza',
        peso: 2,
        lunghezza: 9
    },
    {
        varietà: 'Lunga fiorentina',
        peso: 3,
        lunghezza: 7
    },
    {
        varietà: 'Ortolano di Faenza',
        peso: 3,
        lunghezza: 4
    },
    {
        varietà: 'Zucchino siciliano',
        peso: 2,
        lunghezza: 5
    },
    {
        varietà: 'Bianca triestina',
        peso: 1,
        lunghezza: 6
    },
    {
        varietà: 'Trombeta di Albenga',
        peso: 1,
        lunghezza: 8
    }
];

// peso tutte le zucchine
var somma = 0;
for ( var i = 0; i < zucchine.length; i++ ){
    var zucchina = zucchine[i].peso;
    somma += zucchina;
}
console.log('Le zucchine pesano in totale: ' + somma);
// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:

/*
1) uso di Math.random per generare un numero casuale
    Math.floor tronca
    Math.random generato num casuali da 0(incluso) a 1 (escluso)
*/

    // questa istruzione genera da 0 a 5
    // Math.floor(Math.random() * 6) 

    // questa istruzione genera da 1 a 6
    // Math.floor(Math.random() * 6) + 1

    // const player = Math.floor(Math.random() * 6) + 1
    // const computer = Math.floor(Math.random() * 6) + 1

function rollDice() {
    const player = Math.floor(Math.random() * 6) + 1; 
    // ho il punteggio del giocatore
    alert(`il tuo punteggio è ${player}`);

    const computer = Math.floor(Math.random() * 6) + 1
    // ho il punteggio del computer
    alert(`il punteggio del computer è ${computer}`);

    // quando vince il player?
    // quando vince il computer? 
    // quando si pareggia?
    const result = document.getElementById('result'); 

    if (player > computer) {
        // vince player
        result.innerText = "Hai vinto!";
    } else if (player < computer) {
        // vince computer
        result.innerText = "Ha vinto il computer!";
    } else if (player == computer) {
        // pareggio!
        result.innerText = "Avete pareggiato!";
    }
} 


// un array per il player
// un array per il computer

// fase 1
//    tre numeri per player[]
//    tre numeri per computer[]

// fase 2
// ciclo su player[]
// ottengo la somma dei punteggi del player

/*
function dado (){
    return Math.floor(Math.random() * 6) + 1;
}
player[0] = dado ();
alert
player[1] = dado ();
alert
player[2] = dado ();
alert

computer[0] = dado ();
alert
computer[1] = dado ();
alert
computer[2] = dado ();
alert
*/
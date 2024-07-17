# js-mail-dadi

# esercizio 1
Autorizzazione email
Chiedi all'utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull'esito del controllo.


# esercizio 2
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?
Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3. si ma noi cosa vogliamo fare?
4. torniamo a scrivere in italiano
5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"


# esercizio 1: pseudocodice soluzione

1) Chiedi all'utente la sua email.
    uso un prompt
    
    // ******************************************** 
    const emailUtente = prompt ("Per favore, inserisci il tuo indirizzo email"); 

2a ) Lista di chi può accedere!

    // **************************************************
    // array di indirizzi email autorizzati.a
    // archivio di email autorizzate
    // **************************************************
    const emailAutorizzate = [
        "email1@esempio.com",    // 0
        "email2@esempio.com",    // 1   
        "email3@esempio.com"     // 2   
    ];
    // **************************************************

2b) controllare che sia nella lista 
    // conto partendo da zero perché così ho l'indice corretto.
    // 
    // emailAutorizzata ("mario@gmail.com") => false 
    
    // emailAutorizzata ("email2@esempio.com") => true


    function emailAutorizzata (email) {
        for (let i = 0; i < emailAutorizzate.length; i++ ) {
            if (emailAutorizzate[i] === email) {
                return true;
            }
        }
        return false; 
    }

3) // verifica e stampa un messaggio appropriato sull'esito del controllo.
    
   
   if (emailAutorizata (email) == true) {
        alert ("Sei autorizzato: benvenuto!");
   } else {
        alert ("Non se autorizzato: accesso negato!");
   }

i < emailAutorizzate.length => i < 3



Versione senza funzione:
// definisco elenco email autorizzate
const emailAutorizzate = [
    "email1@esempio.com",    // 0
    "email2@esempio.com",    // 1   
    "email3@esempio.com"     // 2   
];


// chiedo email all'utente
const userEmail = prompt('perfavore inserisci la tua email');

let isAuthorized = false;

for (let i = 0; i < emailAutorizzate.length; i++ ) {
    if (emailAutorizzate[i] === userEmail) {
        isAuthorized = true;
    }
}


// esegue validazione email
if (isAuthorized == true ) {
    alert("Autorizzato");
} else {
    alert("Sciò");
}

// alternativa alla lettura dei dati via prompt
const email = document.getElementById('nomeDelCampo').value;

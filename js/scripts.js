console.log ('js sincronizzato')
// definisco elenco email autorizzate
const emailAutorizzate = [
    "email1@esempio.com",    // 0
    "email2@esempio.com",    // 1   
    "email3@esempio.com"     // 2   
];

// defisco funzione per controllare l'email
// a fronte dell'elenco emailAutorizzate
function emailAutorizzata (email) {
    for (let i = 0; i < emailAutorizzate.length; i++ ) {
        if (emailAutorizzate[i] === email) {
            return true;
        }
    }
    return false; 
}

// chiedo email all'utente
const userEmail = prompt('Per favore inserisci la tua email');

// esegue validazione email
if (emailAutorizzata(userEmail) == true ) {
    alert("Autorizzato");
} else {
    alert("Autorizzazione negata");
}

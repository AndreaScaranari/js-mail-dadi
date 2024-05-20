// ESERCIZIO 1

// recupero elementi
const buttonDice = document.querySelector("button");
const userResultSpan = document.getElementById("user-result");
const userResultPar = document.querySelector(".results-user");
const pcResultSpan = document.getElementById("pc-result");
const pcResultPar = document.querySelector(".results-pc");
const dicesResultPar = document.getElementById("esito-dadi");
const hideButton = document.querySelector(".hide-button");

// possibili esiti
let victory = "Complimenti, hai vinto!"
let defeat = "Oh no, sei stato battuto :("
let draw = "Pareggio!? Forza, prova ancora ;)"

buttonDice.addEventListener("click", function() {
  // generare tiro casuale User
const userResult = Math.floor(Math.random() * 6) + 1;
userResultPar.classList.remove("d-none");
userResultSpan.innerText = userResult;

// generare tiro casuale PC
const pcResult = Math.floor(Math.random() * 6) + 1;
pcResultPar.classList.remove("d-none");
pcResultSpan.innerText = pcResult;

// rimuovere precedenti classe aggiunte ai bg
dicesResultPar.classList.remove("text-bg-success", "text-bg-danger", "text-bg-warning");

// verificare vittoria
let dicesResult;
if (userResult > pcResult) {
    dicesResult = victory;
    dicesResultPar.classList.add("text-bg-success");
} else if (userResult < pcResult) {
    dicesResult = defeat;
    dicesResultPar.classList.add("text-bg-danger");
} else {
    dicesResult = draw;
    dicesResultPar.classList.add("text-bg-warning");
}

// Inserire il testo dell'esito nel paragrafo
dicesResultPar.innerText = dicesResult;

// Rimuovere d-none al paragrafo e al bottone
dicesResultPar.classList.remove("d-none");
hideButton.classList.remove("d-none");
});

// Event listenere per rest a hideButton
hideButton.addEventListener("click", function() {
    userResultPar.classList.add("d-none");
    dicesResultPar.classList.add("d-none");
    pcResultPar.classList.add("d-none");
    hideButton.classList.add("d-none");
});

// -------------------------------------------------

// ESERCIZIO 2
// 1. stampa un messaggio appropriato sull’esito del controllo.

// recuperare elementi
const inputEmail = document.querySelector("input");
const verifyButton = document.getElementById("verify-button");
const verifyFeedback = document.getElementById("esito-verifica");
const hideEmailButton = document.querySelector(".hide-email-button");

// Inventa una lista di email autorizzate
const emailList = [
    "a.a@gmail.com",
    "b.b@gmail.com",
    "c.c@gmail.com",
    "d.d@gmail.com"
]

console.table(emailList);

// stabilire condizioni di autorizzazione
const accessAuthorized = "Bentornato su Boolean Mails!";
const accessDenied = "La tua mail non risulta autorizzata all'accesso";

// Aggiungere evento al pulsante verifica
verifyButton.addEventListener("click", function() {
    console.log(inputEmail.value);

    let areYouVerified = accessDenied;
    verifyFeedback.classList.add("text-bg-danger");

    for (let i = 0; i < emailList.length; i++) {
        if (inputEmail.value == emailList[i]) {
            areYouVerified = accessAuthorized;
            verifyFeedback.classList.add("text-bg-success");
            verifyFeedback.classList.remove("text-bg-danger");
    }};

    // svuota campi
    inputEmail.value = "";

    // Inserire il testo dell'esito nel paragrafo
    verifyFeedback.innerText = areYouVerified;
    verifyFeedback.classList.remove("d-none");
    hideEmailButton.classList.remove("d-none");
});

    // Event listenere per rest a hideButton
    hideEmailButton.addEventListener("click", function() {
    verifyFeedback.classList.add("d-none");
    hideEmailButton.classList.add("d-none");
    });
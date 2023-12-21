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

dicesResultPar.innerText = dicesResult;
dicesResultPar.classList.remove("d-none");
hideButton.classList.remove("d-none");
});

hideButton.addEventListener("click", function() {
    userResultPar.classList.add("d-none");
    dicesResultPar.classList.add("d-none");
    pcResultPar.classList.add("d-none");
    hideButton.classList.add("d-none");
});

// -------------------------------------------------

// ESERCIZIO 2
// 1. Inventa una lista di email autorizzate
// 1. Chiedi all’utente la sua email, con un piccolo form.
// 1. controlla che la mail inserita sia nella lista di chi può accedere,
// 1. stampa un messaggio appropriato sull’esito del controllo.
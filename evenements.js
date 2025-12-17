/**
 * Je programmes les événements qui sont déclanchés au HTML
 */

const elementBoutonValiderDate = document.querySelector("#validerDate");

let elementSpanDateDuJour = document.querySelector("#dateDuJour");
const elementSpanDateDuJourFormat2 = document.querySelector("#dateDuJourFormat2");

// Je déclare un objet date en utlisant la classe Date()
const maDate = new Date();

elementBoutonValiderDate.addEventListener("click",function() {
    // Je décris l'action à réaliser lorsque je clique sur le bouton valider
    //
    elementSpanDateDuJour.innerHTML = maDate;
    elementSpanDateDuJourFormat2.textContent = maDate.toLocaleDateString();
});
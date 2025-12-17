/**
 * Je programmes les événements qui sont déclanchés au HTML
 */

const elementBoutonValiderDate = document.querySelector("#validerDate");

let elementSpanDateDuJour = document.querySelector("#dateDuJour");
const elementSpanDateDuJourFormat2 = document.querySelector("#dateDuJourFormat2");

// Je déclare un objet date en utlisant la classe Date()
const maDate = new Date();

// mon evenement "click"
elementBoutonValiderDate.addEventListener("click",function() {
    // Je décris l'action à réaliser lorsque je clique sur le bouton valider
    //
    elementSpanDateDuJour.innerHTML = maDate;
    elementSpanDateDuJourFormat2.textContent = maDate.toLocaleDateString();
});

// mon evenement "Keydown" va se déclencher lorsque j'appuie sur une touche de mon clavier.

//1. Tout d'abord, je recupère l'élement HTML qui sera associé à l'évenement KEYDOWN
let elementBoutonFonctionFleche = document.querySelector("#boutonFleche");

//2. J'associe l'élvenement keydown à l'élément HTML en utilisant la méthode addEventListener().
//A l'intérieur de la méthode AddEventListener(), je passe une fonction fléchée comme suit '() => {}'.

elementBoutonFonctionFleche.addEventListener("keydown", (event) => {
    console.log("==== Je suis l'évènement KEYDOWN ====");
    console.log("Clé event : ", event.key);
});


/**
 * mon evenement "change"
 * Je code un évenement de type text 
 * l'évenement "change" se déclenche lorsque l'utilisateur modifier la valeur d'un champ de formulaire 
 * et quitte ce champ (par exemple, en cliquant ailleur ou en appuyant sur la touche tab).
 */

//1. Tout d'abord, je récupère l'élement html qui sera associé à l'évenement CHANGE .
let elementinputNomForm = document.querySelector("#nom");

//2. j'associe l'évenement "change" à l'élement récupere avec addEventListener(), puis je console.log
//la nouvelle valeur de l'input a chaque changement de valeur.


let messageSalutation; // Je déclare une variable vide.
let elementSpanNomUtilisateur = document.querySelector("#nomUtilisateur");

elementinputNomForm.addEventListener("change", (event) => {
    console.log(event.target.value);
    messageSalutation = `Bonjour ${event.target.value}`;
    elementSpanNomUtilisateur.textContent = messageSalutation;
});
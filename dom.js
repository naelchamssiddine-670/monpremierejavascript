
let elementBoutonValider = document.getElementById("boutonValider");

elementBoutonValider.addEventListener("click",function() {
    console.log("elementBoutonValider :",
    elementBoutonValider);
});

console.log(document.getElementById("nom"));

//console.log(elementBoutonValider);

let elementinputNom = document.querySelector("#nom");

console.log(elementinputNom);

console.log(document.head);

console.log(document.title);

// Je récupère l'élement HTML (balise) dont l'identifiant est recensement
let elementDivRecensement = document.querySelector("#recensement");

console.log(elementDivRecensement);

let elementPRecensement = document.querySelector("#paragraphe1");

console.log(elementPRecensement);

/**
 * J'insère des balises dans le fichier HTML grace au code Javascript
 */
// je crée un élement (balise) nomme <section>
let elementSection = document.createElement("section");

let elementBody = document.querySelector("body");

elementBody.appendChild(elementSection);

let nouveauTitre = document.createElement("h3");

nouveauTitre.textContent = "Mon titre de la section";
/**
 * j'ai crée une balise mon titre de la section
 */

elementSection.appendChild(nouveauTitre);


let elementMaman = document.createElement("maman");
/**
 * j,ai crée une balise maman
 */

elementBody.appendChild(elementMaman);

let nouveauTitre1 = document.createElement("h3");

nouveauTitre1.textContent = "bonjour maman";
//

elementMaman.appendChild(nouveauTitre1);

let elementImg = document.createElement("img");

elementImg.src = "kaiju_No_8_kafka_hibino_698830c1-a59b-4187-9aa0-0dab4884266b.webp";

elementBody.appendChild(elementImg);
console.log("Ici je code les opérateur en html")

//addition

let prixUnitaire = 13;
let valeurAjouter = 7;
let valeurReduction = 5;
let valeurDivision = 4;

//Premier technique additionner des nombres
let prixAdditionne1 = 3+7;

//j'affiche la valeur de la variable prixAdditionnel
console.log("prixAdditionne1 :", prixAdditionne1);

//Deuxième méthode d'additionner des nombres à l'aide variables
let prixAdditionne2 = prixUnitaire + valeurAjouter;

console.log("prixAdditionne2 : ", prixAdditionne2);

// Addition des chaines de caractères
// Exemple : "Fatima" + "Amina"; Résultat attendu est "Fatima Amina"
let eleve1 = "Fatima";
let eleve2 = "Amina";

/*Je concatène deux variables et résultats attendu : "FatimaAmina"*/
console.log(eleve1 + eleve2);

/* Je concatène deux variables. Et j'ajoute un espace entre les deux variables.
Résultats attendu : "Fatima Amina"*/

console.log(eleve1+" "+eleve2)

/*Je concatène deux variables.
Et, je les stocks dans une autre variable. */
let eleveCombo = eleve1 + " " + eleve2;

console.log("eleveCombo : ",eleveCombo);

/*
    ##### Soustraction - #####
*/
let prixReduit = prixUnitaire - valeurReduction;

console.log("prix réduit:",prixReduit);

/**
 *  ##### Mutiplication * ###
 * Le signe * permet de multiplier des nombres.
 */
let prixMultiplie = prixUnitaire * valeurAjouter;
console.log("prix mutiplié :", prixMultiplie);

/**
 * ### Division / ###
 *  Le signe / permet de diviser des nombres 
 */
let prixDivise = prixUnitaire / valeurDivision;
console.log("résultat du prix divisé : ",prixDivise);

/**
 * Les opérateurs de comparaison 
 * nous allons comparer les valeurs stocker dans les variables.
 * Allons-y!
 */
console.log("### Section Comparaison ###");
let village2 = "Mamoudzou";
let commune2 = "Mamoudzou";

// Je vérifie que les deux variables ont la meme valeur.
/**Le == (double égal ) permet de comparer l'égalité des valeurs */
console.log(village2 == commune2);
/**
 * Je vérifie que les deux variables ont :
 * la meme valeur
 * le meme type de valeur
 * 
 * Le signe === (triple égale) permet de comparer les valeurs et le type de données.
 * Les types de données sont:
 * - string (chaine de caractères)
 * - number (nombre)
 * - bollean (boiléen) soit true ou false
 * - array (tableau)
 * - object (objet)
 */

console.log(village2 === commune2);


/**
 * Signe > signifie : "supérieur à" ou bien "plus grand que"
 * 
 */
let age1 = 12;
let distanceParcourue1 = 5;

//Est-ce que l'age est suppérieur à la distance parcourue?
console.log(age1 > distanceParcourue1);
console.log(12 > 5);
console.log(age >= distanceParcourue1);
//Est-ce que l'age est inférieur ou égal à la distance
console.log(age1 <= distanceParcourue1);

//Est-ce que le village est différent de la commune?
console.log(village2 != commune2);

//Est-ce la commune est strictement différent du village?
console.log(village2 !== commune2);

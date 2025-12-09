/**
 * Les conditions en JavaScript
 */

let nombreFruit = 19;

/**
 * J'affiche l'alerte SI le nombre de fruits est égal à 18
 */


/**
 * Ma condition commence par le mot-clé IF
 * La syntaxe à respecter est :
 * if(ma condition){
 *      Action à exécuter
 * }
 */

if (nombreFruit == 18){// nous avons une comparaison à égalité strict
    alert("Vous avez atteint 18 fruits."); // fonction alert()


};

let noteEleve = 10;

if (noteEleve >= 10) {
    alert("Vous etes admis avec une note de " + noteEleve);
};

let ageTelespectateur = 18;

if(ageTelespectateur < 18 ) { // Si l'age est égal ou supérieur à 18
    alert("Vous pouvez regarder le roi Lion! car vous avez" + ageTelespectateur);
};

if(ageTelespectateur >= 18 ) { // Si l'age ou supérieur à 18
    alert("Vous pouvez regarder RAMBO! car vous avez " + ageTelespectateur);
};

// La condition avec IF ELSE
let pointPermis = 12;
if(pointPermis == 12){
    alert("Vous avez un bonus!");

}else{
    alert("Vous avez des malus!");
}
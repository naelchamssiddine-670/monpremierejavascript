/**
 *  ##Les fonction en JavaScript ###
 */

console.log("##### Section Fonction ####");

/**
 * La fonction additionner() doit additionner des nombres
 * et retourner le résultats
 * La fonction additionner a besoin de deux paramètres: (chiffre1,chiffre2);
 * Ensuite, la fonction additionner sur les paramètres : chiffre1 + chiffre2
 * Enfin, la fonction additionner retourne ou renvoie le résultat du calcul
 */
function additionner(chiffre1,chiffree2) {
    let resultat = chiffre1 + chiffree2;
    return resultat;
}

// J'utilise la fonction additionner(chiffre1, chiffre2) pour calculer la somme de deux nombres

let sommes = 15 + 8;

let sommes1Addition = additionner(15, 8);

console.log("sommes1 :",sommes1Addition);

function Soustraire(chiffre3,chiffre4) {
    let resultat = chiffre3 + chiffre4;
    return resultat;
}

let sommes3 = 15 - 8;

let sommes4 = Soustraire(15, 8);

console.log("sommes3 :",sommes3);

let resteSoustraction = Soustraire(15, 8);

console.log("resteSoustraction :", resteSoustraction);

// Fonction multiplication pour multiplier deux nombres

/**
 * 
 * @param {*} chiffre5 
 * @param {*} chiffre6 
 * @returns 
 * La fonction multiplier prends deux paramètres : chifre5 et chifre6.
 * Le paramètres a est multiplié par le paramètre 6. Et , le résultat est stocké dans
 * la variable resultat.
 * Enfin, la fonction retourne ou renvoit le résultat.
 */

function Multiplier(chiffre5,chiffre6) {
    let resultat = chiffre5 * chiffre6;
    return resultat;
}

// J'ai utiliser la fonction multiplication(multiplier) pour calculer la somme de deux nombres
let resteMultiplier = Multiplier(15, 8);

console.log("restEMuliplier :", resteMultiplier);
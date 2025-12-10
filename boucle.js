console.log("##### Section - Je suis dans la boucle ")

let nombreTour = 0;

/**
 * La boucle WHILE
 * while signifie "tant que"
 * Tant que la limite n'est pas atteinte, alors l'action s'éxécute.
 * La boucle while va exécuter la meme opération autant de fois que la limite n'est pas 
 * atteinte.
 * Et à chaque tour, la variable nombreTour augmente de 1 (+1)
 */
while (nombreTour < 7){
    console.log("Tour de la maison au départ :", nombreTour );
    nombreTour = nombreTour + 1;

    console.log("Nombre de tours Aprés le passage : ", nombreTour);
}

// Boucle FOR
for(let indice = 0; indice < 3; indice++) {
    console.log("L'indice est de : ", indice);
}

// Application de la boucle for sur une liste d'élèves

let listeEleves = ["Chamssiddine-Nael","Madi-Soilihi Ben","Oifikidine","Houmadi-Chahida",
    "Mchangama-Mounawara","Anrabia-Said","Anzilati Mohamed","Yowane Mohamed Ahamada","Madi Mlimi Nouran",
    "Moussa Lydia","Rachid Mahamoudou","Aristid-Jassem Fougeroux"];

    console.log("Taille du tableau : ", listeEleves.length);
    console.log(listeEleves[0]);
    console.log(listeEleves[1]);
    console.log(listeEleves[2]);

    for(let i = 0; i < listeEleves.length; i++){
        console.log(listeEleves[i]);
    }
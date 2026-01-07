// Récupération des éléments HTML
const select = document.getElementById("timezone");
const dateTimeDiv = document.getElementById("datetime");

// Fonction qui affiche la date et l'heure selon le fuseau choisi
function afficherDateHeure() {
    // Récupère la valeur du fuseau sélectionné
    const zone = select.value;

    // Options pour le formatage de la date et de l'heure
    let options = {
        weekday: "long",   // jour de la semaine (lundi, mardi, ...)
        year: "numeric",   // année sur 4 chiffres
        month: "long",     // mois en lettres
        day: "numeric",    // jour du mois
        hour: "2-digit",   // heure sur 2 chiffres
        minute: "2-digit", // minutes sur 2 chiffres
        second: "2-digit"  // secondes sur 2 chiffres
    };

    // Si ce n'est pas l'heure locale, on ajoute le fuseau horaire
    if (zone !== "local") {
        options.timeZone = zone;
    }

    // On formate la date selon les options définies
    const dateHeure = new Intl.DateTimeFormat("fr-FR", options).format(new Date());

    // On affiche le résultat dans le div
    dateTimeDiv.textContent = dateHeure;
}

// Met à jour la date et l'heure chaque seconde
setInterval(afficherDateHeure, 1000);

// Met à jour la date et l'heure quand on change de fuseau dans le menu
select.addEventListener("change", afficherDateHeure);

// Affichage initial au chargement de la page
afficherDateHeure();





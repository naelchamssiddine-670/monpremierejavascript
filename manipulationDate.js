function mettreAJourHorloge() {
  const pays = document.querySelector("#pays").value;
  let maintenant;

  if (pays === "local") {
    // Heure de l'ordinateur
    maintenant = new Date();
  } else {
    // Heure selon le fuseau horaire choisi
    maintenant = new Date(
      new Date().toLocaleString("en-US", { timeZone: pays })
    );
  }

  // Heure
  const heure = String(maintenant.getHours()).padStart(2, "0");
  const minute = String(maintenant.getMinutes()).padStart(2, "0");
  const seconde = String(maintenant.getSeconds()).padStart(2, "0");

  // Date
  const jour = String(maintenant.getDate()).padStart(2, "0");
  const mois = String(maintenant.getMonth() + 1).padStart(2, "0");
  const annee = maintenant.getFullYear();

  // Affichage
  document.querySelector("#heure").textContent = heure;
  document.querySelector("#minute").textContent = minute;
  document.querySelector("#seconde").textContent = seconde;

  document.querySelector("#jour").textContent = jour;
  document.querySelector("#mois").textContent = mois;
  document.querySelector("#annee").textContent = annee;
}

// Mise à jour toutes les secondes
setInterval(mettreAJourHorloge, 1000);
mettreAJourHorloge();

// Met à jour instantanément si l'utilisateur change de pays
document.querySelector("#pays").addEventListener("change", mettreAJourHorloge);





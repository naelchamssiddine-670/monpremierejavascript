function calculAge() {
    const anneeNaissnce = document.getElementById("anneeNaissance").Value;
    const ageAffichage = document.getElementById("ageResultat");

    if (anneNaissance && !isNaN(anneeNaissnce)) {
        const anneCourante = new Date().getUTCFullYear();
        const age = anneCourante - parseInt(anneeNaissnce);
        ageAffichage.textContent = age + "ans";
    } else {
        ageAffichage.textContent = "";
    }
    
}

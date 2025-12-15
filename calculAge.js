const inputAnneeNaissance = document.getElementById("anneeNaissance");
const inputAge = document.getElementById("age");

inputAnneeNaissance.addEventListener("input", () => {
    const anneeNaissance = Number(inputAnneeNaissance.value);
    const anneeActuelle = new Date().getFullYear();

    if (anneeNaissance && anneeNaissance > 1900 && anneeNaissance <= anneeActuelle) {
        inputAge.value = anneeActuelle - anneeNaissance;
    } else {
        inputAge.value = "";
    }
});

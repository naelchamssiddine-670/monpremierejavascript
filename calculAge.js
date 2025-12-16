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

// je récupère la liste des communes de Mayotte.
// puis je stocke les communes dans la variable elementListCommmunes
let elementListCommunes = document.querySelector("#listCommunes");

// Ensuite, j'affiche la variable elementListCommunes
console.log(elementListCommunes.innerText);

for(let i = 0; i < elementListCommunes.children.length; i++){
    console.log("commune n°",i,";",elementListCommunes.children[i].textContent);
}


// J'utilise QuerSelectorAll pour récupèrer tous les membres de le meme classe
let elementClassCommune = document.querySelectorAll(".commmune");
for (let i = 0; i < elementClassCommune.length; i++){
    console.log(elementClassCommune[i]);
    console.log(elementClassCommune[i].innerText);
}

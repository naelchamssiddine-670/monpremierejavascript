// Ici, je rédige mon script JavaScript//
let nom ="Chamssiddine";
let prenom ="Nael";
let age = 19;
console.log("Bonjour, je m'appelle ",prenom, nom);
console.log("J'ai ",age);
let prix = 12;
const nombreDecimal = 3.4123;
const nombreNegatif = -509;
const nombreFraction = 1/3;

console.log("prix:", prix);
console.log("nombre decimal",nombreDecimal);
console.log("nombre fraction",nombreFraction);
        console.log("nombre negatif",nombreNegatif);

        let salutations = "Bonjour les gens";
        let greeting = "Good morning";
        let andabu = "Kwezi";

        console.log(salutations);
        console.log(greeting);
        console.log(andabu);

        let commune = "M'tsamboro";
        let village ='M\'tsahara';

        console.log("Je suis de la commune de", commune);
        console.log("et je voudrais le village de", village);
        
        let vrai = true;
        let est_faux = false;

        console.log(vrai);
        console.log(est_faux);

        let eleves = ["Said","Amina","Bao"];
        console.log(eleves);

        let diplome = [true , 10 , "Daniel"];

        console.log(eleves[0]);
        console.log(eleves[1]);
        console.log(eleves[2]);

        console.log(diplome);
        console.log(diplome[1]);
        console.log(diplome[2]);

        let tableauEleves = ["Amina","Bacar","Salim","Abdou"];

        let client = {
            nom: "Bacar",
            village: "Choungui",
            age: 25,
            scores: [4, 7, 2]
        };

        console.log(client);

        console.log(client.nom);//récupère Bacar
        console.log(client.village);//récupère Choungui
        console.log(client.age);//récupère 25
        console.log(client.scores);//récupère [4, 7, 2]
        console.log(client.scores[1]);//récupère 7

        let JoueurProfessinnel= {
            nom: "Zinadine",
            prenom: "Yazid Zidane",
            nationalité1: "Francais",
            nationalité2: "Algériennne",
            dateNaissance: "23/06/1972",
            taille: 1.85,
            piedfort: "droit",
            poste: "Milieu offenser"
    }
// J'affiche l'ensemble de l'objet joueurProfessionnel
console.log(JoueurProfessinnel);
console.log("C'est un grand joueur son nom est ",JoueurProfessinnel.nom);
console.log("son prenom ",JoueurProfessinnel.prenom);
console.log("d'origine ",JoueurProfessinnel.nationalité1);
console.log("est d'origine ",JoueurProfessinnel.nationalité2);
console.log("il est née le ",JoueurProfessinnel.dateNaissance);
console.log("il fait la taille de ",JoueurProfessinnel.taille);
console.log("il utilise son pied ",JoueurProfessinnel.piedfort);
console.log ("son poste est ",JoueurProfessinnel.poste);


        let Presidentduconseilgeneraldemayotte= {
            nom: "Younoussa",
            prenom: "Bamana",
            nationalité: "Francais",
            dateNaissance: "23/06/1972",
            lieudeNaissance: "Kani-Keli Mayotte",
            datedeDeces: "22/06/2007",
            profession: "Instituteur",
    }

console.log(JoueurProfessinnel);
console.log("C'est un grand preident du conseil general son nom est ",Presidentduconseilgeneraldemayotte.nom);
console.log("son prenom ",Presidentduconseilgeneraldemayotte.prenom);
console.log("de nationalité",Presidentduconseilgeneraldemayotte.nationalité);
console.log("il est née le ",Presidentduconseilgeneraldemayotte.dateNaissance);
console.log("à ",Presidentduconseilgeneraldemayotte.lieudeNaissance);
console.log("il est mort le ",JoueurProfessinnel.datedeDeces);
console.log("il travail en temps que ",JoueurProfessinnel.profession);



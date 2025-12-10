let ticket = {
    nomFilm: "Koungou",
    prix: 12,
    numeroSalle: 5,

    };

let nomClient= "Boiboiriya" // Remplacez par votre nom
    
    
let texteAffiche = "Bonjour " + nomClient +", votre film " + ticket.nomFilm +" est en salle " + ticket.numeroSalle;

console.log(texteAffiche );
console.log(ticket);
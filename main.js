

// creo loggetto studente
var studente = {
  nome: "Mario",
  cognome: "Rossi",
  anni: 44
}

// stampo le propietà delloggetto studente
for (var key in studente) {
  $("#studente").append("<li>" + key + ": " + studente[key] + "</li>");
}

// creo un array di oggetti studenti
var arrayStudenti = [
  {
    nome: "Luca",
    cognome: "Bianchi",
    anni: 33
  },
  {
    nome: "Matteo",
    cognome: "Neri",
    anni: 22
  },
  {
    nome: "Marco",
    cognome: "Verdi",
    anni: 11
  }
];
// stampo nome e cognome degli oggetti nellarray
for (var i = 0; i < arrayStudenti.length; i++) {
  $("#array-studenti").append("<li>Nome: " + arrayStudenti[i].nome + "-Cognome: " + arrayStudenti[i].cognome + "</li>")
}
// creare un nuovo oggetto tramite il click sul bottone
$("#button-obj").click(function () {
  var nuovoNome = prompt("Inserisci il nome");
  var nuovoCognome = prompt("Inserisci il cognnome");
  var nuovaEta = parseInt(prompt("Inserisci l'età"));
  var newobj = {
    nome: nuovoNome,
    cognome: nuovoCognome,
    anni: nuovaEta
  }
  // inserisco il nuovo oggetto nellarray
  arrayStudenti.push(newobj);
  // stampo nome e cognome del nuovo oggetto
  $("#array-studenti").append("<li>Nome: " + newobj.nome + "-Cognome: " + newobj.cognome + "</li>")
  console.log(arrayStudenti);
})

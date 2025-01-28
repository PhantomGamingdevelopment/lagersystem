// Eksempel 1: Endre tekst med knapp
document.getElementById("endrerTekst").addEventListener("click", function () {
    document.getElementById("overskrift").innerText = "Teksten har blitt endret!";
});

// Eksempel 2: Dynamisk liste
document.getElementById("leggTil").addEventListener("click", function () {
    let nyttElement = document.getElementById("nyttElement").value;
    if (nyttElement.trim() !== "") {
        let liste = document.getElementById("liste");
        let li = document.createElement("li");
        li.textContent = nyttElement;
        liste.appendChild(li);
        document.getElementById("nyttElement").value = "";
    } else {
        alert("Skriv inn noe for å legge til i listen!");
    }
});

// Eksempel 3: Objektmanipulasjon
// Definer person-objektet
let person = {
    navn: "Ola Nordmann",
    alder: 18,
    erStudent: true,
    hilse: function () {
        return "Hei, jeg heter " + this.navn + " og jeg er " + this.alder + " år gammel.";
    }
};
function oppdaterPerson(){
    document.getElementById("personInfo").innerText = person.hilse();
}

// Oppdater person-objektet når skjemaet sendes inn
document.getElementById("personForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Forhindrer at siden laster på nytt

    // Hent verdier fra input-feltene
    let nyttNavn = document.getElementById("navn").value;
    let nyAlder = document.getElementById("alder").value;

    // Oppdater person-objektet
    person.navn = nyttNavn;
    person.alder = parseInt(nyAlder);

    // Bekreft oppdatering til brukeren
    document.getElementById("personInfo").innerText = "Personopplysninger er oppdatert!";
    oppdaterPerson();
});

// Vis oppdatert personinformasjon når knappen trykkes
document.getElementById("visPerson").addEventListener("click", function () {
    oppdaterPerson();
});

// Eksempel 4: Bilstyring
let bil = {
    merke: "Toyota",
    modell: "Corolla",
    år: 2020,
    start: function () {
        return "Bilen starter!";
    },
    beskrivelse: function () {
        return this.merke + " " + this.modell + " (" + this.år + ")";
    }
};

document.getElementById("startBil").addEventListener("click", function () {
    document.getElementById("bilStatus").innerText = bil.start();
});

document.getElementById("visBilInfo").addEventListener("click", function () {
    document.getElementById("bilStatus").innerText = bil.beskrivelse();
});

// Eksempel 5: sortering
document.getElementById("sorterListe").addEventListener("click", function () {
    // Hent listen som en array av elementer
    let listeElementer = document.querySelectorAll("#usortertListe li");
    
    // Konverter NodeList til en array og sortér
    let sortertArray = Array.from(listeElementer)
        .map(li => li.textContent) // Hent tekstinnholdet
        .sort(); // Sortér alfabetisk
    
    // Tøm den eksisterende listen
    let liste = document.getElementById("usortertListe");
    liste.innerHTML = "";
    
    // Legg til de sorterte elementene tilbake i listen
    sortertArray.forEach(tekst => {
        let nyttElement = document.createElement("li");
        nyttElement.textContent = tekst;
        liste.appendChild(nyttElement);
    });
});
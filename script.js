console.log("script loaded successfully");

document.getElementById("Lagre").addEventListener("click", function () {
    alert("Alle endringer er nå lagret!");
});

document.getElementById("leggTilProdukt").addEventListener("click", function () {
    let error = ""; // samle alle feilkoder her

    // Produktnavn
    let produktNavn = document.getElementById("liste").value;
    if (produktNavn.trim() !== "") {
        let liste = document.getElementById("navn");
        let li = document.createElement("li");
        li.textContent = produktNavn;
        liste.appendChild(li);
        document.getElementById("liste").value = "";
    } else {
        error += "• Produktnavn ikke lagt til.\n";
    }

    // Antall
    let antall = document.getElementById("Leggtilantall").value;
    if (antall.trim() !== "") {
        let liste = document.getElementById("stk");
        let li = document.createElement("li");
        li.textContent = antall + " Stk";
        liste.appendChild(li);
        document.getElementById("Leggtilantall").value = "";
    } else {
        error += "• Antall ikke lagt inn eller er et ugyldig tall.\n";
    }

    // Beskrivelse
    let beskrivelse = document.getElementById("Beskrivelseelement").value;
    if (beskrivelse.trim() !== "") {
        let liste = document.getElementById("Beskrivelselist");
        let li = document.createElement("li");
        li.textContent = beskrivelse;
        liste.appendChild(li);
        document.getElementById("Beskrivelseelement").value = "";
    } else {
        error += "• Beskrivelse ikke lagt inn.\n";
    }

    // skal vise alle feilkodder samtidig
    if (error !== "") {
        alert("Følgende feil oppstod:\n" + error);
    }
});

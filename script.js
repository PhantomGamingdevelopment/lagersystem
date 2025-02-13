console.log("script loaded successfully");

document.getElementById("Lagre").addEventListener("click", function () {
    alert("Alle endringer er nå lagret!");;
});



document.getElementById("leggTilProdukt").addEventListener("click", function () {
    let nyttElement = document.getElementById("liste").value;
    if (nyttElement.trim() !== "") {
        let liste = document.getElementById("navn");
        let li = document.createElement("li");
        li.textContent = nyttElement;
        liste.appendChild(li);
        document.getElementById("liste").value = "";    
    } else {
        alert("Produktnavn ikke lagt til.");
    }
});

document.getElementById("leggTilProdukt").addEventListener("click", function () {
    let nyttElement = document.getElementById("Leggtilantall").value;
    if (nyttElement.trim() !== "") {
        let liste = document.getElementById("stk");
        let li = document.createElement("li");
        li.textContent =  nyttElement + " Stk";
        liste.appendChild(li);
        document.getElementById("Leggtilantall").value = "";
    } else {
        alert("Antall ikke lagt inn og eller er et ugyldig tall.");
    }
});


document.getElementById("leggTilProdukt").addEventListener("click", function () {
    let nyttElement = document.getElementById("Beskrivelseelement").value;
    if (nyttElement.trim() !== "") {
        let liste = document.getElementById("Beskrivelselist");
        let li = document.createElement("li");
        li.textContent = nyttElement;
        liste.appendChild(li);
        document.getElementById("Beskrivelseelement").value = "";
    } else {
        alert("Beskrivelse ikke lagt inn.");
    }
});
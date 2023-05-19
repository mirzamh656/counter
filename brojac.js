let brojac = 0;
let brojacPovecano = document.getElementById("brojanje");
let brojacSmanjeno = document.getElementById("brojanje");
let saveEl = document.getElementById("save-el");
let rst = brojac;

function povecaj() {
    brojac += 1;
    brojacPovecano.innerText = brojac;
}

function smanji() {
    brojac -= 1;
    brojacSmanjeno.innerText = brojac;
}

function sacuvaj() {
    let cuvanje = " " +  brojac + " - ";
    saveEl.textContent += cuvanje;
}

function restart() {
    document.getElementById("brojanje").innerText = rst;
    brojac = 0;
}
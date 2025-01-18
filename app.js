const nome = document.querySelector(".input-name");
const listaNomes = document.querySelector(".name-list");
const amigoSecreto = document.querySelector(".result-list");
let nomes = [];

function adcAmigo() {
    if (!nome.value) {
        alert("Adicione um nome..")
    } else {        
        nomes.push(nome.value);

        const item = document.createElement("li");
        item.textContent = nome.value;

        listaNomes.appendChild(item);
        nome.value = "";
    }
}

function sortearAmigo() {
    if (!nomes.length) {
        alert("Adicione os nomes primeiros, por favor.")
        amigoSecreto.textContent = "";

    } else {
        let numRandom = Math.floor(Math.random() * nomes.length);
        const item = document.createElement("li");
        item.style.whiteSpace = "pre-line";

        item.textContent = "O amigo secreto é: \n" + nomes[numRandom];
        amigoSecreto.appendChild(item);
    }

    nomes = [];
    nome.value = "";
    listaNomes.textContent = "";
}

//* Capitalizar Nombre ingresado
nome.addEventListener('input', function () {
    if (this.value.length) {
        const nomeCap = this.value.charAt(0).toUpperCase() + this.value.slice(1);
        this.value = nomeCap;
    }
});
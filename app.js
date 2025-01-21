let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let amigo = input.value;
    if (amigo) {
        amigos.push(amigo);
        input.value = "";
        actualizarLista();
    } else {
        alert("Por favor, inserte un nombre.")
    }
}

function actualizarLista () {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let amigo of amigos) {
        lista.innerHTML += `<li>${amigo}</li>`;
    }
}
function sortearAmigo() {
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    let resultado = document.getElementById("resultado");

    if (amigos.length <= 1) {
        alert("No hay suficientes amigos para sortear.")
    } else {
        resultado.innerHTML = `<li>${amigoSorteado}</li>`;
    }
}
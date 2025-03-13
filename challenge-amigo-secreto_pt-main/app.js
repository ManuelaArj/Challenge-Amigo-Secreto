let listaAmigos = [];

function adicionarAmigo() {
    let nome = document.getElementById("amigo").value.trim();
    
    if (nome && !listaAmigos.includes(nome)) {
        listaAmigos.push(nome);
        atualizarLista();
        document.getElementById("amigo").value = "";
    } else {
        alert("Digite um nome válido");
    }
}

function atualizarLista() {
    let ulListaAmigos = document.getElementById("listaAmigos");
    ulListaAmigos.innerHTML = listaAmigos.map(nome => `<li>${nome}</li>`).join('');
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("A lista está vazia! Adicione amigos antes de sortear.");
        return;
    }
    let sorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    document.getElementById("resultado").innerHTML = `<li>Amigo sorteado: ${sorteado}</li>`;
}
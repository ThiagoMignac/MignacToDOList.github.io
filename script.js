const button = document.querySelector("#botaoNovaTask");
const input = document.querySelector("#inputNovaTask");
const listaCompleta = document.querySelector("#toDoList");
// Criando array
let minhaListaDeItens = [];

// Fun��o para carregar os dados do localStorage (se existirem) quando a p�gina � carregada
function carregarDadosDoLocalStorage() {
    const listaSalva = localStorage.getItem('lista');
    if (listaSalva) {
        minhaListaDeItens = JSON.parse(listaSalva);
        mostrarTarefas();
    }
}

function adicionarNovaTarefa() {
    minhaListaDeItens.push(input.value);
    input.value = ""; // Limpa o campo de entrada ap�s adicionar
    mostrarTarefas(); // Chama a fun��o para atualizar a lista
    salvarNoLocalStorage(); // Salva a lista no localStorage ap�s a adi��o
}

function mostrarTarefas() {
    let novaLi = ""; // Inicializa a vari�vel novaLi

    minhaListaDeItens.forEach((task, index) => {
        novaLi += `
        <li>${task}<button id="lixo" onclick="deletarItem(${index})" >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></li>
        `;
    });

    listaCompleta.innerHTML = novaLi; // Atualiza o HTML da lista
}

function salvarNoLocalStorage() {
    localStorage.setItem('lista', JSON.stringify(minhaListaDeItens));
}

function deletarItem(index) {
    minhaListaDeItens.splice(index, 1); // Remove o item do array pelo �ndice
    mostrarTarefas(); // Atualiza a lista ap�s a exclus�o
    salvarNoLocalStorage(); // Salva a lista no localStorage ap�s a exclus�o
}

// Chame a fun��o para carregar dados do localStorage quando a p�gina � carregada
carregarDadosDoLocalStorage();

// Bot�o para sempre que clicar no BOT�O, adicionar a nova tarefa                       
button.addEventListener('click', adicionarNovaTarefa);

let exemplo = "Exemplo";

// Cria os li utilizando um input
let createLi = (input) => {
    let item = document.createElement('li');
    item.classList.add('list-item');

    // Cria o Check
    let checkBtn = document.createElement('button');
    checkBtn.id = 'item-check-btn';
    checkBtn.classList.add('btn-default');
    checkBtn.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    // Adiciona a possibilidade de ativar ou desativar o check
    checkBtn.addEventListener('click', function() {
        checkBtn.classList.toggle('item-check-btn');
    });
    item.appendChild(checkBtn);

    // Cria o p usando o input
    let textElement = document.createElement('p');
    textElement.classList.add('item-text');
    textElement.textContent = input;
    item.appendChild(textElement);

    // Cria o del btn
    let delBtn = document.createElement('button');
    delBtn.id = 'item-del-btn';
    delBtn.classList.add('btn-default', 'item-del-btn');
    delBtn.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
    delBtn.addEventListener('click', function() { // Deleta o elemento pai (li)
        item.remove();
    });
    item.appendChild(delBtn);

    document.getElementById('list').appendChild(item); 
};

// Executa funções ao carregar a pagina
document.addEventListener('DOMContentLoaded', function() {
    createLi(exemplo);
    document.getElementById('prompt').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Evita o comportamento padrão de submissão do formulário
            document.getElementById('prompt-btn').click(); // Simula o clique no botão principal
        }
    })
});

// Adiciona os elementos li utilizando o input
document.getElementById('prompt-btn').addEventListener('click', function () {
    let input = document.getElementById('prompt').value;
    if (input.trim() !== '') {
        createLi(input);
        document.getElementById('prompt').value = '';
    } else {
        alert('Por favor, insira um texto válido.');
    }
})
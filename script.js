
document.getElementById('prompt-btn').addEventListener('click', function () {
    let input = document.getElementById('prompt').value;
    if (input.trim() !== '') {
        
        // Cria o li
        let item = document.createElement('li');
        item.classList.add('list-item');

        // Cria o Check
        let checkBtn = document.createElement('button');
        checkBtn.classList.add('btn-default', 'item-check-btn');
        checkBtn.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        item.appendChild(checkBtn);

        // Cria o p usando o input
        let textElement = document.createElement('p');
        textElement.classList.add('item-text');
        textElement.textContent = input;
        item.appendChild(textElement);

        // Cria o del btn
        let delBtn = document.createElement('button');
        delBtn.classList.add('btn-default', 'item-del-btn');
        delBtn.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
        item.appendChild(delBtn);
        document.getElementById('list').appendChild(item);
    } else {
        alert('Por favor, insira um texto válido.');
    }
})
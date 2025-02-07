const listaContainer = document.querySelector('#itenscontainer');
const inputTarefa = document.querySelector('#task');
const btnAdd = document.querySelector('#add');

btnAdd.addEventListener('click', addTarefa);
// ao apertar o botao Enter, a tarefa é adicionada
inputTarefa.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
        e.preventDefault(); 
        addTarefa();
    }
});

function addTarefa() {
    const texto = inputTarefa.value.trim();
    if(texto === '') {
        alert('Digite uma tarefa!');
        return;
    }

    const div = document.createElement('div');
    div.classList.add('todo-item');
    const input = document.createElement('input');
    input.classList.add('checkbox');
    input.type = 'checkbox';
    const span = document.createElement('span');
    span.classList.add('txt')
    span.textContent = texto;
    const btnX = document.createElement('button');
    btnX.classList.add('delete-btn');
    btnX.textContent = 'X';
    //appendChild adiciona um elemento filho ao elemento pai    
    div.appendChild(input);
    div.appendChild(span);
    div.appendChild(btnX);
    listaContainer.appendChild(div);

    btnX.addEventListener('click', () => {
        div.remove();
    });

    inputTarefa.value = '';
    inputTarefa.focus();
}
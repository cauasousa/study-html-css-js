let input = document.getElementById('camp-text');
let btt = document.getElementById("btt");
let areaLista = document.getElementById('areaLista');
var contador = 0;

function insertionElement(){
    var newTask = input.value;
    contador += 1;
    if((newTask !== "") && (newTask !== null) && (newTask !== undefined)){
        areaLista.innerHTML = `<div id='${contador}' class="item">
                <div class="item-icone">
                    <i onclick='marcarTask(${contador})' id='icone_${contador}' class="mdi mdi-circle-outline"></i>
                </div>
                <div onclick='marcarTask(${contador})' class="item-name">
                    <p>${newTask}</p>
                </div>
                <div class="item-botao">
                    <button onclick='Delete(${contador})' class="delete"><i class="mdi mdi-delete">Deletar</i></button>
                </div>
            </div>` + areaLista.innerHTML;
        
        input.value = '';
        input.focus();
    }
}

input.addEventListener('keyup', function (event) {
    if(event.key === 'Enter') {
        event.preventDefault();
        btt.click();
    }
});


function Delete(index){
    var tarefa = document.getElementById(index);
    tarefa.remove();
}

function marcarTask(id) {
    var task = document.getElementById(id);
    var classe = task.getAttribute('class');

    console.log(classe);

    if(classe == "item"){
        task.classList.add('clicado');

        var icone = document.getElementById('icone_' + id);
        icone.classList.remove('mdi-circle-outline');
        icone.classList.add('mdi-check-circle');

        task.parentNode.appendChild(task);
    }   

    else if(classe == "item clicado"){

        task.classList.remove('clicado')

        var icone = document.getElementById('icone_' + id);
        icone.classList.remove('mdi-check-circle');
        icone.classList.add('mdi-circle-outline');
    }
    
}
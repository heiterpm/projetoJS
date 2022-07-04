let banco = [
    {'tarefa':'Estudar JS','status':''},
    {'tarefa':'Estudar PHP','status':'checked'},
    {'tarefa':'Assistir netflix','status':''}
]
const input = document.getElementById("nomeitm");
const lista =document.getElementById('lista');

const criarItem = (nomeitem,status='',id) =>{
    const item = document.createElement('label');
    item.classList.add('todo__item');
    item.innerHTML = `
    <input type="checkbox" ${status} data-id=${id}>
    <div>${nomeitem}</div>
    <input type="button" value="X"data-id=${id}>
    `    

    lista.appendChild(item);
}

input.addEventListener("keyup", function(event){
    event.preventDefault();
    if (event.key == "Enter") {
        banco.push({'tarefa': input.value, 'status':''})
        criarItem(input.value,'');
        input.value = '';
        
    }
});

const removeItem =(id)=>{
    banco.splice(id,1);
    renderScreen();
}
const atualizaItem =(id)=>{
    banco[id].status = banco[id].status==''? 'checked':'';
}

const clickItem = (evento) =>{
    var elemento =evento.target;
    if(elemento.type=='button'){
        var id = elemento.dataset.id
        removeItem(id);
    }
    else if(elemento.type=='checkbox'){
        var id = elemento.dataset.id;
        atualizaItem(id);
    }
}
lista.addEventListener('click', clickItem);

const cleanScreen = () =>{
    while (lista.firstChild){
        lista.removeChild(lista.lastChild);
    }
}

const renderScreen = () =>{
    cleanScreen();
    banco.forEach((item,id) =>criarItem(item.tarefa,item.status,id));
    console.log(banco)
}
renderScreen();
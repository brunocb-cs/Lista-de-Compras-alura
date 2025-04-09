
//Importando o Script de "createWeekDay"
import createWeekDay from "./createWeekDay.js";

let inputItem = document.getElementById("input-item");

let count = 0;//Contador da lista de compras

//Função "createListItem"
export function createListItem()
{
    //Se o input estiver vazio
    if(inputItem.value == ""){
        alert("Insira um item!");//Alerta para o usuário escrever algo no campo
        return;
    }

    const listItem = document.createElement("li");//Criando tag
    const containterListItem = document.createElement("div");//Criando tag
    containterListItem.classList.add("lista-item-container");//Adicionando uma clase ao "containerListItem"
    const inputCheckbox = document.createElement("input");//Criando tag
    inputCheckbox.type = "checkbox";//Especificando o tipo do input
    inputCheckbox.id = "checkbox" + count++;//Somando um no contador
    const itemName = document.createElement("p");//Criando tag
    itemName.innerText = inputItem.value;//Colocando o texto de "innerText" ficar igual a string do input

    //Se o checkbox do item for clicado
    inputCheckbox.addEventListener("click", function(){

        //Se o checkbox for checado
        if (inputCheckbox.checked){
            itemName.style.textDecoration = "line-through";//O nome do item vai ser traçado
        }
        else{//Se não
            itemName.style.textDecoration = "none";//O nome do item fica sem decoração
        }
    });

    //Exibindo tags
    containterListItem.appendChild(inputCheckbox);
    containterListItem.appendChild(itemName);
    listItem.appendChild(containterListItem);

    //Armazenando a função "createWeekDay"
    const dateComplete = createWeekDay();

    const itemDate = document.createElement("p"); //Criando o texo da data
    itemDate.innerText = dateComplete;//Passando o text da data para um paragrafo
    itemDate.classList.add("texto-data");//Adiciona uma classe há o itemDate

    listItem.appendChild(itemDate);//Exibindo o itemDate

    //Retorna o listItem pra função
    return listItem;
}
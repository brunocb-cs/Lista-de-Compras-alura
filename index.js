
import { createListItem } from "./Scripts/CreateListItem.js";
import verifyListNull from "./Scripts/verifyListNull.js";

//Pegando tags por id
const buyList = document.getElementById("lista-de-compras");
const buttonAdd = document.getElementById("adicionar-item");

//Quando o botão for pressionado a função "createListItem" vai ser chamada
buttonAdd.addEventListener("click", (evento) => {

    evento.preventDefault();//Impede autocarregamento da página ao enviar o input
    const listItem = createListItem();//Torna a função "createListItem" em uma variavél/tag
    buyList.appendChild(listItem);//Exibe o list item
    verifyListNull(buyList);//Chama a função "verifyListNull"
});

//Chama a função "verifyListNull"
verifyListNull(buyList);
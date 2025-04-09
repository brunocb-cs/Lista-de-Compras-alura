
//Pegando a mensagem de carrinho vazio pela classe
const mensageListNull = document.querySelector(".mensagem-lista-vazia");

//Função "verifyListNull" que retorna a lista de compra
function verifyListNull(buyList){
    const listItens = buyList.querySelectorAll("li");//Armazena os itens da lista

    //Se o tamanho da lista for 0, ou seja vazia
    if (listItens.length === 0){
        mensageListNull.style.display = "block";//A mensagem vai ser exibida
    }else{//Se não
        mensageListNull.style.display = "none";//A mensagem para de ser exibida
    }
}

//exportando a função
export default verifyListNull;
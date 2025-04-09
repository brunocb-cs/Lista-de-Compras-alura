
//Função que cria o dia da semana
function createWeekDay(){

    //Pega o dia da semana (em pt-BR, e sem abreviação)
    const weekDay = new Date().toLocaleDateString("pt-BR", {
        weekday: "long"
    });
    const date = new Date().toLocaleDateString("pt-BR"); //Criando o texo da data
    const hour = new Date().toLocaleTimeString("pt-BR", { //Criando o texo do horário (hora e minutos em numerico)
        hour: "numeric",
        minute: "numeric"
    });
    const dateComplete = `${weekDay} (${date}) às ${hour}`;//Organiza todas as datas em uma só

    //Retorna a data completa
    return dateComplete;
}

//Exporta a função
export default createWeekDay;
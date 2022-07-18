let totalCalories = 0 
/*
-> nao queria deixar essa variavel jogada aqui, seria o conceito de programacao funcional caso eu a deixasse dentro da funcao abaixo, e depois usasse como parametro onde a chamar? 
-> ja testei algumas formas, *buscar uma solucao*
*/

function calculateCalories(infos) {
    let calorieByMeal = parseInt(infos.calories)
    totalCalories += calorieByMeal 

    return totalCalories
}

function removeCalories(infos) {
    let calorieByMeal = parseInt(infos.calories)
    totalCalories -= calorieByMeal

    return totalCalories
}
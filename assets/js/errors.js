function validateInputs(form) {
    let arrayErrors = []

    if(form.food.value == '') {
        arrayErrors.push('*Coloque pelo menos um alimento.')
    }

    if(form.calories.value == '' || form.calories.value < 0) {
        arrayErrors.push('*Valor calórico inválido.')
    }

    return arrayErrors.join('\n')
}

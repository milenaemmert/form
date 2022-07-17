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

const inputCalories = document.querySelector('#inputCalories')
inputCalories.onkeypress = (e) => {
    const charCode = e.charCode ? e.charCode : e.keyCode   
    if (inputCalories.value.length >= 4 || (charCode >= 43 && charCode <= 46) || charCode == 101) {
        return false
    }
}

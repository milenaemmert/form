const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()  
    
    const infos = getInfos(form)     
    
    const errors = validateInputs(form)
    if(errors.length > 0) {
        validateInputs(form)
        alert(errors)
        return
    }
    
    const tr = createTr(infos)
    const table = document.querySelector('#meal-table')
    table.parentElement.classList.remove('invisible')
    table.appendChild(tr)
    
    setCaloriesConsumed(infos)

    form.reset()
})

function getInfos(form) {
    let infos = {
        food: form.food.value,
        calories: form.calories.value,
        meal: form.meal.value
    }

    return infos
}

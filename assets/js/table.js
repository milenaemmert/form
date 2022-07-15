function createTr(infos) {
    var tr = document.createElement('tr')

    tr.appendChild(createTd(infos.food))
    tr.appendChild(createTd(infos.calories))
    tr.appendChild(createTd(infos.meal))

    return tr
}

function createTd(dado) {
    var td = document.createElement('td')
    td.textContent = dado

    return td
}

function setCaloriesConsumed(infos) {
    const tdCaloriesConsumed = document.querySelector('#tdCaloriesConsumed')
    tdCaloriesConsumed.innerText = `Calorias consumidas: ${calculateCalories(infos)} kcal`
}
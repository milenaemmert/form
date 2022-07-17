function createTr(infos) {
    var tr = document.createElement('tr')

    tr.appendChild(createTd(infos.food))
    tr.appendChild(createTd(infos.calories))
    tr.appendChild(createTd(infos.meal))

    return tr
}

function createTd(data) {
    var td = document.createElement('td')
    td.textContent = data.charAt(0).toUpperCase() + data.substr(1)
    return td
}

function setConsumed(infos) {
    const tdCaloriesConsumed = document.querySelector('#tdCaloriesConsumed')
    tdCaloriesConsumed.innerText = `Calorias consumidas: ${calculateCalories(infos)} kcal`
}

function setWaterConsumed(amountOfWater) {
    const tdWaterConsumed = document.querySelector('#tdWaterConsumed')
    
    if(amountOfWater == 0) {
        tdWaterConsumed.innerText = `Beba água!`
    } else {
        tdWaterConsumed.innerText = `Água ingerida: ${amountOfWater} ml`
    }
}


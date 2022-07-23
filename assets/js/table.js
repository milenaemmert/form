function createTr(infos) {
    const tr = document.createElement('tr')
    
    tr.appendChild(createTd(infos.food))
    tr.appendChild(createTd(infos.calories))
    tr.appendChild(createTd(infos.meal))

    tr.lastElementChild.classList.add('td__delete')
    const containerDelete = createDeleteIcon()
    tr.lastElementChild.appendChild(containerDelete)

    containerDelete.addEventListener('click', function() {
        tr.classList.add('fade-out')
        setTimeout(function(){
            tr.remove()
        }, 500) 
    
        setConsumed(infos, removeCalories)
        checkIfTableContainsTr()
    })

    return tr
}

function createDeleteIcon() {
    const containerDelete = document.createElement('div')
    containerDelete.innerHTML = '<img id="imgDelete" src="assets/imgs/delete.png" alt="Botão de deletar." class="button__delete">'

    return containerDelete
}

function createTd(data) {
    const td = document.createElement('td')
    td.textContent = data.charAt(0).toUpperCase() + data.substr(1)

    return td
}

function setConsumed(infos, func) {
    const tdCaloriesConsumed = document.querySelector('#tdCaloriesConsumed')
    tdCaloriesConsumed.innerText = `Calorias consumidas: ${func(infos)} kcal`
}

function setWaterConsumed(amountOfWater) {
    const tdWaterConsumed = document.querySelector('#tdWaterConsumed')
    
    if(amountOfWater == 0) {
        tdWaterConsumed.innerText = `Beba água!`
    } else {
        tdWaterConsumed.innerText = `Água ingerida: ${amountOfWater} ml`
    }
}


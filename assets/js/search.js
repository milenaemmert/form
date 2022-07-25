const searchButton = document.querySelector('#searchButton')
const exitButton = document.querySelector('#exitButton')
searchButton.addEventListener('click', openContainer)
exitButton.addEventListener('click', closeContainer)

function openContainer() {
    searchButton.classList.add('invisible')
    exitButton.classList.remove('invisible')
    const searchAndResultContainer = document.querySelector('#searchAndResultContainer')
    searchAndResultContainer.classList.remove('invisible')
}

function closeContainer() {
    searchButton.classList.remove('invisible')
    exitButton.classList.add('invisible')
    searchAndResultContainer.classList.add('invisible')
    inputSearch.value = ''
    responseText.innerText = 'Procure por um alimento ao lado.'
}

const searchButtonAPI = document.querySelector('#searchButtonAPI')
searchButtonAPI.addEventListener('click', () => {
    const inputSearch = document.querySelector('#inputSearch').value.toLowerCase()   

    if (inputSearch == '') {
        checkSearch(document.querySelector('#inputSearch'))
    }

    requestAPI(inputSearch)
})

function requestAPI(inputSearch) {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', `http://localhost:3000/food?name=${inputSearch}`)

    xhr.addEventListener('load', () => {
        const responseText = document.querySelector('#responseText')
        const response = JSON.parse(xhr.responseText)

        response.find(elem => {
            if(inputSearch == elem.name)  {
                responseText.innerText = `${elem.name.toUpperCase()}: ${elem.calories} kcal (${elem.amount})`
            } 
        })

        if(response.length === 0 || inputSearch.length === 0) {
            responseText.innerText = 'Tente novamente.'
            checkSearch(responseText.parentElement)
        }
    })

    xhr.send()
}
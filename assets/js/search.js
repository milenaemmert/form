const searchButton = document.querySelector('#searchButton')

searchButton.addEventListener('click', () => {
    const containerSearch = document.querySelector('.container-search')
    containerSearch.classList.remove('invisible')

    const hideElement = document.querySelector('.hide') 
    hideElement.style.display = 'none' //nao consegui aplicar classList em algo com display flex *pesquisar depois*
    
})

/*
const searchAPI = document.querySelector('#searchAPI')
searchAPI.addEventListener('click', () => {
    const inputSearch = document.querySelector('#inputSearch').value
    const xhr = new XMLHttpRequest()

    => problema com CORS
}) */
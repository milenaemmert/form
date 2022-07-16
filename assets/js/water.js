const bottlesNodeList = document.querySelectorAll('.water')
const bottles = Object.values(bottlesNodeList)
let amountOfWater = 0
const arrayTotalWater = []

bottles.forEach(elem => {
    elem.addEventListener('click', () => {
        let drankWater
        const srcImg = elem.getAttribute('src')
        if(srcImg.includes('assets/imgs/bottle.png')) {
            elem.setAttribute('src', 'assets/imgs/empty-bottle.png')
            drankWater = true
            const amountOfWater = trackWater(drankWater)
            setWaterConsumed(amountOfWater)
        } else {
            elem.setAttribute('src', 'assets/imgs/bottle.png')
            drankWater = false
            const amountOfWater = trackWater(drankWater)
            setWaterConsumed(amountOfWater)
        }
    })
})

function trackWater(arg) {
    arg == true ? arrayTotalWater.push(500) : arrayTotalWater.push(-500)
    const amountOfWater = calculateWater(arrayTotalWater)
    return amountOfWater
}

function calculateWater(arrayTotalWater) {
    amountOfWater = arrayTotalWater.reduce((ml, i) => { return ml + i })
    return amountOfWater
}

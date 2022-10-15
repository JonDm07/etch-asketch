const body = document.querySelector('body')
const container = document.querySelector('.container')
const grid = document.querySelectorAll('.grid')


function a (a, b) {
    container.style.gridTemplateColumns = `repeat(${a}, 22px)`
    container.style.gridTemplateRows = `repeat(${b}, 22px)`
    a *= b
    for (i = 0; i < a; i++) {
        let div = document.createElement('div')
        div.classList.add('grid')
        container.appendChild(div)
        
        
    }

}

const btn = document.querySelector('button')
btn.addEventListener('click', () => {
    const grid = document.querySelectorAll('.grid')
    grid.forEach(gr => {
        container.removeChild(gr)
    })
    let num = prompt('Please enter a number for the grid. Max 100')
    if (num > 100) {
        num = prompt('Max 100!')
    };
    a(num, num)
    const div = document.querySelectorAll('.grid')
    div.forEach(d => {
        d.addEventListener('mouseover', (e) => {
            e.stopPropagation()
            d.style.backgroundColor = `black`
     })
        
        
    })

})

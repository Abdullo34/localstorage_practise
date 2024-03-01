const ul = document.querySelector('ul')
const button = document.querySelector('button')


button.addEventListener('click', () => {
    const li = document.createElement('li')
    li.textContent = 'Something new version 😒'
    ul.appendChild(li)
})


ul.addEventListener('click', (e) => {
    if(e.target.nodeName == 'LI'){
        e.target.remove()
    }
})

// nodeName bosil bu elementni boyicha 

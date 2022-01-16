const find = document.querySelector('.find')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('click', () => {
    find.classList.toggle('active')
    input.focus()
})
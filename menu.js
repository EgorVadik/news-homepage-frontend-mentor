const openBtn = document.getElementById('openBtn')
const closeBtn = document.getElementById('closeBtn')
const close = document.getElementById('close')
const menu = document.getElementById('menu')

openBtn.addEventListener('click', () => {
    menu.classList.remove('hidden')
})

closeBtn.addEventListener('click', () => {
    menu.classList.add('hidden')
})

close.addEventListener('click', () => {
    menu.classList.add('hidden')
})

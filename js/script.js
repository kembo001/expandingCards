// Varibles
const panels = document.querySelectorAll('.panel')


panels.forEach((panels) => {
    panels.addEventListener('click', () => {
        removeactiveclasses()
        console.log(123)
        panels.classList.add('active')
    })
})

// Functions

function removeactiveclasses() {
    panels.forEach((panels) => {
        panels.classList.remove('active')
    })
}
const sections = document.querySelectorAll('.section')

window.addEventListener('scroll', checkSections)

checkSections()

function checkSections() {
    // window.innerHeight - show where we are in a site

    const triggerBotton = window.innerHeight / 5 * 4

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top

        if (sectionTop < triggerBotton) {
            section.classList.add('show')
        } else {
            section.classList.remove('show')
        }
    })
}
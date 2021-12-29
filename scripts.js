// Scrollspy
var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbarMain',
    offset: 100,
})

//Close
const navLinks = document.querySelectorAll('.nav-link')
const menuToggle = document.getElementById('navbarNav')
const bsCollapse = new bootstrap.Collapse(menuToggle)
navLinks.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse.toggle() })
})
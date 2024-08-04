/* Header Navigation */
const $mobileNavModal = document.getElementById('mobile-nav-modal')
const $mobileNavClose = document.getElementById('mobile-nav-close')
const $mobileNavOpen = document.getElementById('mobile-nav-open')
const $mobileNavLinks = document.getElementsByClassName('nav-link')

const OPEN_CSS_CLASS = 'is-open'

$mobileNavOpen.onclick = () => $mobileNavModal.classList.add(OPEN_CSS_CLASS)
$mobileNavClose.onclick = () => $mobileNavModal.classList.remove(OPEN_CSS_CLASS)

for (const element of $mobileNavLinks) {
    element.onclick = () => $mobileNavModal.classList.remove(OPEN_CSS_CLASS)
}
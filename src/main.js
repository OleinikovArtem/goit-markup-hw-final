/* Header Navigation */
const $mobileNavModal = document.getElementById('mobile-nav-modal')
const $mobileNavClose = document.getElementById('mobile-nav-close')
const $mobileNavOpen = document.getElementById('mobile-nav-open')

const OPEN_CSS_CLASS = 'is-open'

$mobileNavOpen.onclick = () => $mobileNavModal.classList.add(OPEN_CSS_CLASS)
$mobileNavClose.onclick = () => $mobileNavModal.classList.remove(OPEN_CSS_CLASS)
/* Header Navigation */
const $mobileNavModal = document.getElementById('mobile-nav-modal')
const $mobileNavClose = document.getElementById('mobile-nav-close')
const $mobileNavOpen = document.getElementById('mobile-nav-open')

console.log('mobileNavModal', $mobileNavModal);
console.log('mobileNavClose', $mobileNavClose);
console.log('mobileNavOpen', $mobileNavOpen);

const OPEN_CSS_CLASS = 'is-open'

$mobileNavOpen.onclick = () => $mobileNavModal.classList.add(OPEN_CSS_CLASS)
$mobileNavClose.onclick = () => $mobileNavModal.classList.remove(OPEN_CSS_CLASS)
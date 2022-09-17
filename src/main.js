import './styles/style.css'
import { gsap } from 'gsap'

// <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.1/gsap.min.js"></script>
// <script src="https://jn3rn6.csb.app/index.js"></script>

const btnMenuOpen = document.querySelector('.nav_hamburger-wrap')
const btnMenuClose = document.querySelector('.nav_expand-hamburger-close')

let tl = gsap.timeline({ paused: true })
    .from('.nav_expand', {
        height: '0vh',
        duration: 0.7,
        ease: "power3.Out"
    })
    .to('.main-wrapper', {
        borderRadius: '20px 20px 0px 0px',
        duration: 0.8,
        scaleX: 0.97,
        backgroundColor: 'rgb(255, 255, 255, 0.8)',
        ease: "power1.inOut"
    }, "<")
    .from('.nav_expand-link-text', {
        opacity: 0,
        yPercent: 100,
        stagger: 0.04,
        ease: "power3.out"
    }, '-=0.5')
    .from('.is-gsap-nav', {
        opacity: 0,
        ease: "power0.out",
    }, '-=0.4')




btnMenuOpen.addEventListener('click', () => {
    tl.play()
})

btnMenuClose.addEventListener('click', () => {
    tl.reverse()
})
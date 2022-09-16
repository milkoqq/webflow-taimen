import './styles/style.css'
import { gsap } from 'gsap'

// <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.1/gsap.min.js"></script>
// <script src="https://jn3rn6.csb.app/index.js"></script>

let tl = gsap.timeline()

tl.from('.nav_expand', {
    height: '0vh',
    duration: 0.5
})
    .to('.nav', {
        borderRadius: '20px 20px 0px 0px',
        duration: 1,
        scaleX: 0.95
    })
    .from('.nav_expand-link-text', {

        opacity: 0,
        yPercent: 100,
        stagger: 0.05
    })


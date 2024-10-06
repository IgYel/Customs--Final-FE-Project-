import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

//! Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

let endOfScroller = 0;

function isTouchDevice() {
  return ('ontouchstart' in window) || window.matchMedia('(hover: none) and (pointer: coarse)').matches;
} // to understand if it is a PC or touchscreen device

document.addEventListener('DOMContentLoaded', () => {

  if (window.innerWidth > 1100){
    const hScrollContainer = document.querySelector('.hScrollContainer');
    const hScroll = document.querySelector('.hScroll');
    const scrollSpeed = 0.7;
  
    const endPosition = () => (hScroll.scrollWidth - window.innerWidth) * (1 / scrollSpeed);
    const endofScroll = () => (hScroll.scrollWidth * 1.13);

    gsap.to(hScroll, {
      x: () => -(hScroll.scrollWidth - window.innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: hScrollContainer,
        start: "top top",
        end: () => `+=${endPosition()}`,
        scrub: 1,
        pin: true,
      }
    });
    endOfScroller = endofScroll;
  }

  //* add reload if resized scale for PC device

  window.addEventListener('resize', () => {
    if (window.innerWidth > 1300) {
      if(isTouchDevice()){
        location.reload(); //* reload page
      }
    }
  });

});
// //*Mobile header scroll code

// Scroll to for GSAP
function scrollTo(Element){
  gsap.to(window, {
    duration: 1,
    scrollTo: Element,
    ease: "power3.inOut"
  });
}

//* Onload functions for scroll

let currentPosition = 0;
let onLoadPosition = 0;

window.addEventListener('scroll', () => {
  currentPosition = Math.round(window.scrollY || window.pageYOffset);
});

window.addEventListener("DOMContentLoaded", ()=>{
  setTimeout(function(){
    onLoadPosition = currentPosition;

    gsap.to(window, {
      duration: 0.25,
      scrollTo: ".hScrollContainer",
      ease: "power2.inOut"
    });
  }, 550);

  setTimeout(function(){
    gsap.to(window, {
      duration: 0.5,
      scrollTo: onLoadPosition,
      ease: "power2.inOut"
    });
  }, 800)
});

//* if windows are opened

document.querySelector('#BestModelsButton').onclick = () =>{
  scrollTo("#hScroll");
}
document.querySelector('#bestModels').onclick = () =>{
  scrollTo("#hScroll");
}
document.querySelector('#AboutHeaderButton').onclick = () =>{
  scrollTo("#ContactSectionID");
}

document.querySelector('#aboutButton').onclick = () =>{
  scrollTo("#ContactSectionID");
}

document.querySelector('#ArrowButtonID').onclick = () =>{
  scrollTo(endOfScroller);
}

const hScrollHeader = document.querySelector('.hScrollHeader');
hScrollHeader.classList.add('headerHide');

let startX = 0;
let endX = 0;
const threshold = 50; // Минимальная длина свайпа, чтобы считать его валидным

document.addEventListener('touchstart', function (event) {
  startX = event.touches[0].clientX; // Считываем начальную точку по оси X
}, false);

document.addEventListener('touchend', function (event) {
  endX = event.changedTouches[0].clientX; // Считываем конечную точку по оси X
  handleSwipe(); // Вызываем функцию обработки свайпа
}, false);

function handleSwipe() {
  const diffX = endX - startX;

  if (Math.abs(diffX) > threshold) {
    if (diffX > 0) {
      // Свайп вправо
      hScrollHeader.classList.remove('headerHide');
    } else {
      // Свайп влево
      hScrollHeader.classList.add('headerHide');
    }
  }
}

export default {};
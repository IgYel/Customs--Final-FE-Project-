import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

//! Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

let endOfScroller = 0;

document.addEventListener('DOMContentLoaded', () => {
  const hScrollContainer = document.querySelector('.hScrollContainer');
  const hScroll = document.querySelector('.hScroll');

  const scrollSpeed = 0.7;

  const endPosition = () => (hScroll.scrollWidth - window.innerWidth) * (1 / scrollSpeed);
  const endofScroll = () => (hScroll.scrollWidth * 1.13);

  window.addEventListener('resize', () => {
    location.reload();
  });

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
});

//*Mobile header scroll code

function handleResize() {
  if (window.innerWidth <= 1100) {
    let lastScrollX = 0; // Для хранения последнего значения translateX
    let scrollDirection = ''; // Направление скролла (forward - вниз, backward - вверх)
    let lastTranslate; // Переменная, обновляющаяся при начале скролла
    let forwardUpdated = false; // Флаг для скролла вперёд
    let backwardUpdated = false; // Флаг для скролла назад
    
    function updateScrollPosition() {
      const hScroll = document.querySelector('#hScroll');
      const hScrollHeader = document.querySelector('.hScrollHeader');
      let currentHeaderTranslate = 0;
    
      // Получаем текущее значение translateX из transform
      const style = window.getComputedStyle(hScroll);
      const matrix = new WebKitCSSMatrix(style.transform); // Читаем текущее значение transform
      const currentTranslateX = Math.abs(matrix.m41); // Получаем X координату (m41 для matrix3d)
    
      //* Скролл идёт вперёд
      if (lastScrollX < currentTranslateX) {
        scrollDirection = 'forward';
    
        // Обновляем lastTranslate только при начале скролла вперёд
        if (!forwardUpdated) {
          lastTranslate = currentTranslateX;
          forwardUpdated = true;
          backwardUpdated = false; // Сбрасываем флаг для обратного скролла
        }
    
        if (lastTranslate >= (currentTranslateX - 150)) {
          currentHeaderTranslate = currentTranslateX - lastTranslate;
          hScrollHeader.style.left = `-${currentHeaderTranslate}px`;
        } else if (lastTranslate < (currentTranslateX - 150)) {
          hScrollHeader.style.left = `-30vw`;
        }
      }
    
      //* Скролл идёт назад
      else if (currentTranslateX < lastScrollX) {
        scrollDirection = 'backward';
    
        // Обновляем lastTranslate только при начале скролла назад
        if (!backwardUpdated) {
          lastTranslate = currentTranslateX;
          backwardUpdated = true;
          forwardUpdated = false; // Сбрасываем флаг для скролла вперёд
        }
        hScrollHeader.style.left = `${lastTranslate - (lastScrollX + 150)}px`;
        if ((lastTranslate - (lastScrollX + 150)) > 0) {
          hScrollHeader.style.left = '0';
        }
      }
    
      // Сохраняем последнее значение translateX
      lastScrollX = currentTranslateX;
    
      // Чтобы обновления происходили при скролле
      requestAnimationFrame(updateScrollPosition);
    }
    
    // Запускаем отслеживание при загрузке страницы
    document.addEventListener('DOMContentLoaded', () => {
      updateScrollPosition();
    });
  }
}

handleResize();
window.addEventListener('resize', handleResize);


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

//*if windows are opened


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

export default{};
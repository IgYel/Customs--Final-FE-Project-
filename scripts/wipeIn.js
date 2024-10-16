import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function WipeElement(elementClass, classAdd, delay, transition, persent) {
    const element = document.querySelector(elementClass);
    element.classList.add(classAdd);
    const delayInMs = Number(delay) * 1000;

    ScrollTrigger.create({
        start: `top ${persent}%`, // Начало триггера
        trigger: element,
        onEnter: () => {
            element.style.animation = `wipeIn ${delay}s ${transition} forwards`; // Добавление анимации как стиль
            setTimeout(() => {
                element.classList.remove(classAdd);
                element.style.animation = "";
            }, delayInMs);
        }
    });
}
setTimeout(() => {
    WipeElement(".HeaderContainer", 'WipeHeader', 0.7, "ease", 70);
    WipeElement(".languageSwitchButton", 'wipeLanguage', 0.7, "ease", 100);

    WipeElement(".Lamp", 'wipeLamp', 0.4, "cubic-bezier(.21,-0.01,.28,1.37)", 70);

    WipeElement(".hScrollContainer", 'wipeIn', 0.5, "ease", 70);
    
    WipeElement(".ContactSection", 'wipeIn', 1.2, "ease", 70);

    WipeElement(".headerTitle", 'wipeContactTitle', 0.7, "ease-in-out", 70);
    WipeElement(".headerContButtons", 'wipeContactButtons', 0.7, "ease-in-out", 70);
}, 1300);

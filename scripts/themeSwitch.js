const LampLight = document.querySelector('#LampLight');
const LampDark = document.querySelector('#LampDark');
const light = document.getElementById('Light');

// Функция для установки темы
function setTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark');
        document.body.classList.remove('light');
        LampDark.style.opacity = '1';
        light.style.opacity = '1';
        LampLight.style.opacity = '0';
    } else {
        document.body.classList.add('light');
        document.body.classList.remove('dark');
        LampDark.style.opacity = '0';
        light.style.opacity = '0';
        LampLight.style.opacity = '1';
    }
    localStorage.setItem('theme', theme); // Сохранение темы в localStorage
}

// Проверка сохранённой темы при загрузке страницы
const savedTheme = localStorage.getItem('theme') || 'light'; // По умолчанию 'light'
setTheme(savedTheme);

// Анимация для переключения на тёмную тему
function lightOnAnimation() {
    LampLight.style.opacity = 1;
    LampDark.style.opacity = 0;
    light.style.opacity = 0;

    setTimeout(() => {
        LampDark.style.opacity = 0.6;
        light.style.opacity = 0.6;
    }, 500); // pre-on

    setTimeout(() => {
        LampDark.style.opacity = 0;
        light.style.opacity = 0;
    }, 580); // off
    
    setTimeout(() => {
        LampDark.style.opacity = 1;
        light.style.opacity = 1;
    }, 750);// pre-on 2 
    
    setTimeout(() => {
        LampDark.style.opacity = 0;
        light.style.opacity = 0;
    }, 830);// off

    setTimeout(() => {
        LampLight.style.opacity = 0;
        LampDark.style.opacity = 1;
        light.style.opacity = 1;
    }, 900);// normal on
}

// Переключение на тёмную тему
LampLight.onclick = () => {
    setTheme('dark');
    lightOnAnimation();
};

// Переключение на светлую тему
LampDark.onclick = () => {
    setTheme('light');
};

export default {};

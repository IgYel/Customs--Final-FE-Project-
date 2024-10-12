const LampLight = document.querySelector('#LampLight');
const LampDark = document.querySelector('#LampDark');
const light = document.getElementById('Light');
let isAnimating = false; //flag to prevent d-click bugs

function blink() {
    // Устанавливаем начальные состояния
    LampDark.style.opacity = 0.7;
    LampLight.style.opacity = 0;
    light.style.opacity = 0.6;
    

    // Через 150 мс возвращаем лампу в нормальное состояние
    setTimeout(() => {
        LampDark.style.opacity = 1;
        light.style.opacity = 1;

        if(savedTheme == 'dark'){
            LampLight.style.opacity = 0;
        } else{
            LampLight.style.opacity = 1;
        }
    }, 75);
}

function getRandomDelay(max) {
    return Math.floor(Math.random() * max);
}

let flickeringTimeouts = []; // массив для хранения таймаутов мигания

// Функция для сброса всех таймаутов мигания
function stopFlickering() {
    flickeringTimeouts.forEach(timeout => clearTimeout(timeout));
    flickeringTimeouts = []; // очищаем массив
}

const LampFlickering = () => {
    // Получаем случайную задержку до 10000 мс
    let delay = getRandomDelay(10000);

    // Включаем рекурсивное мигание с разной задержкой
    const timeout = setTimeout(() => {
        blink();
        
        // Между миганиями задержка от 0 до 350 мс
        let nextDelay = getRandomDelay(350);

        const nextTimeout = setTimeout(() => {
            blink();
            
            const finalTimeout = setTimeout(() => {
                blink();

                LampFlickering(); // Рекурсивно запускаем мигание
            }, nextDelay);

            flickeringTimeouts.push(finalTimeout); // добавляем таймаут
        }, nextDelay);

        flickeringTimeouts.push(nextTimeout); // добавляем таймаут
    }, delay);

    flickeringTimeouts.push(timeout); // добавляем таймаут
}

// theme set function
function setTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark');
        document.body.classList.remove('light');
        LampDark.style.opacity = '1';
        light.style.opacity = '1';
        LampLight.style.opacity = '0';

        LampFlickering(); // запуск мигания
    } else {
        document.body.classList.add('light');
        document.body.classList.remove('dark');
        LampDark.style.opacity = '0';
        light.style.opacity = '0';
        LampLight.style.opacity = '1';
    }
    localStorage.setItem('theme', theme); // save to localStorage
}

// test if there is ls save
const savedTheme = localStorage.getItem('theme') || 'light'; // Default = 'light'
setTheme(savedTheme);

// Dark theme animation
function lightOnAnimation() {
    LampLight.style.opacity = 1;
    LampDark.style.opacity = 0;
    light.style.opacity = 0;

    setTimeout(() => {
        LampDark.style.opacity = 0.6;
        light.style.opacity = 0.6;
    }, 750); // pre-on

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
        isAnimating = false; // блокируем анимацию

        LampFlickering(); // запуск мигания после окончания анимации
    }, 900);// normal on
}

//? Volume functions

let volumeLevel = 0.5;
const soundOnButton = document.querySelector('#soundOnButton');
let isContainerOpened = false;
let closeTimeout; // Переменная для хранения таймера
let isHoveringButton = false; // Переменная для отслеживания наведения на кнопку

soundOnButton.onclick = () => {
    const soundBarContainer = document.querySelector('.soundBarContainer');

    // Открываем контейнер и добавляем класс
    soundBarContainer.classList.add('openContainer');
    clearTimeout(closeTimeout); // Сбрасываем предыдущее действие таймера

    isContainerOpened = true; // Устанавливаем флаг, что контейнер открыт

    // Запускаем таймер для закрытия, если мышка не наведена на кнопку
    if (!isHoveringButton) {
        closeTimeout = setTimeout(() => {
            soundBarContainer.classList.remove('openContainer');
            isContainerOpened = false;
        }, 3000);
    }
};

// Обработчик наведения на кнопку
soundOnButton.onmouseenter = () => {
    isHoveringButton = true;
    clearTimeout(closeTimeout); // Останавливаем таймер, если курсор на кнопке
};

// Обработчик, когда мышь покидает кнопку
soundOnButton.onmouseleave = () => {
    isHoveringButton = false;
    
    // Устанавливаем таймер для закрытия контейнера только после ухода мышки
    closeTimeout = setTimeout(() => {
        const soundBarContainer = document.querySelector('.soundBarContainer');
        soundBarContainer.classList.remove('openContainer');
        isContainerOpened = false;
    }, 3000);
};

const speakerON = document.querySelector('#speakerON');
const speakerOFF = document.querySelector('#speakerOFF');
const soundBarContainer = document.querySelector('.soundBarContainer');
const soundBar = document.querySelector('#soundBar');

// Событие нажатия на кнопку speakerON (отключение звука)
speakerON.onclick = () => {
    if (isContainerOpened) {
        speakerON.style.display = 'none';
        speakerOFF.style.display = 'block';

        // Ползунок падает в самый низ
        const containerHeight = soundBarContainer.getBoundingClientRect().height;
        soundBar.style.top = `${containerHeight}px`;

        // Обновляем громкость до 0
        volumeLevel = 0;
    }
};

// Событие нажатия на кнопку speakerOFF (включение звука)
speakerOFF.onclick = () => {
    if (isContainerOpened) {
        speakerON.style.display = 'block';
        speakerOFF.style.display = 'none';

        // Можно добавить здесь логику восстановления предыдущего уровня громкости
    }
};

const updateVolume = (newTop) => {
    const containerRect = soundBarContainer.getBoundingClientRect();
    let currentVolumeLevel = (100 - (newTop / containerRect.height) * 100) / 100;
    volumeLevel = currentVolumeLevel;
};

const moveSoundBar = (event) => {
    const containerRect = soundBarContainer.getBoundingClientRect();
    
    // Вычисляем положение курсора относительно контейнера
    let newTop = event.clientY - containerRect.top;

    // Ограничиваем перемещение полосы внутри контейнера
    if (newTop < 0) {
        newTop = 0;
    }
    if (newTop > containerRect.height) {
        speakerON.style.display = 'none';
        speakerOFF.style.display = 'block';
        newTop = containerRect.height;
    } else {
        speakerON.style.display = 'block';
        speakerOFF.style.display = 'none';
    }

    // Устанавливаем новое значение для стиля top полосы
    soundBar.style.top = `${newTop}px`;

    // Обновляем уровень громкости
    updateVolume(newTop);
};

// Обработка нажатия мыши на контейнер
soundBarContainer.onmousedown = (e) => {
    e.preventDefault(); // Отключаем стандартное поведение браузера

    // При нажатии мыши сразу обновляем положение полосы
    moveSoundBar(e);

    // Отслеживание движения мыши
    document.onmousemove = moveSoundBar;

    // Остановка отслеживания при отпускании кнопки мыши
    document.onmouseup = () => {
        document.onmousemove = null; // Останавливаем перемещение
    };
};

// Обработка одиночного нажатия (без движения мыши)
soundBarContainer.onclick = (e) => {
    moveSoundBar(e); // Обновляем положение полосы и громкость при клике
};

//sound play
import lampTurnOnSoundPath from '../sound/lampTurnOnSound.mp3';
import lampTurnOffSoundPath from '../sound/lampTurnOffSound.mp3';

const LampTurnOnSound = new Audio(lampTurnOnSoundPath);
const LampTurnOffSound = new Audio(lampTurnOffSoundPath);

const updateVolumeLevel = () => {
    LampTurnOnSound.volume = volumeLevel;
    LampTurnOffSound.volume = volumeLevel;
};

// switch to dark theme
LampLight.onclick = () => {
    if (!isAnimating) {
        setTheme('dark');
        isAnimating = true; // блокируем переключение во время анимации
        lightOnAnimation();

        updateVolumeLevel()

        // Останавливаем звук выключения
        LampTurnOffSound.pause();
        LampTurnOffSound.currentTime = 0;

        // Воспроизводим звук включения
        LampTurnOnSound.play();
    }
};
//? set volume

// switch to light theme
LampDark.onclick = () => {
    if (!isAnimating) {
        setTheme('light');
        stopFlickering(); // останавливаем мигание

        updateVolumeLevel()

        // Останавливаем звук включения
        LampTurnOnSound.pause();
        LampTurnOnSound.currentTime = 0;
        
        // Воспроизводим звук выключения
        LampTurnOffSound.play();
    }
};


const Lamps = document.querySelector('.Lamps');
const hint = document.querySelector('.arrowHint');
hint.style.display = "block";

let showHint = true;
if(showHint === true){
    Lamps.onclick = () =>{
        showHint = false;
        hint.style.display = "none";
    }
}

export default {};
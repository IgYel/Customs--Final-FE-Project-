const LampLight = document.querySelector('#LampLight');
const LampDark = document.querySelector('#LampDark');
const light = document.getElementById('Light');
let isAnimating = false; //flag to prevent d-click bugs

// theme set function
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
        isAnimating = false; // block off
    }, 900);// normal on
}

// switch to dark theme
LampLight.onclick = () => {
    if (!isAnimating) {
        setTheme('dark');
        isAnimating = true; // block switching while animating
        lightOnAnimation();
    }
};

// switch to light theme
LampDark.onclick = () => {
    if (!isAnimating) {
        setTheme('light');
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
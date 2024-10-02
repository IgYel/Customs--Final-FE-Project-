document.addEventListener("DOMContentLoaded", () => {
  const cursor = document.getElementById("cursor");
  
  let mouseX = 0,
    mouseY = 0;
  let cursorX = 0,
    cursorY = 0;
  const speed = 0.4;
  const offset = 0.5; //* offset with "vh"

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  //* Animation function for the cursor
  const animateCursor = () => {
    // Calculate new cursor position considering speed
    cursorX += (mouseX - cursorX) * speed;
    cursorY += (mouseY - cursorY) * speed;

    // Apply new cursor position with offset
    const offsetX = window.innerHeight * offset / 100; // смещение по горизонтали
    const offsetY = window.innerHeight * offset / 100; // смещение по вертикали
    cursor.style.transform = `translate3d(${cursorX - offsetX}px, ${cursorY - offsetY}px, 0)`;

    // Request the next animation frame
    requestAnimationFrame(animateCursor);
  };

  // Start the animation
  animateCursor();
});

document.addEventListener("DOMContentLoaded", () => {
  const lampLight = document.getElementById("LampLight");
  const lampDark = document.getElementById("LampDark");
  const cursorArrow = document.getElementById("cursorArrow");
  const cursorlight = document.getElementById("cursorlight");

  const showLightCursor = () => {
    cursorArrow.style.display = "none";
    cursorlight.style.display = "block";
  };

  const hideLightCursor = () => {
    cursorArrow.style.display = "block";
    cursorlight.style.display = "none";
  };

  lampLight.addEventListener("mouseenter", showLightCursor);
  lampLight.addEventListener("mouseleave", hideLightCursor);

  lampDark.addEventListener("mouseenter", showLightCursor);
  lampDark.addEventListener("mouseleave", hideLightCursor);
});

//* Function for pointer class
function Pointer(elementClass) {
  const elements = document.querySelectorAll(elementClass);
  const cursor = document.querySelector("#cursor");
  const arrow = document.querySelector('#cursorArrow');

  elements.forEach((element) => {
    element.onmouseover = () => {
      cursor.classList.add("pointer");
    };

    element.onmouseleave = () => {
      cursor.classList.remove("pointer");
    };
  });
}

function observeDOMChanges() {
  const observer = new MutationObserver(() => {
    Pointer(".HeaderButton"); 
    Pointer(".Lamp");
    Pointer(".languageSwitchButton");

    Pointer(".loginIcon");
    Pointer(".asideButton");
    Pointer(".aroowButton");
    Pointer(".hScrollElement");
    
    Pointer(".contactHeaderButton");
    Pointer(".socialContainer");
    Pointer("#requestCallButton");

    Pointer("#popUpHeaderClose");
    Pointer(".popUpHeaderButton");
    Pointer(".Property");
    Pointer(".GuitarItem");
    Pointer(".imageSwitchButton");

    Pointer(".LogRegButton");
    Pointer(".SVGEye");

    Pointer(".profileWindowButton");
    Pointer(".red");
    
    Pointer(".correctButton");
    Pointer("#closeAvatarInput");
  });

  observer.observe(document.body, { childList: true, subtree: true });
}
observeDOMChanges();

document.querySelector('#popUpHeaderClose').onmousedown = () => {
  document.querySelector('#popUpHeaderClose').style.backgroundColor = 'var(--color)'
}
document.querySelector('#popUpHeaderClose').onmouseup = () => {
  document.querySelector('#popUpHeaderClose').style.backgroundColor = 'transparent'
}

export default {};

document.body.onmousedown = () =>{
  cursor.classList.add('click');
}
document.body.onmouseup = () =>{
  cursor.classList.remove('click');
}
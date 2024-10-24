const container = document.querySelector(".allItemsContainer");
let counterIMG = 1;

class GuitarElementClass {
  constructor(
    id,
    name,
    description,
    quote,
    year,
    type,
    wood,
    img,
    guitarist,
    imgSide,
    imgHead,
    model,
    video,
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.quote = quote;
    this.year = year;
    this.type = type;
    this.wood = wood;
    this.img = img;
    this.guitarist = guitarist;
    this.imgSide = imgSide;
    this.imgHead = imgHead;
    this.model = model;
    this.video = video;
  }

  createAndAppendCard() {
    if (container) {
      const cardHTML = `
        <div id="${this.id}" class="GuitarItem">
            <img class="ImageItem" src="${this.img}" alt="image of guitar">
            <div class="TitleContainer">
              <span class="TitleItem">${this.name}</span>
            </div>
        </div>
      `;
      container.insertAdjacentHTML("beforeend", cardHTML);
    } else {
      console.error("Container not found");
    }
  }

  createAndAppendHScrollerCard(ID) {
    const hScrollContainer = document.querySelector(".hScroll");
    if (hScrollContainer) {
      const cardHTML = `
        <div id="Item${ID}" class="hScrollElement">
            <span class="GuitarTitle">${this.name}</span>
            <div class="wrapper"></div>
            <img class="GuitarImg" src="${this.img}" alt="">
        </div>
      `;
      hScrollContainer.insertAdjacentHTML("beforeend", cardHTML);
    } else {
      console.error("Horizontal scroll container not found");
    }
  }
}

const guitarData = [
  new GuitarElementClass(
    "01",
    "Custom Les Paul | LP W 350",
    `Jaxon "Rust" Malone’s prized guitar is a custom left-handed white Les Paul, known as "The Pale Rider." This instrument stands out not just for its striking, clean white finish but also for its rarity as a left-handed model, crafted specifically for Jaxon, who is a lefty. The guitar’s smooth, curved body and iconic design are a perfect match for Malone’s soulful yet gritty playing style. For Jaxon, this guitar is more than just a tool — it's a reflection of his unique approach to music, and a symbol of his journey against the grain.`,
    `"The Pale Rider speaks in a voice that cuts through the noise—clean, true, and unmistakably my own."`,
    "2012",
    "guitar",
    "Mahogany",
    "./img/LPW.jpg",
    "Jaxon Malone",
    "./img/LPW side.jpg",
    "./img/LPW HeadStock.png",
    "LP",
    "",
  ),
  new GuitarElementClass(
    "02",
    "Custom Stratocaster | ST R 420",
    `The third guitar in Kraven Schwarzstahl's arsenal is called "Die Feuerklaue" (The Fire Claw). This red-and-black superstrat is a weapon of precision and power, designed to tear through any mix with searing riffs and blistering solos. The fiery red top contrasts with the deep black of the body, symbolizing the controlled chaos that defines Kraven's playing style. Sleek and aerodynamic, "Die Feuerklaue" is built for speed and aggression. This guitar is not just an instrument—it's an inferno waiting to be unleashed.`,
    `"Wenn ich 'Die Feuerklaue' in die Hand nehme, entbrennt ein Feuer, das keine Bühne unversehrt lässt."`,
    "2012",
    "guitar",
    "Mahogany",
    "./img/STR.jpg",
    "Kraven Schwarzstahl",
    "./img/STR side.jpg",
    "./img/STR HeadStock.jpg",
    "St",
    "https://www.youtube.com/embed/E2N44O8ZfMc"
  ),
  new GuitarElementClass(
    "03",
    "Custom Semi-Acoustic | SA BW 550",
    `This guitar was made for renowned jazz musician Joe Fredrix. It features an unique design with a rich turquoise body and contrasting wooden accents, giving it an elegant and sophisticated appearance. The semi-hollow body with f-holes ensures a warm, rich sound, perfect for jazz. Every detail was meticulously crafted to make the guitar not only visually stunning but also capable of conveying the full range of emotions and nuances characteristic of Fredrix's playing.`,
    `"It feels like an extension of my soul, which is perfectly capturing every nuance of my sound."`,
    "2006",
    "guitar",
    "Rosewood",
    "./img/SABW.jpg",
    "Joe Fredrix",
    "./img/SABW side.jpg",
    "./img/SABW HeadStock.jpg",
    "SA",
    "",
  ),
  new GuitarElementClass(
    "04",
    "Custom Telecaster | TC B 120",
    `This Telecaster has been a constant companion in Joe Fredrix's career, known for his dynamic style and innovative approach to music. Since 2005, it has been with him through every studio session and live performance, adding a distinctive edge and character to his music. Joe Fredrix has managed to blend classic rock elements with contemporary sound, making him one of the most notable musicians of his generation. This Telecaster is not just an instrument; it’s a symbol of his artistry and an essential part of his stage presence.`,
    `"This guitar isn’t just an extension of my hands—it's the heartbeat of my sound. It’s been with me through every note and performance, carrying the essence of everything I create."`,
    "2002",
    "guitar",
    "Mahogany",
    "./img/TCB.jpg",
    "Joe Fredrix",
    "./img/TCB side.jpg",
    "./img/TCB HeadStock.jpg",
    "TC",
    "",
  ),
  new GuitarElementClass(
    "05",
    "Custom Black Star | JSt BKW 670",
    `This guitar, known as "Der Blitzschlag" (The Lightning Strike), belongs to the legendary German metal guitarist, Kraven Schwarzstahl. Designed for pure speed and aggression, its sharp, jagged body and sleek black finish make it resemble a weapon forged in the heart of a storm. The cutting angles and precision-crafted hardware of this instrument reflect Kraven's relentless quest for the ultimate sound. "Der Blitzschlag" embodies raw, unfiltered energy, capable of delivering electrifying performances that strike like lightning and leave audiences in awe.`,
    `"Wenn ich 'Der Blitzschlag' spiele, entfessle ich die Wut des Sturms—ein einziger Schlag, der alles vor sich niederreißt."`,
    "2006",
    "guitar",
    "Maple",
    "./img/BKW.jpg",
    "Kraven Schwarzstahl",
    "./img/BKW side.jpg",
    "./img/BKW HeadStock.jpg",
    "Sta",
    "",
  ),
  new GuitarElementClass(
    "06",
    "Custom P-Bass | PB W 830",
    `This vintage sunburst bass guitar belongs to Jacky Hammett, was created in 1982. A renowned blues bassist known for his soulful and deep grooves. The guitar, with its worn-out edges and weathered finish, reflects years of passionate playing, capturing the essence of the blues. Hammett’s bass has been his companion through countless performances, its rich tones resonating with the raw emotion and authenticity that defines his music. Whether on stage or in the studio, this bass guitar delivers a warm, resonant sound that perfectly complements Hammett's distinctive blues style.`,
    `"Every note I play on this bass carries the weight of a thousand stories, each one soaked in the blues."`,
    "1983",
    "bass",
    "Maple",
    "./img/PBW.png",
    "Jacky Hammett",
    "./img/PBW side.jpg",
    "./img/PBW HeadStock.jpg",
    "PB",
    "",
  ),
  new GuitarElementClass(
    "07",
    "Custom J-Bass | JB G 860",
    `This green-black bass belongs to Jacky Hammett, a legendary bassist whose technique and sense of rhythm have taken blues to new heights. The instrument, with its shimmering emerald-green metallic finish, perfectly reflects his unique style—bold yet deep, much like his playing. The bass has been customized and modified to deliver the rich, full sound that has become Jacky's signature. He used it to record some of his most famous tracks, making the strings sing like a heart beating to the rhythm of the blues.`,
    `"The bass is more than just the foundation—it's the soul of the music. Every note, every rhythm, it’s where the heart speaks."`,
    "1995",
    "bass",
    "Mahogany",
    "./img/JBG.jpg",
    "Jacky Hammett",
    "./img/JBG side.jpg",
    "./img/JBG HeadStock.jpeg",
    "JB",
    "",
  ),
  new GuitarElementClass(
    "08",
    "Custom Stratocaster | ST W 455",
    `This wooden Stratocaster has been Freddie Madisson's trusted companion since the 90s. With its natural wood finish and vintage feel, the guitar reflects the raw, unfiltered energy that Freddie brings to his music. Over the years, it's been through countless gigs, recording sessions, and has seen the evolution of his sound. The Stratocaster’s worn body tells the story of decades of passion and dedication, embodying the essence of Freddie's journey through rock and roll.`,
    `"This guitar isn't just wood and strings—it's a time machine, taking me back to the roots of every riff, every chord that ever mattered."`,
    "1983",
    "guitar",
    "Maple",
    "./img/STW.jpg",
    "Freddie Madisson",
    "./img/STW side.jpg",
    "./img/STW HeadStock.jpg",
    "St",
    "",
  ),
  new GuitarElementClass(
    "09",
    "Custom Semi-Acoustic | SA Bk 310",
    `Jaxon "Rust" Malone’s collection includes a distinctive guitar called "The Blue Flame." This unique instrument features a striking blue top with a deep black body, set off by gold hardware that adds a touch of class to its rugged design. The double-cutaway body offers both comfort and accessibility, allowing Jaxon to effortlessly navigate the fretboard during his intense performances. The combination of its bold colors and powerful pickups gives "The Blue Flame" a voice that is as fiery and dynamic as Jaxon himself, capable of delivering everything from smooth, soulful tones to ferocious rock anthems.`,
    `"This guitar isn't just wood and strings—it's a time machine, taking me back to the roots of every riff, every chord that ever mattered."`,
    "1995",
    "guitar",
    "Maple",
    "./img/SABk.jpg",
    "Jaxon Malone",
    "./img/SABk side.jpg",
    "./img/SABk HeadStock.jpg",
    "SA",
    "",
  ),
  new GuitarElementClass(
    "10",
    "Custom Star | JSt Bk 666",
    `Kraven Schwarzstahl, born in Berlin in 1980, became a legend in the German metal scene with his band "Eiserne Schatten". His iconic guitar, "Die Schwarze Klinge", was crafted by a master luthier known for creating instruments that evoke fear and awe. With its sharp, angular design and black gloss finish, the guitar symbolizes Kraven's raw power and relentless spirit. The triangular inlays on the fretboard resemble fangs, ready to pierce through the silence, making it an extension of his fierce, stormy music.`,
    `"Meine Musik ist ein Sturm, der den Himmel zerreißt, meine Gitarre ist mein Schwert, das die Dunkelheit durchbricht."`,
    "2002",
    "guitar",
    "Maple",
    "./img/BKBk.jpg",
    "Kraven Schwarzstahl",
    "./img/BKBk side.jpg",
    "./img/BKBk HeadStock.jpg",
    "Sta",
    "",
  ),
  new GuitarElementClass(
    "11",
    `Custom SG | SG R 540`,
    `Jaxon "Rust" Malone, hailing from the gritty streets of Detroit, rose to fame as a rock guitarist known for his raw, unpolished sound that echoed the soul of the city. His guitar, nicknamed "The Ironclad", is a battle-worn instrument that has seen countless gigs and smoky dive bars. With its sunburst finish, aged and scarred by years of heavy use, the guitar embodies Jaxon's relentless drive and passion for authentic rock music. The faded edges and chipped paint tell stories of nights filled with powerful riffs and rebellious energy, making it a true symbol of his journey.`,
    `"My guitar isn't just an instrument—it's a shield, scarred but unbroken, and every mark on it tells a story of a battle fought in the name of rock."`,
    "1983",
    "guitar",
    "Mahogany",
    "./img/SGR.jpg",
    "Jaxon Malone",
    "./img/SGR side.jpeg",
    "./img/SGR HeadStock.png",
    "SG",
    "",
  ),
  new GuitarElementClass(
    "12",
    "Custom Les-Paul | LP C 720",
    `Freddie Madisson's second guitar, a striking red-orange Les Paul, has been with him since 2001. This instrument, with its rich and vibrant finish, complements his signature style with powerful, resonant tones. Over the years, this Les Paul has become an integral part of Freddie’s musical identity, delivering the soulful, blues-infused rock sound that he's known for. Whether on stage or in the studio, this guitar has been a constant presence, shaping the music that has defined his career for over two decades.`,
    `"With this Les Paul, every note feels like a heartbeat, echoing the rhythm of my journey through the music."`,
    "2006",
    "guitar",
    "Rosewood",
    "./img/LPC.jpg",
    "Freddie Madisson",
    "./img/LPC side.jpg",
    "./img/LPC HeadStock.jpg",
    "LP",
    "",
  ),
];

const selectModel = document.querySelector("#selectModel");
const selectYear = document.querySelector("#selectYear");
const selectWood = document.querySelector("#selectWood");
const selectGuitarist = document.querySelector("#selectGuitarist");

const guitarsModels = document.querySelector("#guitarsModels");
const bassModels = document.querySelector("#bassModels");

const nameProp = document.querySelector("#nameProp");
const ageProp = document.querySelector("#ageProp");
const modelProp = document.querySelector("#modelProp");

let filteredData = [...guitarData];

//* filter guitars function

function filterGuitars() {
  // Создаем массив для фильтрованных данных
  const filteredGuitarData = [];

  // Проходим по всем данным
  for (let i = 0; i < guitarData.length; i++) {
    const guitar = guitarData[i];
    let matches = true;

    // Фильтрация по модели
    if (selectModel.value !== "none" && guitar.model !== selectModel.value) {
      matches = false;
    }

    // Фильтрация по году
    if (selectYear.value !== "none" && guitar.year !== selectYear.value) {
      matches = false;
    }

    // Фильтрация по древесине
    if (selectWood.value !== "none" && guitar.wood !== selectWood.value) {
      matches = false;
    }

    // Фильтрация по гитаристу
    if (
      selectGuitarist.value !== "none" &&
      guitar.guitarist !== selectGuitarist.value
    ) {
      matches = false;
    }

    // Если все фильтры пройдены, добавляем гитару в результат
    if (matches) {
      filteredGuitarData.push(guitar);
    }
  }

  // Очищаем и выводим фильтрованные данные
  console.clear();
  container.innerHTML = "";

  for (let i = 0; i < filteredGuitarData.length; i++) {
    filteredGuitarData[i].createAndAppendCard();
  }

  // Обновляем глобальную переменную filteredData
  filteredData = [...filteredGuitarData];

  // Привязываем события после фильтрации
  attachEventHandlers();
}


function filterByCategory(category) {
  // Clear the container
  container.innerHTML = "";

  // Iterate through previously filtered data
  for (let i = 0; i < filteredData.length; i++) {
    if (filteredData[i].type === category) {
      filteredData[i].createAndAppendCard();
    }
  }
  attachEventHandlers();
}

// Variables to track sorting state
let sortState = {
  name: null,
  year: null,
  model: null,
};

function sortFilteredData(name, year, model) {
  // Create a copy of filteredData array so sorting does not affect the original array
  let sortedGuitarData = [...filteredData];

  if (name) {
    // Determine sorting direction by name
    const direction = sortState.name === "az" ? "za" : "az";
    sortedGuitarData.sort(function (a, b) {
      let nameA = a.name.startsWith("Custom")
        ? a.name.substring(6).trim()
        : a.name;
      let nameB = b.name.startsWith("Custom")
        ? b.name.substring(6).trim()
        : b.name;
      return direction === "az"
        ? nameA.localeCompare(nameB)
        : nameB.localeCompare(nameA);
    });
    sortState = { name: direction, year: null, model: null };
  }

  if (year) {
    // Determine sorting direction by year
    const direction = sortState.year === "asc" ? "desc" : "asc";
    sortedGuitarData.sort(function (a, b) {
      return direction === "asc" ? a.year - b.year : b.year - a.year;
    });
    sortState = { name: null, year: direction, model: null };
  }

  if (model) {
    // Determine sorting direction by model
    const direction = sortState.model === "az" ? "za" : "az";
    sortedGuitarData.sort(function (a, b) {
      let modelA = a.name.split("|")[1]?.trim().split(" ")[0] || "";
      let modelB = b.name.split("|")[1]?.trim().split(" ")[0] || "";
      return direction === "az"
        ? modelA.localeCompare(modelB)
        : modelB.localeCompare(modelA);
    });
    sortState = { name: null, year: null, model: direction };
  }

  // Clear the container before displaying sorted data
  container.innerHTML = "";

  // Execute createAndAppendCard function for each item in the sorted array
  for (let i = 0; i < sortedGuitarData.length; i++) {
    sortedGuitarData[i].createAndAppendCard();
  }

  // Update global variable filteredData
  filteredData = sortedGuitarData;

  attachEventHandlers(); // Bind events after filtering by category
}

for (let i = 0; i < guitarData.length; i++) {
  guitarData[i].createAndAppendCard();
}

//! Applying to buttons

selectModel.addEventListener("change", filterGuitars);
selectYear.addEventListener("change", filterGuitars);
selectWood.addEventListener("change", filterGuitars);
selectGuitarist.addEventListener("change", filterGuitars);

guitarsModels.onclick = () => {
  filterByCategory("guitar");
};
bassModels.onclick = () => {
  filterByCategory("bass");
};

nameProp.onclick = () => {
  sortFilteredData(true, false, false);
};

ageProp.onclick = () => {
  sortFilteredData(false, true, false);
};

modelProp.onclick = () => {
  sortFilteredData(false, false, true);
};

//! Horizontal scroller cards

const showHScrollCards = (g1, g2, g3, g4, g5, g6, g7, g8) => {
  guitarData[g1].createAndAppendHScrollerCard(1);
  guitarData[g2].createAndAppendHScrollerCard(2);
  guitarData[g3].createAndAppendHScrollerCard(3);
  guitarData[g4].createAndAppendHScrollerCard(4);
  guitarData[g5].createAndAppendHScrollerCard(5);
  guitarData[g6].createAndAppendHScrollerCard(6);
  guitarData[g7].createAndAppendHScrollerCard(7);
  guitarData[g8].createAndAppendHScrollerCard(8);
};

showHScrollCards(0, 5, 2, 8, 3, 7, 4, 11);

const hScrollContainer = document.querySelector(".hScrollContainer");
const hScroll = document.querySelector('.hScroll');

const itemNameElement = document.querySelector("#mobileScrl-ItemName");
let currentCardID = 0;

const updateFocusedCard = () => {
  const cards = document.querySelectorAll(".hScrollElement");
  const containerWidth = hScrollContainer.clientWidth;
  
  let closestCard = null;
  let closestDistance = Infinity;

  cards.forEach((card) => {
    const cardRect = card.getBoundingClientRect();
    const cardCenter = cardRect.left + cardRect.width / 2;
    const containerCenter = containerWidth / 2;

    const distance = Math.abs(cardCenter - containerCenter);

    if (distance < closestDistance) {
      closestDistance = distance;
      closestCard = card;
    }
  });

  if (closestCard) {
    const cardID = closestCard.id.replace("Item", ""); // Получаем ID карточки
    const nameOfItem = document.querySelector(`#Item${cardID}`); // Ищем элемент по ID
    currentCardID = `#Item${cardID}`;
    
    const currentCard = document.querySelector(currentCardID);
    const wrapperOfCard = currentCard.querySelector('.wrapper');
    const allwrappers = document.querySelectorAll('.wrapper');
    allwrappers.forEach((el) =>{
      el.style.opacity = 0.8;
    })
    wrapperOfCard.style.opacity = 0;

    if (nameOfItem) {
      const guitarTitleElement = nameOfItem.querySelector('.GuitarTitle'); // Ищем дочерний элемент с классом GuitarTitle
      if (guitarTitleElement) {
        const guitarName = guitarTitleElement.textContent; // Берем текстовое содержимое элемента
        
        // Проверяем, изменилось ли содержимое
        if (itemNameElement.textContent !== guitarName) {
          // Добавляем класс для анимации
          itemNameElement.classList.add('transited');

          setTimeout(() => {
            itemNameElement.textContent = guitarName; // Устанавливаем новое имя гитары
          }, 200);
          
          // Убираем класс через 500 мс
          setTimeout(() => {
            itemNameElement.classList.remove('transited');
          }, 400);
        }
      }
    }
  }  
};
updateFocusedCard();
//? visual transform while scroll

let startX;
let startY;
let imgSwiped = false;

hScroll.addEventListener('touchstart', (e) => {
  startX = e.touches[0].pageX;
});

hScroll.addEventListener('touchmove', (e) => {
  const x = e.touches[0].pageX;

  const walkX = (startX - x) * 0.02;

  const GuitarImg = document.querySelectorAll('.GuitarImg');

  GuitarImg.forEach((el) => {
    el.style.transform = `rotateY(${walkX}deg)`;
  });

  // Обновляем текущую карточку во время перемещения
  updateFocusedCard(); 
});

hScroll.addEventListener('touchend', (event) => {
  const x = event.changedTouches[0].pageX; // Получаем координаты последнего касания
  const walkX = (startX - x) * 0.04; // Считаем walkX на основе конечной позиции

  if (!imgSwiped) {
    const nextImg = () => {
      let currentMargin = parseFloat(hScroll.style.marginLeft) || 0;
      if (currentMargin > -700) {
        hScroll.style.marginLeft = `${currentMargin - 100}%`;
      }
    };
    
    const prevImg = () => {
      let currentMargin = parseFloat(hScroll.style.marginLeft) || 0;
      if (currentMargin < 0) {
        hScroll.style.marginLeft = `${currentMargin + 100}%`;
      }
    };

    if (walkX >= 3) { 
      nextImg();
      imgSwiped = true; // Устанавливаем флаг, что смена изображения произошла
    } else if (walkX <= -3) { 
      prevImg();
      imgSwiped = true; // Устанавливаем флаг, что смена изображения произошла
    }
  }

  // Обновляем имя элемента с ID #mobileScrl-ItemName
  setTimeout(() =>{
    updateFocusedCard();
  }, 100)

  // Сбрасываем флаг
  imgSwiped = false; 
  const GuitarImg = document.querySelectorAll('.GuitarImg');

  GuitarImg.forEach((el) => {
    el.style.transform = `rotateY(0deg) rotateX(0deg)`; // Сбрасываем вращение
  });
});

//! Preview function

// Initialize variables for preview and popups
const Preview = document.querySelector(".PreviewImageBackGround");
Preview.classList.add("Hidden");

const OpenItemContainer = document.querySelector(".OpenItemContainer");
const ItemWindow = document.querySelector(".ItemWindow");
OpenItemContainer.classList.add("Hidden");

let selectedItem = null;
let i = 1;

// Function to bind events to guitar items
function attachEventHandlers() {
  const guitarItems = document.querySelectorAll(".GuitarItem");
  let previewTimeout = null;

  guitarItems.forEach((item) => {
    item.addEventListener("mouseenter", (event) => {
      // Clear the previous timer if it exists
      if (previewTimeout) {
        clearTimeout(previewTimeout);
      }

      // Get the ID of the target element
      const id = event.currentTarget.id;

      // Find the object with the same ID in the guitarData array
      selectedItem = guitarData.find((guitar) => guitar.id === id);

      // Set a timer to show the preview with a 1.6-second delay
      previewTimeout = setTimeout(() => {
        ShowPreview(selectedItem);
      }, 1600);
    });

    item.addEventListener("mouseleave", () => {
      // Clear the timer to prevent showing preview after cursor leaves
      if (previewTimeout) {
        clearTimeout(previewTimeout);
        previewTimeout = null;
      }

      Preview.classList.add("Hidden");
    });

    item.addEventListener("click", () => {
      showPopUp(selectedItem);
    });
  });
}

// Function to show preview
const ShowPreview = (guitar) => {
  if (guitar) {
    const PreviewIMG = document.querySelector(".Preview");
    PreviewIMG.src = guitar.img;
    Preview.classList.remove("Hidden");
  }
};

// Function to show popup with guitar information
const showPopUp = (guitar) => {
  if (guitar) {
    selectedItem = guitar;

    document.querySelector(".ImageLogo").src = guitar.img;
    document.querySelector("#Paragraph").textContent = guitar.description;
    document.querySelector("#quoteOfParagraph").textContent = guitar.quote;
    document.querySelector("#guitarist").textContent = guitar.guitarist;
    document.querySelector("#nameOfItem").textContent = guitar.name;

    if(guitar.video.trim() !== ""){
      document.querySelector('#videoSwitch').style.display = "block";
    } else{
      document.querySelector('#videoSwitch').style.display = "none";
    }
    OpenItemContainer.classList.remove("Hidden");

    // Function to switch photos in the popup
    i = 1;
    switchPhotos();
  }
};
// Function to switch photos in the popup
const switchPhotos = () => {
  if (selectedItem) {
    if (i === 1) {
      document.querySelector(".ImageLogo").src = selectedItem.img;
      document.querySelector("#firstImage").classList.add("ImageSelected");
      document.querySelector("#secondImage").classList.remove("ImageSelected");
      document.querySelector("#thirdImage").classList.remove("ImageSelected");
    } else if (i === 2) {
      document.querySelector(".ImageLogo").src = selectedItem.imgSide;
      document.querySelector("#secondImage").classList.add("ImageSelected");
      document.querySelector("#firstImage").classList.remove("ImageSelected");
      document.querySelector("#thirdImage").classList.remove("ImageSelected");
    } else if (i === 3) {
      document.querySelector(".ImageLogo").src = selectedItem.imgHead;
      document.querySelector("#thirdImage").classList.add("ImageSelected");
      document.querySelector("#firstImage").classList.remove("ImageSelected");
      document.querySelector("#secondImage").classList.remove("ImageSelected");
    } else if (i === 4) {
      ItemWindow.querySelector('.leftSide').style.display = "none";
      ItemWindow.querySelector('.rightSide').style.display = "none";
      ItemWindow.querySelector('.videoWindow').style.display = "block";
      ItemWindow.querySelector('.videoWindow').src = selectedItem.video;
    }
  }
};

const cursor = document.querySelector("#cursor");

const turnOffVideo = () =>{
  ItemWindow.querySelector('.leftSide').style.display = "flex";
  ItemWindow.querySelector('.rightSide').style.display = "flex";
  ItemWindow.querySelector('.videoWindow').style.display = "none";
}

OpenItemContainer.addEventListener("click", (event) => {
  if (event.target === ItemWindow || ItemWindow.contains(event.target)) {
    return;
  }
  OpenItemContainer.classList.add("Hidden");
  cursor.classList.remove("scale");
  turnOffVideo()
});

OpenItemContainer.addEventListener("mouseover", (event) => {
  if (event.target === ItemWindow || ItemWindow.contains(event.target)) {
    cursor.classList.remove("scale");
  } else {
    cursor.classList.add("scale");
  }
});

document.querySelector("#firstImage").onclick = () => {
  i = 1;
  switchPhotos();
};
document.querySelector("#secondImage").onclick = () => {
  i = 2;
  switchPhotos();
};
document.querySelector("#thirdImage").onclick = () => {
  i = 3;
  switchPhotos();
};
document.querySelector("#videoSwitch").onclick = () => {
  i = 4;
  console.log(i);
  switchPhotos();
};

// Initially set the first image as selected
document.querySelector("#firstImage").classList.add("ImageSelected");

// Initial event binding to elements
attachEventHandlers();

const orderedContainer = document.querySelector(".MyGuitarsContainer");
orderedContainer.innerHTML = "";

export default {};
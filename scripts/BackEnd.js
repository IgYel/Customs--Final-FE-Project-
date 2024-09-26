let myGuitarData = JSON.parse(localStorage.getItem("myGuitarData"));

import { Display } from "./registration";

function saveToLocalStorage(){
    //* save changes to Local Storage
    localStorage.setItem("myGuitarData", JSON.stringify(myGuitarData));
}

const AllImages = [
    "./img/BKBk.jpg",
    "./img/BKW.jpg",
    "./img/EXp.jpg",
    "./img/JBG.jpg",
    "./img/LPC.jpg",
    "./img/LPW.jpg",
    "./img/PBW.jpg",
    "./img/SABk.jpg",
    "./img/SABW.jpg",
    "./img/SGR.jpg",
    "./img/STR.jpg",
    "./img/STW.jpg",
    "./img/TCB.jpg",
]
//
const AddGuitarSection = document.querySelector('#AddGuitarSection');
const AddGuitar = document.querySelector('#AddGuitar');

AddGuitar.onclick = () =>{
    Display(AddGuitarSection, "t");
    Display(SetStatusSection, "f");
    Display(AddCardSection, "f");
}

const ExImageItem = document.querySelector('.ExImageItem');
const TitleItemInput = document.querySelector('#TitleItemInput');
const StatusInput = document.querySelector('#StatusInput');
const OwnerNameInput = document.querySelector('#OwnerNameInput');
const imageLinkInput = document.querySelector('#imageLinkInput');

const FinishButton = document.querySelector('#FinishButton');
//

for (let i = 0; i < AllImages.length; i++) {
    const option = document.createElement('option');
    option.value = AllImages[i];
    
    const fileName = AllImages[i].split('/').pop();
    option.textContent = fileName;
    
    imageLinkInput.appendChild(option);
    option.classList.add("ImgOption");
}

// Обработка события выбора в select
imageLinkInput.addEventListener('change', () => {
    ExImageItem.src = imageLinkInput.value;
});

let lastId = myGuitarData[myGuitarData.length - 1].id;

FinishButton.onclick = () =>{
    let StatusValue = "";

    if(StatusInput.value == "ready"){
        StatusValue = "ready";
    } else{
        StatusValue = "not ready";
    }

    const newGuitarElement = {
        id: lastId + 1,
        name: TitleItemInput.value,
        guitarist: OwnerNameInput.value,
        status: StatusValue,
        img: imageLinkInput.value,
    }

    myGuitarData.push(newGuitarElement);
    saveToLocalStorage();
}

//* Set new Status for ordered guitar

const SetStatus = document.querySelector('#SetStatus');
const SetStatusSection = document.querySelector('#SetStatusSection');

SetStatus.onclick = () => {
    Display(AddGuitarSection, "f");
    Display(SetStatusSection, "t");
    Display(AddCardSection, "f");

    // Очищаем SetStatusSection перед заполнением, чтобы избежать дублирования элементов
    SetStatusSection.innerHTML = '';

    // Показать все заказы гитар, которые "not ready"
    for (let i = 0; i < myGuitarData.length; i++) {
        if (myGuitarData[i].status == "not ready") {
            const guitarElement = document.createElement('div');
            guitarElement.classList.add('BEguitarElement');

            guitarElement.innerHTML = `
                <img src="${myGuitarData[i].img}" alt="" class="LogoImageOfElement">
                <p class="titleOfElement">${myGuitarData[i].name}</p>
                <p class="OwnerTitle">${myGuitarData[i].guitarist}</p>
                <p class="ChangeStatus">${myGuitarData[i].status}</p>
            `;

            // Добавляем элемент на страницу
            SetStatusSection.appendChild(guitarElement);

            // Находим элемент с классом ChangeStatus внутри guitarElement
            const changeStatusButton = guitarElement.querySelector('.ChangeStatus');

            // Добавляем обработчик события на кнопку изменения статуса
            changeStatusButton.onclick = () => {
                const confirmChange = confirm(`Are you sure you want to change status to "ready"?`);
                if (confirmChange) {
                    // Изменяем статус соответствующего элемента массива
                    myGuitarData[i].status = "ready";

                    // Обновляем отображение статуса в HTML
                    changeStatusButton.textContent = 'changed tp "ready"';
                    saveToLocalStorage();
                }
            };
        }
    }
}

//* Add Card to all models's section
const AddCard = document.querySelector('#AddCard');
const AddCardSection = document.querySelector('#AddCardSection');

//? inputs

const inputName = document.querySelector('#inputName');
const inputDescription = document.querySelector('#inputDescription');
const inputQuote = document.querySelector('#inputQuote');
const inputGuitarist = document.querySelector('#inputGuitarist');

const selectType = document.querySelector('#selectType'); // guitar / bass

const wood = document.querySelector('#wood');
const imgFront = document.querySelector('#imgFront');
const imgDeck = document.querySelector('#imgDeck');
const imgHeadstock = document.querySelector('#imgHeadstock');
const modelType = document.querySelector('#modelType');

const AddElementButton = document.querySelector('#AddElementButton');

function clearForm(){
    inputName.value = "";
    inputDescription.value = "";
    inputQuote.value = "";
    inputGuitarist.value = "";

    wood.value = "";
    imgFront.value = "";
    imgDeck.value = "";
    imgHeadstock.value = "";
    modelType.value = "";
}

AddCard.onclick = () => {
    Display(AddGuitarSection, "f");
    Display(SetStatusSection, "f");
    Display(AddCardSection, "t");

    clearForm();
}

const guitarData = JSON.parse(localStorage.getItem("guitarData"));
const lastElement = guitarData[guitarData.length - 1];
let lastID = lastElement.id;

AddElementButton.onclick = () =>{
    if(
        inputName.value.trim() !== "" ||
        inputDescription.value.trim() !== "" ||
        inputQuote.value.trim() !== "" ||
        inputGuitarist.value.trim() !== "" ||
    
        wood.value.trim() !== "" ||
        imgFront.value.trim() !== "" ||
        imgDeck.value.trim() !== "" ||
        imgDeck.value.trim() !== "" ||
        modelType.value.trim() !== ""
    ){
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();

        const newGuitarCard = {
            id: lastID + 1,
            name: inputName.value,
            year: currentYear,
            description: inputDescription.value,
            quote: inputQuote.value,
            type: selectType.value,
            wood: wood.value,
            img: imgFront.value,
            guitarist: inputGuitarist.value,
            imgSide: imgDeck.value,
            imgHead: imgHeadstock.value,
            model: modelType.value,
        }
        lastID = +lastID;
        lastID += 1;
        guitarData.push(newGuitarCard);
        
        //* save to local storage
        localStorage.setItem("guitarData", JSON.stringify(guitarData));
        clearForm()
    } else{
        console.error("all the fields must be filled");
    }
}
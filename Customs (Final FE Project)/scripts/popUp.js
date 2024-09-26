// Основной контейнер попапа
const popUpGuitarContainer = document.querySelector(".popUpGuitarContainer");
const popUpAllModelsClose = document.querySelector("#popUpHeaderClose");

// Кнопки, отвечающие за открытие попапа
const allModelsHeaderButton = document.querySelector("#allModelsHeader");
const allModelsButtonAside = document.querySelector("#allModelsButton");
const allGuitarsButtonContact = document.querySelector("#allGuitarsButton");

// Прячем попап по умолчанию
popUpGuitarContainer.classList.add("Hidden");

// Функция для открытия попапа
const openPopUp = () => {
  const openPopUpGuitarsElements = [
    allModelsHeaderButton,
    allModelsButtonAside,
    allGuitarsButtonContact,
  ];

  // Добавляем класс для всех кнопок, которые открывают попап
  openPopUpGuitarsElements.forEach(button => {
    button.classList.add("openPopUpGuitars");

    // Добавляем обработчик на клик по каждой кнопке
    button.addEventListener("click", () => {
      // Добавляем новое состояние в историю
      history.pushState({ popUpOpened: true }, "", "All-Models-window");

      // Показываем попап
      popUpGuitarContainer.classList.remove("Hidden");
    });
  });

  // Обработчик для кнопки закрытия попапа
  popUpAllModelsClose.addEventListener("click", () => {
    // Закрываем попап
    popUpGuitarContainer.classList.add("Hidden");

    // Возвращаемся к предыдущему состоянию в истории
    history.back();
  });

  // Обработчик для кнопок браузера "Назад" и "Вперед"
  window.addEventListener("popstate", (event) => {
    if (event.state && event.state.popUpOpened) {
      // Если состояние истории указывает, что попап должен быть открыт
      popUpGuitarContainer.classList.remove("Hidden");
    } else {
      // Прячем попап, если состояние указывает на закрытое окно
      popUpGuitarContainer.classList.add("Hidden");
    }
  });
};

// Вызов функции для инициализации попапа
openPopUp();

// Работа с элементами GuitarItem
const guitarItems = document.querySelectorAll(".GuitarItem");
let selectedItem = null;

// Добавляем событие на наведение для каждого элемента GuitarItem
guitarItems.forEach((item) => {
  item.addEventListener("mouseenter", (event) => {
    selectedItem = event.currentTarget;  // Запоминаем текущий элемент
  });
});

// Логика для открытия/закрытия доп. меню (sort, category, filters)
const sortButton = document.querySelector("#sortButton");
const categoryButton = document.querySelector("#categoryButton");
const filtersButton = document.querySelector("#filtersButton");

const sortProp = document.querySelector("#sortProp");
const categoryProp = document.querySelector("#categoryProp");
const filtersProp = document.querySelector("#filtersProp");

// Функция для переключения видимости элементов меню
const togglePopUp = (button, element) => {
  button.addEventListener("click", () => {
    element.classList.toggle("popUpPropsOn");
  });
};

// Применение функции togglePopUp для кнопок сортировки, категорий и фильтров
togglePopUp(sortButton, sortProp);
togglePopUp(categoryButton, categoryProp);
togglePopUp(filtersButton, filtersProp);
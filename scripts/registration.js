const loginIcon = document.querySelector(".loginIcon");
const headerloginButton = document.querySelector("#headerloginButton");

const registerContainer = document.querySelector(".RegisterContainer");

// Скрываем контейнер регистрации по умолчанию
registerContainer.classList.add("Hidden");

// Обработчик для иконки входа
loginIcon.onclick = () => {
  // Показываем контейнер регистрации
  history.pushState(
    { registerOpened: true },
    "Register-window",
    "Register-window"
  );

  const InsideContainer = document.querySelector('.InsideContainer');
  registerContainer.classList.remove("Hidden");
  InsideContainer.classList.remove('ProfileMode');
  InsideContainer.classList.remove('WiderPopUpProfile');
  const ButtonsProfileContainer = document.querySelector('.ButtonsProfileContainer');
  const profileInfo = document.querySelector('.profileInfo');

  Display(ButtonsProfileContainer, "t");
  Display(profileInfo, "f");
};
//* same for header button
headerloginButton.onclick = () => {
  // Показываем контейнер регистрации
  history.pushState(
    { registerOpened: true },
    "Register-window",
    "Register-window"
  );
  registerContainer.classList.remove("Hidden");
};


const InsideContainer = document.querySelector(".InsideContainer");
const LogRegWindow = document.querySelector(".LogRegWindow");
const ProfileWindow = document.querySelector(".ProfileWindow");

const NameForm = document.querySelector("#NameForm");
const loginButton = document.querySelector("#LoginButton");
const RegisterButton = document.querySelector("#RegisterButton");
const SubmitButton = document.querySelector("#SubmitButton");

//* Logged Status set
let isLogged = false;

//* DisplayFunction

export const Display = (element, tORf) => {
  if (tORf == "f") {
    element.style.display = "none";
  } else if (tORf == "t") {
    element.style.display = "block";
  } else if (tORf == "i") {
    element.style.display = "inline-block";
  }
};

IfLogged(isLogged);
//! Function

function ClearForm() {
  const errorLogin = document.getElementById("errorLogin");
  const errorPassword = document.getElementById("errorPassword");
  const errorName = document.getElementById("errorName");
  const successWindow = document.getElementById("succesWindow");

  errorLogin.textContent = "";
  errorPassword.textContent = "";
  errorName.textContent = "";
  successWindow.textContent = "";

  errorLogin.style.display = "none";
  errorPassword.style.display = "none";
  errorName.style.display = "none";
  successWindow.style.display = "none";
}

//* Список пользователей
const loginsList = JSON.parse(localStorage.getItem("loginsList")) || [
  {
    login: "User",
    password: "userpass",
    name: "Sasha",
    adress: "Praha, Cesko",
    phoneNumber: "+420 456 123 789",
    email: "justUser@gmail.com",
    avatar: "",
  },
  {
    login: "Admin_1234",
    password: "adminpass",
    name: "Admin DveKytary",
    adress: "Selo, Derevnya",
    phoneNumber: "+42 800 555 3535",
    email: "admin@gmail.com",
    avatar: "",
  },
];

function saveToLocalStorage() {
  localStorage.setItem("loginsList", JSON.stringify(loginsList));
}

// saveToLocalStorage(); //!uncomment for manual setting Item "loginsList"

//* Current user array
const currentUser = {
  login: "",
  name: "",
  adress: "",
  phoneNumber: "",
  email: "",
  avatar: "",
};

//* To understand WHO was logged IN
function LoginAs() {
  // Получаем логин, введённый пользователем
  const loginInput = document.getElementById("LoginInput").value;

  // Проверим, что логин введён
  if (!loginInput) {
    console.error("Login input is empty.");
    return;
  }

  const loginsList = JSON.parse(localStorage.getItem("loginsList")) || [];

  // Проверим, что список пользователей не пустой
  if (loginsList.length === 0) {
    console.error("Logins list is empty.");
    return;
  }

  // Найдём пользователя по логину
  const loggedInUser = loginsList.find((user) => user.login === loginInput);

  if (loggedInUser) {

    // Если пользователь найден, сохраняем его данные в объект currentUser
    currentUser.login = loggedInUser.login;
    currentUser.name = loggedInUser.name;
    currentUser.adress = loggedInUser.adress || ""; // Заполняем поля по мере наличия данных
    currentUser.phoneNumber = loggedInUser.phoneNumber || "";
    currentUser.email = loggedInUser.email || "";
    currentUser.avatar = loggedInUser.avatar || "";

    // Сохраняем объект текущего пользователя в cookie
    saveCurrentUserToCookies();
  } else {
    console.error("User not found. Login is incorrect.");
  }
}

function validateForm(TypeOfWindow) {
  const loginInput = document.getElementById("LoginInput");
  const passwordInput = document.getElementById("passwordInput");
  const nameInput = document.getElementById("nameInput");

  // Ошибки
  const errorLogin = document.getElementById("errorLogin");
  const errorPassword = document.getElementById("errorPassword");
  const errorName = document.getElementById("errorName");
  const successWindow = document.getElementById("succesWindow");

  // Очистка ошибок перед валидацией
  errorLogin.style.display = "none";
  errorPassword.style.display = "none";
  errorName.style.display = "none";
  successWindow.style.display = "none";

  // Регулярные выражения для валидации
  const specialChars = /[!@#$%^&*(),.?":{}|<>]/g;

  let isValid = true;

  // Валидация регистрации
  if (TypeOfWindow === "Register") {
    const loginValue = loginInput.value;

    // Проверка на дублирование логина в списке
    const loginExists = loginsList.some((user) => user.login === loginValue);

    if (loginExists) {
      errorLogin.textContent = "This login is already taken";
      errorLogin.style.display = "block";
      isValid = false;
    } else if (specialChars.test(loginValue) || loginValue.length > 25) {
      errorLogin.textContent =
        "Login can not be more than 25 symbols and can't contain special symbols";
      errorLogin.style.display = "block";
      isValid = false;
    }

    // Валидация пароля
    const passwordValue = passwordInput.value;
    if (specialChars.test(passwordValue) || passwordValue.length < 8) {
      errorPassword.textContent =
        "Password must not contain special chars and must be more than 8 symbols";
      errorPassword.style.display = "block";
      isValid = false;
    }

    // Валидация имени
    const nameValue = nameInput.value;

    if (isValid) {
      successWindow.textContent = "Your data is successfully saved in system";
      successWindow.style.display = "block";

      loginsList.push({
        login: loginInput.value,
        password: passwordInput.value,
        name: nameInput.value,
      });

      saveToLocalStorage(); //! Save to local Storage new array

      nameInput.value = "";
      loginInput.value = "";
      passwordInput.value = "";
    }
  }

  // Валидация входа
  if (TypeOfWindow === "Login") {
    const loginValue = loginInput.value;
    const passwordValue = passwordInput.value;

    // Проверка наличия логина в списке
    const user = loginsList.find((user) => user.login === loginValue);

    if (!user || user.password !== passwordValue) {
      // Test on login and password
      errorPassword.textContent = "Password or login does not match";
      errorPassword.style.display = "block";
      isValid = false;

      setTimeout(() => {
        errorPassword.textContent = "";
        Display(errorPassword, "f");
        ClearForm();
      }, 2000);
    }

    // Если все проверки пройдены, выводим сообщение об успехе
    if (isValid) {
      successWindow.textContent = "You are successfully logged in";
      Display(errorPassword, "f");
      Display(successWindow, "t");
      LoginAs();

      isLogged = true;

      nameInput.value = "";
      loginInput.value = "";
      passwordInput.value = "";

      //* Set Login to true

      setTimeout(() => {
        IfLogged(isLogged);
        saveCurrentUserToCookies();
        ClearForm();
      }, 1000);
    }
  }

  return isValid;
}

function IfLogged(LoggedStatus) {
  if (LoggedStatus == false) {
    Display(LogRegWindow, "t");
    Display(ProfileWindow, "f");
  } else if (LoggedStatus == true) {
    Display(ProfileWindow, "t");
    Display(LogRegWindow, "f");
    console.log(currentUser.login);

    //* show AdminWindow button only for Admin_1234
    const AdminWindow = document.querySelector('#AdminWindow');
    
    if(currentUser.login == "Admin_1234") {
      Display(AdminWindow, "t");
    }
    else{
      Display(AdminWindow, "f");
    }

    const inputNumber = document.querySelector("#inputNumber");

    inputNumber.value = currentUser.phoneNumber
      .replace("+420", "") // delete country code +420
      .replace(/\s+/g, ""); // delete spaces
  }
}

function LoginMode() {
  NameForm.style.display = "none";
  loginButton.style.color = "var(--input)";
  RegisterButton.style.color = "var(--color)";

  SubmitButton.onclick = () => {
    validateForm("Login");
  };

  document.addEventListener("keydown", (event) => {
    const activeElement = document.activeElement;
    if (
      (event.key === "Enter" || event.keyCode === 13) &&
      (activeElement.tagName === "INPUT" ||
        activeElement.tagName === "TEXTAREA")
    ) {
      event.preventDefault(); //* Preventing default
      validateForm("Login");
    }
  });
}
//* Login mode of window registration/login

function RegisterMode() {
  NameForm.style.display = "block";
  loginButton.style.color = "var(--color)";
  RegisterButton.style.color = "var(--input)";

  SubmitButton.onclick = () => {
    validateForm("Register");
  };

  document.addEventListener("keydown", (event) => {
    const activeElement = document.activeElement;
    if (
      (event.key === "Enter" || event.keyCode === 13) &&
      (activeElement.tagName === "INPUT" ||
        activeElement.tagName === "TEXTAREA")
    ) {
      event.preventDefault(); //* Preventing default
      validateForm("Register");
    }
  });
} //* Register mode of window registration/login

LoginMode();

const loginButtonUnderline = document.querySelector("#loginButtonUnderline");
const RegisterButtonUnderline = document.querySelector(
  "#RegisterButtonUnderline"
);
loginButtonUnderline.classList.add("Hidden");

loginButton.onclick = () => {
  LoginMode();
  ClearForm();
  loginButtonUnderline.classList.add("Hidden");
  RegisterButtonUnderline.classList.remove("Hidden");
};
RegisterButton.onclick = () => {
  RegisterMode();
  ClearForm();
  loginButtonUnderline.classList.remove("Hidden");
  RegisterButtonUnderline.classList.add("Hidden");
};

const RegisterContainer = document.querySelector(".RegisterContainer");
const cursor = document.querySelector("#cursor");

RegisterContainer.classList.add("Hidden");

const eyeOpen = document.getElementById("eyeOpen");
const eyeClose = document.getElementById("eyeClose");
eyeOpen.classList.add("Hidden");

eyeOpen.onclick = () => {
  eyeOpen.classList.add("Hidden");
  eyeClose.classList.remove("Hidden");
  const passwordInput = document.getElementById("passwordInput");
  passwordInput.type = "password";
};

eyeClose.onclick = () => {
  eyeClose.classList.add("Hidden");
  eyeOpen.classList.remove("Hidden");
  const passwordInput = document.getElementById("passwordInput");
  passwordInput.type = "text";
};
//* COOKIES operations

// Function to set cookie with expiration time (1 hour in this case)
function setCookie(name, value, hours) {
  const date = new Date();
  date.setTime(date.getTime() + hours * 60 * 60 * 1000);
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${JSON.stringify(value)}; ${expires}; path=/`;
}

// Function to get cookie by name
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return JSON.parse(parts.pop().split(";").shift());
  return null;
}

// Function to delete a cookie
function deleteCookie(name) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

//* Set currentUser in cookies for 1 hour
function saveCurrentUserToCookies() {
  setCookie("currentUser", currentUser, 1); // Save for 1 hour
}

//* Load user from cookies if exists
function loadCurrentUserFromCookies() {
  const savedUser = getCookie("currentUser");
  if (savedUser) {
    Object.assign(currentUser, savedUser); // Update currentUser with values from cookie
    isLogged = true;
    IfLogged(isLogged);
  }
}

//* chek if cookie still exists
function isExistCookie(cookieName) {
  const cookieValue = getCookie(cookieName); // Используем getCookie, чтобы найти cookie

  if (!cookieValue) {
    // Если cookie не найдено
    let isLogged = false;
    alert("Session expired. Redirecting to login...");

    location.reload(); // Принудительное обновление страницы
  }
}

window.onload = function () {
  loadCurrentUserFromCookies();
};

//! Profile Section

const ButtonsProfileContainer = document.querySelector(
  ".ButtonsProfileContainer"
);

const ProfileButton = document.querySelector("#ProfileButton");
const LogOutButton = document.querySelector("#LogOutButton");

const LogOutAcceptButton = document.querySelector("#LogOutAcceptButton");

const LogOutMessage = document.querySelector(".LogOutMessage");
const profileInfo = document.querySelector(".profileInfo");
const MyGuitarsInfo = document.querySelector(".MyGuitarsInfo");

Display(LogOutMessage, "f");
Display(profileInfo, "f");
Display(MyGuitarsInfo, "f");
InsideContainer.classList.remove("WiderPopUpProfile");

LogOutButton.onclick = () => {
  Display(LogOutMessage, "t");
};

LogOutAcceptButton.onclick = () => {
  isLogged = false;
  IfLogged(isLogged);
  Display(LogOutMessage, "f");
  deleteCookie("currentUser"); // Удаляем cookie при выходе
};

//* enter profile info

// Функция для отображения профиля
ProfileButton.onclick = () => {
  // Скрываем элементы
  Display(LogOutMessage, "f");
  Display(ButtonsProfileContainer, "f");
  Display(profileInfo, "t");
  InsideContainer.classList.add("WiderPopUpProfile");
  InsideContainer.classList.add("ProfileMode");

  // Добавляем состояние в историю
  history.pushState(
    { profileOpened: true },
    "Profile-window",
    "Profile-window"
  );

  // Обновляем информацию профиля
  document.querySelector("#profileName").textContent = currentUser.name;
  document.querySelector("#profileLogin").textContent = currentUser.login;
  document.querySelector("#profileInfoName").textContent = currentUser.name;
  document.querySelector("#profileInfoCountry").textContent =
    currentUser.adress;
  document.querySelector("#profileInfoPhone").textContent =
    currentUser.phoneNumber;
  document.querySelector("#profileInfoEmail").textContent = currentUser.email;

  // Установка аватара
  const newLogins = JSON.parse(localStorage.getItem("loginsList"));
  for (let i = 0; i < newLogins.length; i++) {
    if (currentUser.login === newLogins[i].login) {
      const ProfileLogo = document.querySelector("#ProfileLogo");
      ProfileLogo.src = newLogins[i].avatar;
    }
  }
};

//! Обработчик события popstate

const AdminSection = document.querySelector(".AdminSection");
const UserSection = document.querySelector(".UserSection");

window.addEventListener("popstate", (event) => {
  if (event.state) {
    if (event.state.registerOpened) {
      // Если состояние истории указывает, что регистрация должна быть открыта
      registerContainer.classList.remove("Hidden");
      Display(LogOutMessage, "f");
      Display(ButtonsProfileContainer, "t");
      Display(profileInfo, "f");
      Display(MyGuitarsInfo, "f");
      Display()

      Display(UserSection, "t");
      Display(AdminSection, "f");
      InsideContainer.classList.remove("ProfileMode");
      InsideContainer.classList.remove("WiderPopUpProfile");
    } else if (event.state.profileOpened) {
      // Если состояние истории указывает, что профиль должен быть открыт
      Display(LogOutMessage, "f");
      Display(ButtonsProfileContainer, "f");
      Display(profileInfo, "t");
      Display(MyGuitarsInfo, "f");
      InsideContainer.classList.add("WiderPopUpProfile");
    InsideContainer.classList.add("ProfileMode");
    } else if (event.state.OrderGuitarsOpened) {
      // Если состояние истории указывает, что окно заказанных гитар должно быть открыто
      Display(MyGuitarsInfo, "t");
      Display(ButtonsProfileContainer, "f");
      InsideContainer.classList.add("WiderPopUpProfile");
      loggedInUserLogin = currentUser.login; // Обновляем логин пользователя, если нужно
      displayUserGuitars(); // Вызываем функцию для отображения гитар
    } else if (event.state.AdminWindowOpened) {
      // Если состояние истории указывает, что админ панель должна быть открыта
      Display(ButtonsProfileContainer, "f");

      Display(UserSection, "f");
      Display(AdminSection, "t");
      InsideContainer.classList.add("WiderPopUpProfile");
      loggedInUserLogin = currentUser.login; // Обновляем логин пользователя, если нужно
      displayUserGuitars(); // Вызываем функцию для отображения гитар
    }
  } else {
    // Если состояние не указано, скрываем все
    registerContainer.classList.add("Hidden");
    Display(LogOutMessage, "f");
    Display(ButtonsProfileContainer, "t");
    Display(profileInfo, "f");

    Display(UserSection, "t");
    Display(AdminSection, "f");
    InsideContainer.classList.remove("WiderPopUpProfile");
    InsideContainer.classList.remove("ProfileMode");
    Display(MyGuitarsInfo, "f"); // Скрываем информацию о гитарах
  }
});

Display(UserSection, "t");
Display(AdminSection, "f");

const AdminWindow = document.querySelector("#AdminWindow");
AdminWindow.onclick = () => {
  Display(UserSection, "f");
  Display(AdminSection, "t");

  history.pushState({ AdminWindowOpened: true }, "Admin-Pannel-window", "Admin-Pannel-window");
};

const popUpGuitarContainer = document.querySelector('.popUpGuitarContainer');
const ProfileAvatarInput = document.querySelector(".ProfileAvatarInput");
const closeAvatarInput = document.querySelector('#closeAvatarInput');

closeAvatarInput.onclick = () =>{
  Display(ProfileAvatarInput, "f");
}

// Функция для открытия соответствующего окна на основе состояния истории
function openPopUpFromHistory() {
  const state = history.state; // Получаем текущее состояние истории

  if (state) {
    if (state.registerOpened) {
      // Если состояние указывает, что регистрация должна быть открыта
      registerContainer.classList.remove("Hidden");

      Display(LogOutMessage, "f");
      Display(ButtonsProfileContainer, "t");
      Display(profileInfo, "f");
      Display(ProfileAvatarInput, "f");
      Display(MyGuitarsInfo, "f");
      InsideContainer.classList.remove("WiderPopUpProfile");
      InsideContainer.classList.remove("ProfileMode");
    } else if (state.profileOpened) {
      // Если состояние указывает, что профиль должен быть открыт
      registerContainer.classList.remove("Hidden");
      
      Display(LogOutMessage, "f");
      Display(ButtonsProfileContainer, "f");
      Display(profileInfo, "t");
      Display(MyGuitarsInfo, "f");
      InsideContainer.classList.add("WiderPopUpProfile");
      InsideContainer.classList.add("ProfileMode");
    } else if (state.OrderGuitarsOpened) {
      // Если состояние истории указывает, что окно заказанных гитар должно быть открыто
      registerContainer.classList.remove("Hidden");
      Display(MyGuitarsInfo, "t");
      Display(ButtonsProfileContainer, "f");
      InsideContainer.classList.add("WiderPopUpProfile");
      InsideContainer.classList.remove("ProfileMode");
      loggedInUserLogin = currentUser.login; // Обновляем логин пользователя, если нужно
      displayUserGuitars(); // Вызываем функцию для отображения гитар
    } else if (state.AdminWindowOpened) {
      // Если состояние истории указывает, что окно заказанных гитар должно быть открыто
      registerContainer.classList.remove("Hidden");
      Display(UserSection, "f");
      Display(AdminSection, "t");

      Display(ButtonsProfileContainer, "f");
      InsideContainer.classList.add("WiderPopUpProfile");
      InsideContainer.classList.remove("ProfileMode");
      loggedInUserLogin = currentUser.login; // Обновляем логин пользователя, если нужно
      displayUserGuitars(); // Вызываем функцию для отображения гитар
    } else if (state.popUpOpened) {
      // Если состояние истории указывает, что окно заказанных гитар должно быть открыто
      popUpGuitarContainer.classList.remove("Hidden");
      
      Display(ButtonsProfileContainer, "f");
      InsideContainer.classList.add("WiderPopUpProfile");
      InsideContainer.classList.remove("ProfileMode");
      loggedInUserLogin = currentUser.login; // Обновляем логин пользователя, если нужно
      displayUserGuitars(); // Вызываем функцию для отображения гитар
    }
  } else {
    // Если состояние не указано, скрываем все
    registerContainer.classList.add("Hidden");

    Display(LogOutMessage, "f");
    Display(ButtonsProfileContainer, "t");
    Display(profileInfo, "f");
    Display(ProfileAvatarInput, "f");
    InsideContainer.classList.remove("ProfileMode");
    InsideContainer.classList.remove("WiderPopUpProfile");
    Display(MyGuitarsInfo, "f"); // Скрываем информацию о гитарах
  }
}
window.addEventListener("load", openPopUpFromHistory);

//* In Profile

// Function to update localStorage when profile is edited
function updateLoginsList() {
  const loginsList = JSON.parse(localStorage.getItem("loginsList")) || [];
  const userIndex = loginsList.findIndex(
    (user) => user.login === currentUser.login
  );

  if (userIndex !== -1) {
    // Обновляем пользователя, сохраняя также его пароль
    loginsList[userIndex] = {
      ...loginsList[userIndex], // Сохраняем пароль и другие неизменные поля
      name: currentUser.name,
      adress: currentUser.adress,
      phoneNumber: currentUser.phoneNumber,
      email: currentUser.email,
    };
    localStorage.setItem("loginsList", JSON.stringify(loginsList));
  }
}

let countriesList = [];

const getCountriesList = async () => {
  const URL = 'https://api.sampleapis.com/countries/countries';

  try {
    const response = await axios.get(URL);
    // Получаем массив стран из ответа и сортируем по алфавиту
    countriesList = response.data.map(country => country.name).sort();
    return countriesList;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

getCountriesList();

const ProfileAdressInput = document.querySelector('#ProfileAdressInput');
setTimeout(() => {
  ProfileAdressInput.innerHTML = "";
  for(let i = 0; i < countriesList.length; i++){
    console.log(countriesList[i]);
    
    const option = document.createElement('option');
    option.value = countriesList[i];
    option.textContent = countriesList[i];

    ProfileAdressInput.appendChild(option)
  }
}, 1000);


function showAndCorrectElement(ElementClass, PenID, ElementTextID, InputID) {
  const elementClass = document.querySelector(ElementClass);
  const elementTextID = document.querySelector(ElementTextID);
  const penID = document.querySelector(PenID);
  const inputID = document.querySelector(InputID);

  penID.classList.add("Hidden");
  Display(inputID, "f");

  // Обработчики для наведения мыши
  elementClass.onmouseover = () => {
    penID.classList.remove("Hidden");
    isExistCookie("currentUser");
  };

  elementClass.onmouseleave = () => {
    penID.classList.add("Hidden");
  };

  // Обработчик нажатия на иконку редактирования (ручку)
  penID.onclick = () => {
    isExistCookie("currentUser");
    Display(inputID, "t");
    Display(elementTextID, "f");
    Display(penID, "f");

    if (inputID.tagName === "SELECT") {
      inputID.value = elementTextID.textContent;
    } else {
      inputID.value = elementTextID.textContent;
    }

    document.addEventListener("keydown", (event) => {
      const activeElement = document.activeElement;

      if (
        (event.key === "Enter" || event.keyCode === 13) &&
        activeElement === inputID
      ) {
        event.preventDefault();
        elementTextID.textContent = inputID.value;

        Display(inputID, "f");
        Display(elementTextID, "i");
        Display(penID, "i");

        // Сохраняем данные в зависимости от класса элемента
        if (ElementClass === ".ProfileUserName") {
          currentUser.name = inputID.value;
        } else if (ElementClass === ".ProfileCoutry") {
          currentUser.adress = inputID.value;
        } else if (ElementClass === ".ProfilePhone") {
          currentUser.phoneNumber = inputID.value;
        } else if (ElementClass === ".ProfileEmail") {
          currentUser.email = inputID.value;
        }

        // Сохраняем изменения в localStorage и куки
        updateLoginsList();
        saveCurrentUserToCookies();
      }
    });
  };

  // Обработчик для изменения значения select (если InputID — это select)
  if (inputID.tagName === "SELECT") {
    inputID.addEventListener('change', (event) => {
      elementTextID.textContent = event.target.value;

      Display(inputID, "f");
      Display(elementTextID, "i");
      Display(penID, "i");

      // Сохраняем измененное значение
      currentUser.adress = inputID.value;

      updateLoginsList();
      saveCurrentUserToCookies();
    });
  }
}

// Привязка к элементам
showAndCorrectElement(
  ".ProfileUserName",
  "#correctName",
  "#profileInfoName",
  "#ProfileNameInput"
);
showAndCorrectElement(
  ".ProfileCoutry",
  "#correctAdress",
  "#profileInfoCountry",
  "#ProfileAdressInput"
);
showAndCorrectElement(
  ".ProfilePhone",
  "#correctPhone",
  "#profileInfoPhone",
  "#ProfilePhoneInput"
);
showAndCorrectElement(
  ".ProfileEmail",
  "#correctEmail",
  "#profileInfoEmail",
  "#ProfileEmailInput"
);

//* If quit

RegisterContainer.addEventListener("click", (event) => {
  if (
    event.target === InsideContainer ||
    InsideContainer.contains(event.target)
  ) {
    return;
  }

  // Скрываем контейнер регистрации
  RegisterContainer.classList.add("Hidden");
  cursor.classList.remove("scale");
  ClearForm();

  // Очищаем поля ввода
  document.getElementById("LoginInput").value = "";
  document.getElementById("passwordInput").value = "";
  document.getElementById("nameInput").value = "";

  //* Close Profile Window
  if (isLogged === true) {
    Display(MyGuitarsInfo, "f");
    Display(ButtonsProfileContainer, "t");
    Display(profileInfo, "f");
    Display(LogOutMessage, "f");
    InsideContainer.classList.remove("WiderPopUpProfile");
    InsideContainer.classList.remove("ProfileMode");
  }

  // Возвращаемся к предыдущему состоянию в истории
  history.back();
});

RegisterContainer.addEventListener("mouseover", (event) => {
  if (
    event.target === InsideContainer ||
    InsideContainer.contains(event.target)
  ) {
    cursor.classList.remove("scale");
  } else {
    cursor.classList.add("scale");
  }
});

const ProfileAvatarContainer = document.querySelector(
  ".ProfileAvatarContainer"
);
const editAvatarButton = document.querySelector("#editAvatarButton");

const avatarinput = document.querySelector("#avatarinput");

editAvatarButton.classList.add("Hidden");

ProfileAvatarContainer.onmouseover = () => {
  isExistCookie("currentUser");
  editAvatarButton.classList.remove("Hidden");
  cursor.classList.add("pointer");
};
ProfileAvatarContainer.onmouseleave = () => {
  editAvatarButton.classList.add("Hidden");
  cursor.classList.remove("pointer");
};

Display(ProfileAvatarInput, "f");

editAvatarButton.onclick = () => {
  Display(ProfileAvatarInput, "t");
};

document.addEventListener("keydown", (event) => {
  // Проверяем, отображается ли поле для ввода аватара

  if (event.key === "Enter" || event.keyCode === 13) {
    if (ProfileAvatarInput.style.display === "block") {
      // Убедимся, что окно редактирования открыто
      event.preventDefault(); //* Preventing default

      ProfileLogo.src = avatarinput.value;
      const newLogins = JSON.parse(localStorage.getItem("loginsList"));

      for (let i = 0; i < newLogins.length; i++) {
        if (currentUser.login === newLogins[i].login) {
          newLogins[i].avatar = avatarinput.value;
        }
      }

      localStorage.setItem("loginsList", JSON.stringify(newLogins));

      avatarinput.value = "";
      Display(ProfileAvatarInput, "f");
    }
  }
});

//* Ordered guitars

let loggedInUserLogin = "";

const MyGuitarsButton = document.querySelector("#MyGuitarsButton");
MyGuitarsButton.onclick = () => {
  Display(MyGuitarsInfo, "t");
  Display(ButtonsProfileContainer, "f");
  InsideContainer.classList.add("WiderPopUpProfile");
  history.pushState(
    { OrderGuitarsOpened: true },
    "Ordered-Guitars-window",
    "Ordered-Guitars-window"
  );

  loggedInUserLogin = currentUser.login;
  displayUserGuitars();
};

//* myGuitarData

let myGuitarData = JSON.parse(localStorage.getItem("myGuitarData"));

if (!myGuitarData) {
  myGuitarData = [
    {
      id: 1,
      name: "Custom SG | SG R 540",
      guitarist: "JaxMalone",
      status: "ready",
      img: "./img/SGR.jpg",
    },
    {
      id: 2,
      name: "Custom Les Paul | LP W 350",
      guitarist: "JaxMalone",
      status: "ready",
      img: "./img/LPW.jpg",
    },
    {
      id: 4,
      name: "Custom Semi-Acoustic | SA Bk 310",
      guitarist: "JaxMalone",
      status: "ready",
      img: "./img/SABk.jpg",
    },
    {
      id: 5,
      name: "Custom Explorer | EX P 880",
      guitarist: "JaxMalone",
      status: "not ready",
      img: "./img/EXp.jpg",
    },

    {
      id: 6,
      name: "Custom Stratocaster | ST R 420",
      guitarist: "SchwarzK",
      status: "ready",
      img: "./img/STR.jpg",
    },
    {
      id: 7,
      name: "Custom Star | JSt Bk 666",
      guitarist: "SchwarzK",
      status: "ready",
      img: "./img/BKBk.jpg",
    },
    {
      id: 8,
      name: "Custom Black Star | JSt BKW 670",
      guitarist: "SchwarzK",
      status: "ready",
      img: "./img/BKW.jpg",
    },
  ];

  // Сохраняем данные в localStorage
  localStorage.setItem("myGuitarData", JSON.stringify(myGuitarData));
}

function displayUserGuitars() {
  // Очистим текущий список перед отображением новых гитар
  const guitarsContainer = document.querySelector(".MyGuitarsContainer");
  guitarsContainer.innerHTML = "";

  // Получаем имя залогиненного пользователя
  const MyGuitarsButton = document.querySelector("#MyGuitarsButton");

  // Фильтруем гитары, у которых гитарист совпадает с залогиненным пользователем
  const userGuitars = myGuitarData.filter(
    (guitar) => guitar.guitarist === loggedInUserLogin
  );

  if (userGuitars.length > 0) {
    userGuitars.forEach((guitar) => {
      // Создаем карточку для каждой гитары
      const guitarCard = document.createElement("div");
      guitarCard.classList.add("GuitarItem");
      guitarCard.id = `MyGuitar${guitar.id}`;
      let statusClass = "";

      if (guitar.status == "ready") {
        statusClass = "ReadyStatus";
      } else {
        statusClass = "NotReadyStatus";
      }

      guitarCard.innerHTML = `
  <img class="ImageItem" src="${guitar.img}" alt="image of guitar">
  <div class="TitleContainer">
    <span class="TitleItem">${guitar.name}</span>
    <div class="${statusClass}">${guitar.status}</div>
  </div>
`;
      // Добавляем карточку в контейнер
      guitarsContainer.appendChild(guitarCard);
    });
  } else {
    // Если гитар нет, выводим сообщение
    guitarsContainer.innerHTML = "<p>No guitars ordered by this user yet(</p>";
  }
}

// Вызываем функцию для отображения гитар пользователя

document.addEventListener('DOMContentLoaded', function() {
    const languageSwitchButton = document.querySelector('.languageSwitchButton');

    // Get the current language from local storage or set English as default
    let currentLanguage = localStorage.getItem('language') || 'en';
    switchLanguage(currentLanguage);

    // Function to switch languages
    function switchLanguage(lang) {
        const elements = document.querySelectorAll('[data-lang-en], [data-lang-cz], [data-lang-de]');
        elements.forEach(element => {
            if (lang === 'cz') {
                element.textContent = element.getAttribute('data-lang-cz') || element.textContent;
            } else if (lang === 'de') {
                element.textContent = element.getAttribute('data-lang-de') || element.textContent;
            } else {
                element.textContent = element.getAttribute('data-lang-en') || element.textContent;
            }
        });

        // Update placeholders if needed
        const placeholders = document.querySelectorAll('[data-lang-en][data-lang-cz][data-lang-de]');
        placeholders.forEach(input => {
            if (lang === 'cz') {
                input.setAttribute('placeholder', input.getAttribute('data-lang-cz'));
            } else if (lang === 'de') {
                input.setAttribute('placeholder', input.getAttribute('data-lang-de'));
            } else {
                input.setAttribute('placeholder', input.getAttribute('data-lang-en'));
            }
        });

        // Save the current language in local storage
        localStorage.setItem('language', lang);
    }

    // Event for clicking the language switch button
    languageSwitchButton.addEventListener('click', function() {
        let newLanguage = (localStorage.getItem('language') === 'en') ? 'cz' :
                          (localStorage.getItem('language') === 'cz') ? 'de' : 'en';
        switchLanguage(newLanguage);
    });
});
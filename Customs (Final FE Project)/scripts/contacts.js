const requestCallButton = document.querySelector('#requestCallButton');
const inputNumber = document.querySelector('#inputNumber');
const ThankYou = document.querySelector('#ThankYou');

document.addEventListener('DOMContentLoaded', function() {
    const notValidSymbol = document.querySelector('#notValidSymbol');
    const NotEnoughSymbols = document.querySelector('#NotEnoughSymbols');

    inputNumber.addEventListener('input', function(event) {
        let value = inputNumber.value;

        // Test on non-digit symbols
        if (/[^0-9]/.test(value)) {
            notValidSymbol.classList.add('Alert');  // Show message
            inputNumber.value = value.replace(/[^0-9]/g, ''); // Don't accept non-dig symbols
        } else {
            notValidSymbol.classList.remove('Alert');
        }

        if (value.length > 9) {
            inputNumber.value = value.slice(0, 9);
        }
    });
});

requestCallButton.addEventListener('click', function() {
    let inputNumberValue = document.querySelector('#inputNumber').value;
    const notEnoughSymbolsDiv = document.querySelector('#NotEnoughSymbols');

    // Test on symbols quantity
    if (inputNumberValue.length < 9) {
        notEnoughSymbolsDiv.classList.add('Alert');

        setTimeout(() => {
            notEnoughSymbolsDiv.classList.remove('Alert');
        }, 4000); //* Disable "Alert" in 4 seconds
    } else {
        inputNumber.value = "";
        ThankYou.classList.add('Alert');

        setTimeout(() => {
            ThankYou.classList.remove('Alert');
        }, 4000); //* Disable "Alert" in 4 seconds
    }
});

function ClickToCopy(copyButtonID, textToCopyID, messageID) {
    const copyButton = document.getElementById(copyButtonID);
    const textToCopy = document.getElementById(textToCopyID).textContent;
    
    const message = document.getElementById(messageID);

    copyButton.addEventListener('click', () => {

        navigator.clipboard.writeText(textToCopy).then(() => {
            message.classList.add('Copied');

            setTimeout(() => {
                message.classList.remove('Copied');
            }, 4000); //* Disable "Alert" in 4 seconds
        });
    });
};

ClickToCopy("email", "emailAdress", "emailCopied");
ClickToCopy("phone", "phoneNumber", "phoneCopied");
ClickToCopy("adress", "OfficeAdress", "adressCopied");
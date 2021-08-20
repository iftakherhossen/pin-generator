function getPin() {
    const pin = Math.round(Math.random() * 100000);
    const pinString = pin + '';
    if (pinString.length == 5) {
        return pin;
    }
    else {
        return getPin();
    }
};

function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
};

document.getElementById('keypad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const numInput = document.getElementById('keypad-input');
    if (isNaN(number)) {
        if (number == 'C') {
            numInput.value = '';
        }
        else if (number == '&let;') {
            document.getElementById('numInput').value = numInput.value.slice(0, -1);
        };
    }
    else {
        ;
        const previousNum = numInput.value;
        const newNum = previousNum + number;
        numInput.value = newNum;
    }
    
});

function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const keypadInput = document.getElementById('keypad-input').value;
    const successMessage = document.getElementById('notify-success');
    const failError = document.getElementById('notify-fail');

    if (pin == keypadInput) {
        successMessage.style.display = 'block';
        failError.style.display = 'none';
        document.getElementById('display-pin').value = '';
        document.getElementById('keypad-input').value = '';
    }
    else {
        failError.style.display = 'block';
        successMessage.style.display = 'none';
        document.getElementById('display-pin').value = '';
        document.getElementById('keypad-input').value = '';
    }
};
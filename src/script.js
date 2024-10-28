const inputField1 = document.getElementById('number1');
const inputField2 = document.getElementById('number2');
inputField1.addEventListener('blur', function() {
    handleInput1Blur();
});
inputField2.addEventListener('blur', function() {
    handleInput2Blur();
});
function handleInput1Blur() {
    var notification = document.getElementById('notification');
    var inputValue = inputField1.value;
    if (inputValue === ""){
        const message = 'Vui lòng nhập <i>Số thứ nhất</i>';
        notification.innerHTML = message;
        return;
    }

    inputValue = parseFloat(inputValue);
    if (isNaN(inputValue)) {
        const message = 'Giá trị nhập ở ô <i>Số thứ nhất</i> không phải là số';
        notification.innerHTML = message;
        return;
    }
    else {
        notification.textContent = '';
    }
}
function handleInput2Blur() {
    var notification = document.getElementById('notification');
    var inputValue = inputField2.value;
    if (inputValue === ""){
        const message = 'Vui lòng nhập <i>Số thứ hai</i>';
        notification.innerHTML = message;
        return;
    }

    inputValue = parseFloat(inputValue);
    if (isNaN(inputValue)) {
        const message = 'Giá trị nhập ở ô <i>Số thứ hai</i> không phải là số';
        notification.innerHTML = message;
        return;
    }
    else {
        notification.textContent = '';
    }
}


function calculate() {
    var number1 = document.getElementById('number1').value;
    var number2 = document.getElementById('number2').value;
    var result = document.getElementById('result');
    var notification = document.getElementById('notification');

    if (number1 === ""){
        const message = 'Vui lòng nhập <i>Số thứ nhất</i>';
        notification.innerHTML = message;
        return;
    }
    else if (number2 === ""){
        const message = 'Vui lòng nhập <i>Số thứ hai</i>';
        notification.innerHTML = message;
        return;
    }

    number1 = parseFloat(number1);
    number2 = parseFloat(number2);

    if (isNaN(number1)) {
        const message = 'Giá trị nhập ở ô <i>Số thứ nhất</i> không phải là số';
        notification.innerHTML = message;
        return;
    } else if (isNaN(number2)) {
        const message = 'Giá trị nhập ở ô <i>Số thứ hai</i> không phải là số';
        notification.innerHTML = message;
        return;
    } else if (document.getElementById('divide').checked && number2 === 0) {
        notification.textContent = 'Không thể chia cho 0';
        return;
    } else {
        notification.textContent = '';
    }

    var operationInput = document.querySelector('input[name="operation"]:checked');
    var operation;

    if (operationInput) {
        operation = operationInput.value;
    } else {
        notification.textContent = 'Hãy chọn toán tử';
        return;
    }

    switch (operation) {
        case 'add':
            result.value = number1 + number2;
            break;
        case 'subtract':
            result.value = number1 - number2;
            break;
        case 'multiply':
            result.value = number1 * number2;
            break;
        case 'divide':
            result.value = number1 / number2;
            break;
    }
}

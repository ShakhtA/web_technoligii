// Задание 1
let name = prompt('Как Вас зовут?');
alert(`Привет, ${name}`);

//Задание 2
let age = prompt('Сколько Вам лет?');
switch(age) {
    case '18': {
        alert("Вы - совершеннолетний, все можно!");
        break;
    }
    case '10': {
        alert('Вам надо учить уроки!');
        break;
    }
    case '30': {
        alert('Ложитесь спать, завтра на работу');
        break;
    }
    default: {
        alert("Мы не знаем, что Вам делать");
    }
}

//Дополнительное задание

//Сделать так, чтобы при нажатии на кнопку менялся цвет и текст элемента <p>

count = 0
function changeColorText() {
    let el = document.getElementById('el2');
    if (count % 2 == 0) {
        el.classList.add('title');
        el.textContent = 'Первое дополнительное задание выполнено';
    }
    else {
        el.classList.remove('title');
        el.textContent = "Дополнительное задание №1";
    }
    count++;
}
 //Сделать так, чтобы при нажатии на кнопку все элементы списка (тэги ul, li) меняли цвет на активный

let btn = document.getElementById('btn1');
btn.addEventListener('click', changeColorText);

function changeColorList() {
    let el = document.getElementById('el3');
    if (count % 2 == 0) el.classList.add('active');
    else el.classList.remove('active');
    count++;
}

let btn2 = document.getElementById('btn2');
btn2.addEventListener('click', changeColorList);

//Сделать так, чтобы при наведении на элемент его цвет менялся на другой (не обязательно делать при помощи js)

function changeColor() {
    let el = document.getElementById('el1');
    if (event.type == 'mouseover') el.style.color = "blue";
    else if (event.type == 'mouseout') el.style.color = "red";
}
let headText = document.getElementById('el1');
headText.addEventListener('mouseover', changeColor);
headText.addEventListener('mouseout', changeColor);

let display = document.querySelector('.text_input');
let buttons = document.querySelectorAll('.button'); // Находим кнопки и вывод текста Input
let str = '';  // Все довольно просто есть функция eval которая могёт производить математические измерения

for(let i = 0; i < buttons.length; i++){ // цикл нахождения кнопки и и вызова основной функции
    addEvent(buttons[i]); 
}

function addEvent(button){ // функция которая выполняет все математические измерения
    button.addEventListener('click', event); // добавление ивента на кпопку при нажатие и вызов функции
    function event(){
        let type = button.getAttribute('data-type') // прописываем в type значение data typa
        if(type === '='){ // если =  то все что записано в input складываем и выводим на дисплей
            str = eval(str);
            display.value = str;
        } else if( type === 'c'){ // если С то обнуляем дисплей и выводим пустую строку
            str = '';
        } else if(type === 'back'){ // если BACK то уменьшаем строку в дисплее на -1, то есть убераем первый символ или числоя
            str = str.slice(0, -1);
        } else { // если нажата просто кнопка с числом то добавляем ее в начало
            str += type;
        }

        display.value = str; // Вывод значения в дисплей
    }
    console.log(str); // вывод в консоль
}
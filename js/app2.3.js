'use strict';
let x = prompt('Введите значение по оси х',"");
let y = prompt('Введите значение по оси y',"");
if (x * x + y * y < 1
    || 2 * x + 2 * y + 4 >= 0 && 0 > y && y > -2 && 0 > x && x > -2) {
    alert( 'Точка попадает в область!' )
}
else {
    alert( 'Точка НЕ попадает в область' )
}
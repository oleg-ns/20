//1
var month = prompt("Какой сейчас месяц?");
if (month === "сентябрь") {alert("Вы правы!")} else {alert("Та ну ты что? сентябрь!")};
//2
var num = +prompt("Введите любое целое число");
console.log(num);
if (num > 0) {alert("1")} else if (num < 0){alert("-1")} else {alert("0")};
//3
var x = 4, y = 6;
alert(x + y >= 9?"Да!":'Нет!');
//4
do {
    var i = +prompt("Введите число больше 100");
} while (i <= 100);
//5
var a = +prompt('a?', '');
switch(a) {
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
        alert("2,3");
        break;
    case 3:
        alert("2,3");
        break;
};
//6
var x = prompt("Введите Х");
var n = prompt("Введите N");
function pow(x,n) {
    var first = x;
    for (var i = 1; i < n; i++) {
        first*= x;
    }
    return first
};
alert(pow(x,n) );
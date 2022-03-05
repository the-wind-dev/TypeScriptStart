/*task 1*/
function concat(first, second) {
    console.log('we are in concat');
    return first + second;
}
;
var myHometask = {
    howIDoIt: "I Do It Wel",
    someArray: ["string one", "string two", 42],
    withData: [{ howIDoIt: "I Do It Wel", someArray: ["string one", 23] }]
};
var tsArr = [1, 2, 3];
//проверяем, что сворачивает массив в число
console.log(tsArr.reduce(function (sum, current, index, array) {
    //проверяем все поля функции
    console.log("\u0442\u0435\u043A\u0443\u0449\u0438\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442: ".concat(current, " \u0438\u0437 \u043C\u0430\u0441\u0441\u0438\u0432\u0430 [").concat(array, "], \u0438\u043D\u0434\u0435\u043A\u0441 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 ").concat(index, " "));
    return sum + current;
}, 10));
//проверяем, что сворачивает числовой массив в строку
console.log(tsArr.reduce(function (str, current) {
    console.log('current: ', current);
    var currentText = +current;
    console.log('currentText:', currentText);
    str = str + currentText;
    return str;
}, 'strInit'));

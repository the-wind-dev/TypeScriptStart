/*task 1*/
function concat(first: string, second: string): string {
    console.log('we are in concat');
    return first + second;
}

// console.log(concat('Hello ', 'World!'));

/*task 2*/
type MyArrayFirst = (string | number);

interface MyFirstInterface {
    howIDoIt: string;
    someArray: MyArrayFirst[];
    withData?: [MyFirstInterface];
};

const myHometask: MyFirstInterface = {
	howIDoIt: "I Do It Wel",
	someArray: ["string one", "string two", 42],
	withData: [{ howIDoIt: "I Do It Wel", someArray: ["string one", 23] }],
};

// console.log(myHometask);

/*task 3*/

interface MyArrSecond<T> {
    [n: number]: T;

    reduce<U>( 
        fn: (previousValue: T, item: T, index?: number,  array?: MyArrSecond<T>) => T,
        init?: U) : U;
}

const tsArr: MyArrSecond<number> = [1, 2, 3];


//проверяем, что сворачивает массив в число
console.log( tsArr.reduce( (sum, current, index, array) => {
    //проверяем все поля функции
    console.log(`текущий элемент: ${current} из массива [${array}], индекс элемента ${index} `); 
    return sum + current;
}, 10) );
//проверяем, что сворачивает числовой массив в строку
console.log( tsArr.reduce( ( str, current) => {
    console.log('current: ',current);
    let currentText = +current;
    console.log('currentText:', currentText);
    str = str + currentText;
    return str;
}, 'strInit') );
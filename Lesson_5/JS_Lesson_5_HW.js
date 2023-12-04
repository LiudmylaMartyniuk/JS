// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
// - створити функцію, яка обчислює та повертає площу прямокутника зі сторонами а і б.

let S = (a, b) => a * b;

console.log(S(9, 3));

// - створити функцію, яка обчислює та повертає площу кола з радіусом r.

let circleArea = (r) => Math.PI * Math.pow(r, 2);

console.log(circleArea(1));

// - створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіутом r.

let cylinderArea = (r, h) => 2 * Math.PI * Math.pow(r, 2) + 2 * Math.PI * r * h;

console.log(cylinderArea(5, 5));

// - створити функцію, яка приймає масив та виводить кожен його елемент.

let cars = [
    {id: 1, name: 'Ford Falcon', country: 'Australia'},
    {id: 2, name: 'Toyota HiLux', country: 'Argentina'},
    {id: 3, name: 'Volkswagen Gol', country: 'Brasil'},
    {id: 4, name: 'Wuling Hongguang', country: 'China'},
    {id: 5, name: 'Renault Clio', country: 'France'},
    {id: 6, name: 'Volkswagen Golf', country: 'Germany'},
    {id: 7, name: 'Maruti Suzuki Alto', country: 'India'},
    {id: 8, name: 'Toyota Avanza', country: 'Indonesia'},
    {id: 9, name: 'Fiat Uno', country: 'Italy'},
    {id: 10, name: 'Toyota Corolla', country: 'Japan'}
]
cars.forEach((element) => {
    console.log(element);
});

// - створити функцію, яка створює параграф з текстом. Текст задати через аргумент.

let createP = (text) => document.write(`<p>${text}</p>`);

createP('Template literals are literals delimited with backtick.');

// - створити функцію, яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.

let createList = (liText) =>
    document.write(`<ul>
    <li>${liText}</li>
    <li>${liText}</li>
    <li>${liText}</li>
    </ul>`);

createList('hoisting');

// - створити функцію, яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//     Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл).
let createList2 = (text, n) => {
    document.write(`<ul>`);
    for (let i = 1; i <= n; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}

createList2('GPA - global product administration', 5);

// - створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список.
let listBuilder = (array2) => {
    document.write(`<ul>`);
    for (const arrayElement of array2) {
        document.write(`<li>${arrayElement}</li>`);
    }
    document.write(`</ul>`);
}

listBuilder([4, 'oi', false, true, 5.5, 'overload']);

// - створити функцію, яка приймає масив об'єктів з наступними полями: id,name,age, та виводить їх в документ.
// Для кожного об'єкту окремий блок.
let displayObjects = (objectsArray) => {
    for (const objectsArrayElement of objectsArray) {
        document.write(`<div>${objectsArrayElement.id}, ${objectsArrayElement.name}, ${objectsArrayElement.age}</div>`);
    }
}

let people = [
    {id: 1, name: 'Vasyl', age: 37},
    {id: 2, name: 'Olena', age: 31},
    {id: 3, name: 'Valeria', age: 35}
];

displayObjects(people);

// - створити функцію, яка повертає найменше число з масиву.
let smallestNumber = (arr) => {
    let smallest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    return smallest;
}
console.log(smallestNumber([-101.1, 36.8, -25]));

// - створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад: sum([1,2,10]) //->13
let sum = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}

console.log(sum([9, -9, 10, 85]));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах.
// Приклад:  swap([11,22,33,44],0,1) //=> [22,11,33,44].
let swap = (arr, index1, index2) => {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
}

console.log(swap([1, 2, 3, 4, 5, 6], 0, 5));

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency).
// Приклад: exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250.
let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    let exchangedAmount;
    for (const currencyValue of currencyValues) {
        if (currencyValue.currency === exchangeCurrency) {
            exchangedAmount = sumUAH / currencyValue.value;
        }
    }
    return (exchangedAmount).toFixed(2);
}

console.log(exchange(100, [{currency: 'NOK', value: 3.4}, {currency: 'USD', value: 37}, {currency: 'SCR', value: 2.79}], 'SCR'));
// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr;
arr = [2.25, true, false, 3.32, 1000, 'abc', '"', '%', [1, 2, 3], 2023];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8][0]);
console.log(arr[8][1]);
console.log(arr[8][2]);
console.log(arr[9]);

// - Створити 3 об'єкти, які описують книги. Поля об'єкту : title ,pageCount, genre.
let book01 = {
    title:'In Search of Lost Time',
    pageCount: 120,
    genre:'fiction'
};
let book02 = {
    title:'Ulysses',
    pageCount: 245,
    genre:'fiction'
};
let book03 = {
    title:'Confessions',
    pageCount: 67,
    genre:'nonfiction'
};

// - Створити 3 об'єкти, які описують книги. Поля об'єкту : title ,pageCount, genre, c.
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book1 = {
    title:'In Search of Lost Time',
    pageCount: 120,
    genre:'fiction',
    authors: [
        {
            name: 'Marcel Proust',
            age: 152},
    ]
};
let book2 = {
    title:'Ulysses',
    pageCount: 245,
    genre:'fiction',
    authors: [
        {
            name: 'James Joyce',
            age: 141},
    ]
};
let book3 = {
    title:'Confessions',
    pageCount: 67,
    genre:'nonfiction',
    authors: [
        {
            name: 'St. Augustine of Hippo',
            age: 1000},
        {
            name: 'St. George of Hippo',
            age: 1000},
    ]
};

// - Створити масив з 10 об'єктами, які описують сутніть "користувач". Поля: name, username,password.
// Вивести в консоль пароль кожного користувача

let users = [
    {name: 'Olena', username: 'user1', password: 'password1230'},
    {name: 'Oxana', username: 'user2', password: 'password1231'},
    {name: 'Iryna', username: 'user3', password: 'password1232'},
    {name: 'Oleh', username: 'user4', password: 'password1233'},
    {name: 'Roman', username: 'user5', password: 'password1234'},
    {name: 'Bohdan', username: 'user6', password: 'password1235'},
    {name: 'Synevir', username: 'user7', password: 'password1236'},
    {name: 'Melanka', username: 'user8', password: 'password1237'},
    {name: 'Ivan', username: 'user9', password: 'password1238'},
    {name: 'Mykyta', username: 'user10', password: 'password1239'}
]
console.log (users[0]['password']);
console.log (users[1]['password']);
console.log (users[2]['password']);
console.log (users[3]['password']);
console.log (users[4]['password']);
console.log (users[5]['password']);
console.log (users[6]['password']);
console.log (users[7]['password']);
console.log (users[8].password);
console.log (users[9].password);

// Логічні розгалуження:
// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
// Перевірте  скрипт при a (???), що дорівнює 1, 0, -3

let x = 6;
if (x !== 0) {
    console.log('Вірно');
} else if (x === 0) {
    console.log('Невірно');
} else {
    console.log('Невідоме значення');
}

// - Дано змінну time, яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 15;
if (time >= 0 && time <= 14) {
    console.log('Число попадає в першу частину години');
} else if (time >= 15 && time <= 29) {
    console.log('Число попадає в другу частину години');
} else if (time >= 30 && time <= 44) {
    console.log('Число попадає в третю частину години');
} else {
    console.log('Число попадає в четверту частину години');
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 35;
if (day >= 1 && day <= 9) {
    console.log('Перша декада');
} else if (day >= 10 && day <= 19) {
    console.log('Друга декада');
} else if (day >= 20 && day <= 31) {
    console.log('Третя декада');
} else {
    console.log('Невірне число');
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
// відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let weekday = +prompt('Enter number of the weekday');
switch (weekday) {
    case (1):
        console.log('Create the Test Plan, wash the dishes, speak to PO');
        break;
    case (2):
        console.log('Create the Test Strategy');
        break;
    case (3):
        console.log('Request the vacation, create test cases');
        break;
    case (4):
        console.log('Buy the gift, finish the work assignments');
        break;
    case (5):
        console.log('Finish the story, clean the washroom');
        break;
    case (6):
        console.log('Shopping');
        break;
    case (7):
        console.log('Meet with a friend');
        break;
    default:
        console.log('Enter the correct number');
        break;
}

// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

let number1 = +prompt('Please enter the number1');
let number2 = +prompt('Please enter the number2');
if (number1 > number2) {
    console.log(number1);
} else if (number2 > number1) {
    console.log(number2);
} else {
    console.log('Numbers are equal:', number1, '=', number2);
}

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// за допомогою  оператора || буде присвоювати змінній х значення "default" якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

let X = 100/'true';
if (X === '' || X === undefined || X === null ||  isNaN(X) || X === false) {
    X = 'default';
}
console.log(X);

// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його
// елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log(coursesAndDurationArray[0].title + " - Супер");
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log(coursesAndDurationArray[1].title + " - Супер");
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log(coursesAndDurationArray[2].title + " - Супер");
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log(coursesAndDurationArray[3].title + " - Супер");
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log(coursesAndDurationArray[4].title + " - Супер");
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log(coursesAndDurationArray[5].title + " - Супер");
}
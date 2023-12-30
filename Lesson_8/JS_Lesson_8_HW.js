// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User (id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

const usersArray = [
    new User(10, 'Olena', 'M', 'Olena@gmail.com', '+38050'),
    new User(3, 'Iryna', 'N', 'Iryna@gmail.com', '+38050'),
    new User(2, 'Oxana', 'O', 'Oxana@gmail.com', '+38050'),
    new User(4, 'Lilia', 'P', 'Lilia@gmail.com', '+38050'),
    new User(5, 'Olena', 'Lrfdseaw', 'Olena@gmail.com', '+38050'),
    new User(6, 'Olena', 'Rytre', 'Olena@gmail.com', '+38050'),
    new User(7, 'Olena', 'Mgfds', 'Olena@gmail.com', '+38050'),
    new User(8, 'Olena', 'Mrfsdae', 'Olena@gmail.com', '+38050'),
    new User(9, 'Olena', 'Medws', 'Olena@gmail.com', '+38050'),
    new User(1, 'Olena', 'Mew', 'Olena@gmail.com', '+38050')]

console.log(usersArray);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати, залишивши тільки об'єкти з парними id (filter)

let evenIds = usersArray.filter(value => value.id%2 === 0);
console.log(evenIds);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sortedArray = usersArray.sort((a,b) => {return a.id - b.id;});
console.log(sortedArray);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor (id, name, surname , email, phone, order){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}
}

const clientsArray = [
    new Client(10, 'Ruslan', 'M', 'Ruslan@gmail.com', '+38050', ['sausages', 'onions']),
    new Client(3, 'Iryna', 'N', 'Iryna@gmail.com', '+38050', ['dress', 'potatoes']),
    new Client(2, 'Oxana', 'O', 'Oxana@gmail.com', '+38050', ['mangos', 'shoes']),
    new Client(4, 'Lilia', 'P', 'Lilia@gmail.com', '+38050', ['mangos', 'shoes', 'bag']),
    new Client(5, 'Olena', 'Lrfdseaw', 'Olena@gmail.com', '+38050', ['papaya', 'shoes', 'bag']),
    new Client(6, 'Olena', 'Rytre', 'Olena@gmail.com', '+38050', ['sofa', 'shoes', 'carpet']),
    new Client(7, 'Iryna', 'Mgfds', 'Iryna@gmail.com', '+38050', ['lamp', 'plant', 'carpet']),
    new Client(8, 'Olena', 'Mrfsdae', 'Olena@gmail.com', '+38050', ['curtains', 'stool', 'carpet']),
    new Client(9, 'Oxen', 'Medws', 'Oxen@gmail.com', '+38050', ['bedsheets']),
    new Client(1, 'Ivan', 'Mew', 'Ivan@gmail.com', '+38050', ['table'])]

console.log(clientsArray);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sortedClients = clientsArray.sort((c1, c2) => {return c1.order.length - c2.order.length});
console.log(sortedClients);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, manufacturer, year, maxspeed, enginecapacity) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxspeed = maxspeed;
    this.enginecapacity = enginecapacity;

    this.drive = function(){
        console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`)
    }

    this.info = function(){
        console.log('model: ', this.model);
        console.log('manufacturer: ', this.manufacturer);
        console.log('year: ', this.year);
        console.log('maxspeed: ', this.maxspeed);
        console.log('enginecapacity: ', this.enginecapacity);
    }

    this.increaseMaxSpeed = function(newSpeed) {
        console.log(this.maxspeed += newSpeed);
    }

    this.changeYear = function(newValue) {
        console.log(this.maxspeed = newValue);
    }

    this.addDriver = function(driver) {
        this.driver= driver;
        console.log(this.driver);
    }

};

const car1 = new Car('ARIYA', 'Nissan', 2023, 200, 0);
car1.drive();
car1.info();
car1.increaseMaxSpeed(15);
car1.changeYear(2010);
car1.addDriver({name: 'Ivan', age: 45});

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Cars {
    constructor(model, manufacturer, year, maxspeed, enginecapacity) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxspeed = maxspeed;
        this.enginecapacity = enginecapacity;}

        drive()
        {
            console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`)
        }

        info()
        {
            console.log('model: ', this.model);
            console.log('manufacturer: ', this.manufacturer);
            console.log('year: ', this.year);
            console.log('maxspeed: ', this.maxspeed);
            console.log('enginecapacity: ', this.enginecapacity);
        }

        increaseMaxSpeed(newSpeed)
        {
            console.log(this.maxspeed += newSpeed);
        }

        changeYear(newValue)
        {
            console.log(this.maxspeed = newValue);
        }

        addDriver(driver)
        {
            this.driver = driver;
            console.log(this.driver);
        }
}

const car2 = new Cars('ARIYA', 'Nissan', 2023, 200, 0);
car2.drive();
car2.info();
car2.increaseMaxSpeed(20);
car2.changeYear(2015);
car2.addDriver({name: 'Tetiana', age: 36});

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella {
    constructor(name, age, shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }}

const listOfCinderellas = [
    new Cinderella('Valeria', 25, 40),
    new Cinderella('Bohdana', 35, 39),
    new Cinderella('Olena', 39, 36),
    ]

class Prince {
    constructor(name, age, slipperSize) {
        this.name = name;
        this.age = age;
        this.slipperSize = slipperSize;}
        findCinderella(arr)
        {
            for (const cinderella of arr) {
                if(cinderella.shoeSize === this.slipperSize){
                    console.log(cinderella);
                }
            }
        }
    }

const prince = new Prince('Konstantyn', 37, 40);
prince.findCinderella(listOfCinderellas);

let findFirstCinderella = listOfCinderellas.find (value => value.shoeSize = prince.slipperSize);
console.log(findFirstCinderella);

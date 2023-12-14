let turtle = {
    size: 'L',
    // // food: {
    //     // type: 'plants',
    //     condition: 'fresh'
    // }
}

try {
    console.log(turtle.food.type)
} catch (error) {
    console.log(error)
} finally {
    console.log ('The object property does not exist')
}

//******************************************************************************************************************************************

function divide (a, b) {
    if (b === 0) {
         throw new Error('You cannot divide by 0');
    }
return a/b;
}

try {
    divide(8, 0);
} catch (e) {
    console.log(e);
} finally {
   console.log('You have made an error');
}

//******************************************************************************************************************************************

function iterator(users) {
    for (const user of users) {
        try {
            console.log(user.husband.name);
        } catch (e) {
            console.log('You are asking for incorrect object field');
        }
    }
}

let users = [
    {id:1, name:'Iryna'},
    {id:2, name:'Oksana'},
    // {id:3, name:'Liudmyla', husband:{
    //     name:'Ruslan', age:35
    //     }}
]

iterator(users);

//******************************************************************************************************************************************

let obj = {
    name: 'Red fox',
    classification: {
        kingdom: 'Animalia',
        classs: 'Mammalia',
        family: 'Canidae'
    }
}

if(obj.classification)
console.log(obj?.classification?.species)

//******************************************************************************************************************************************
let name = 'Wolf';
let family = 'Canidae';
let kingdom = 'Animalia';
let classs = 'Mammalia';

let animal = {
    name,
    classification: {
        kingdom,
        classs,
        family
    }
}
console.log(animal);

    function animalFabric(name, kingdom, classs, movement) {
    return{name, kingdom, classs, movement, domesticated(){
        console.log('domesticated');
        }
    }
}



let animal3 = animalFabric('rabbit', 'Animalia', 'Mammalia', () => console.log("jump-jump"));
console.log(animal3);
animal3.movement();
animal3.domesticated();

function extractor (animal3){
    console.log(name, classs);
}

//******************************************************************************************************************************************

function getter(country) {
    let {name, populationSize, capital} = country;
    console.log(name, populationSize);
}

getter({name:'Seychelles', populationSize:100600});

//******************************************************************************************************************************************

let countries = [
    {name: 'Seychelles', population: 0.101},
    {name: 'Mauritius', population: 1.266},
    {name: 'Madagascar', population: 28.92},
    {name: 'Maldives', population: 0.522},
]

let[country1, country2, , country4 ] = countries;
console.log(country4);

//******************************************************************************************************************************************

let ocean = {
    name: 'Indian',
    color: 'turquoise'
}

let ocean2 ={...ocean, status: 'visited'};
console.log(ocean2);
console.log(ocean2 === ocean);
console.log(ocean2.color === ocean.color);

// let map = countries.map((ocean, index) => {
//     return {...countries, id: index + 1};
// });
//
// console.log(map);

//******************************************************************************************************************************************

let s = JSON.stringify({id:1000000});
console.log(s, typeof (s));

let n = JSON.parse(s);
console.log(n, typeof (n));
console.log(n === s);


let mappedCounties = countries.map((ocean, index) => {
    let stringify = JSON.stringify((countries));
    let cObject = JSON.parse(stringify);
    cObject.id = index + 1;
    return cObject;
});

console.log(mappedCounties);

//******************************************************************************************************************************************

let someObject = {id: 100, embedded:{hash:'dqewjdpaf'}}
let clone = structuredClone(someObject);
console.log(clone);
console.log(clone === someObject);
console.log(clone.embedded === someObject.embedded);
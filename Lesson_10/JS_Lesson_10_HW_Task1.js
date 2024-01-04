// Створити форму з трьома полями для name, surname,age та кнопкою.
// При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
// Іншими словами: заповнити форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

const form = document.forms.f1;
form.onsubmit = function(e){
    e.preventDefault();
    let divBlock = document.createElement('div');
    let name = document.createElement('p');
    let surname = document.createElement('p');
    let age = document.createElement('p');
    name.innerText = "Name: " + this.name.value;
    surname.innerText = "Surname: " + this.surname.value;
    age.innerText = "Age: " + this.age.value;
    divBlock.append(name, surname, age);
    document.body.append(divBlock);
}
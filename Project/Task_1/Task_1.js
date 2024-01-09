// 1 Отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку User-details.html,
//     котра має детальну інфорацію про об'єкт, на який клікнули

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        let block = document.getElementById('userList');
        for (const user of users) {
            let div = document.createElement('div');
            let a = document.createElement('a');
            a.innerText = `${user.id}: ${user.name}`;
            a.href=`../Task_1/User-details.html?users=${user.id}`;
            div.appendChild(a);
            block.appendChild(div);
        }
    });
// console.log(location.href);
// let url = new URL(location.href);
// console.log(url.searchParams.get('city'));



let userId = new URL(location.href).searchParams.get('userId');
console.log(userId);


fetch(`http://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(details => {
        let ul = document.getElementById('userDetailsList');
        let id = document.createElement('li');
        let name = document.createElement('li');
        let username = document.createElement('li');
        let email = document.createElement('li');
        let street = document.createElement('li');
        let suite = document.createElement('li');
        let city = document.createElement('li');
        let zipcode = document.createElement('li');
        let lat = document.createElement('li');
        let lng = document.createElement('li');
        let phone = document.createElement('li');
        let website = document.createElement('li');
        let company = document.createElement('li');
        let companyName = document.createElement('li');
        let catchPhrase = document.createElement('li');
        let bs = document.createElement('li');

        id.innerText = 'id: ' + `${details.id}`;
        name.innerText = 'name: ' + `${details.name}`;
        username.innerText = 'username: ' + `${details.username}`;
        email.innerText = 'email: ' + `${details.email}`;
        street.innerText = 'street: ' + `${details.address.street}`;
        suite.innerText = 'suite: ' + `${details.address.suite}`;
        city.innerText = 'city: ' + `${details.address.city}`;
        zipcode.innerText = 'zipcode: ' + `${details.address.zipcode}`;
        lat.innerText = 'lat: ' + `${details.address.geo.lat}`;
        lng.innerText = 'lng: ' + `${details.address.geo.lng}`;
        phone.innerText = 'phone: ' + `${details.phone}`;
        website.innerText = 'website: ' + `${details.website}`;
        companyName.innerText = 'companyName: ' + `${details.company.name}`;
        catchPhrase.innerText = 'catchPhrase: ' + `${details.company.catchPhrase}`;
        bs.innerText = 'bs: ' + `${details.company.bs}`;
        ul.append(id, name, username, email, street, suite, city, zipcode,
            lat, lng, phone, website, companyName, catchPhrase, bs);
});



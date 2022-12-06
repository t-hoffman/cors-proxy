//const proxy = 'https://cors-anywhere.herokuapp.com/';
const proxy = 'http://localhost:3000/'
const url = 'https://api.yelp.com/v3/businesses/search?location=los%20angeles%2C%20ca&term=restaurants&sort_by=best_match&limit=20';
const key = 'zU4QuOhJoqNzQwtn3GOKS2hHhX2zfsEy_JQvQg4O0mI5fyPFLCr4Q3NYUwAmdm06Jtw7QPG-MxBgS7CP-gVqzcdmGid3bjR9clpCI_9xArhMljNrpd6xVjJV2XyOY3Yx';
// const options = {
//     method: 'GET',
//     headers: {
//         accept: 'application/json',
//         'Authorization': 'Bearer ' + key,
//     }
// }

// fetch (proxy+url, options)
// .then (resp => resp.json())
// .then (json => console.log(json));

const options = {
    method: 'GET',
    headers: {
        'Target-URL': 'https://jsonplaceholder.typicode.com/todos/1',
        'Authorization': '1234'
    }
}
fetch ('http://localhost:3000/', options)
.then (resp => resp.json())
.then (json => console.log(json))
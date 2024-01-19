let baseURL = "http://numbersapi.com/"
let favoriteNumber = 9;


$.getJSON(`${baseURL}/${favoriteNumber}?json`)
    .then(data => {
        console.log(`Fact about the number ${favoriteNumber}: ${data}`)
    });


let multipleNumbers = [9, 30, 28];
$.getJSON(`${baseURL}/${multipleNumbers}?json`)
    .then(data => {
        console.log(data)
    });

Promise.all(
    Array.from({ length: 4 }, () => {
        return $.getJSON(`${baseURL}/${favNumber}?json`);
    })
    ).then(facts => {
    facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
    });


const request = require('postman-request');

// const getCountry = (capitalCity) => {
//     const myURL = `https://restcountries.com/v2/capital/${capitalCity}`;

//     request({url: myURL, json: true}, (error, response, body) => {
//         // console.log(body[0]);
//         const {name: countryName, capital: countryCapital, population} = body[0];

//         console.log('country==>', countryName)
//         console.log('capital==>', countryCapital)
//         console.log('population==>', (population / 1000000).toFixed(1))

//     })

// }

// getCountry('dublin');
// getCountry('paris')
// getCountry('abuja')

const abjLat = 9.0765;
const abjLong = 7.3986;
const access_token = 'pk.53d8051fc24320cb690ff81a63caac7c';
const locationURL = `https://us1.locationiq.com/v1/reverse?key=${access_token}&lat=${abjLat}&lon=${abjLong}&format=json
` 

request({url: locationURL, json: true}, (error, response, body) => {
    console.log(body);
});

// https://us1.locationiq.com/v1/reverse?key=pk.53d8051fc24320cb690ff81a63caac7c&lat=9.0765&lon=7.3986&format=json
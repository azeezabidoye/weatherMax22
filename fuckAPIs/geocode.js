const request = require('postman-request');

// `http://api.openweathermap.org/data/2.5/weather?q=lagos&units=metric&appid=85a0563c4d6caeccfcdadeb0f9efe5a7`


// Openweather data
const geoCode = (address, callBackFn) => {
    const apiKey = '85a0563c4d6caeccfcdadeb0f9efe5a7';
    const baseURL = `http://api.openweathermap.org/data/2.5/weather?q=${address}&units=metric&appid=${apiKey}`

    request({url: baseURL, json: true}, (error, _,body) => {        

        if(error) {
            callBackFn('Error: Unable to connect.', undefined)
        } else {
            // const {temp, feels_like} = body.main;
            callBackFn(undefined, body)
            // callBackFn(undefined, `The temperature is ${Math.trunc(temp)} degree celcius`)
        }
    });
}
geoCode('akita', (error, data) => {
    console.log('ERROR:::::::::::>', error);
    console.log('DATA::::::::::::>', data);
});
module.exports = geoCode;

// callBackFn(error, data);

// https://restcountries.com/v3.1/all
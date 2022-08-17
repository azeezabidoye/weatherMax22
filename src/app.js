const express = require('express');
const geocode = require('./APIs/geocode');
const getCountry = require('./APIs/country');
const getCountryFlag = require('./APIs/countryflag');
const path = require('path');

const app = express();
app.set('view engine', 'hbs');

const publicDirectory = path.join(__dirname, '../public');
app.use(express.static(publicDirectory));

const viewsPath = path.join(__dirname, '../views');
app.set(viewsPath);

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        res.send('Invalid address...input a correct location!')
    }

    geocode(req.query.address, (error, data) => {
        if (error) {
            console.log(error);
        } else {
    
            getCountry(data.latitude, data.longitude, data.temperature, data.description, data.address, data.humidity, data.weather, data.visibility, (error, data) => {
                if(error) {
                    console.log(error);
                } else {
    
                    getCountryFlag(data.country, data.temperature, data.description, data.address, data.humidity, data.weather, data.visibility, (error, data) => {
                        if(error) {
                            console.log(error);
                        } else {
                            res.json({
                                country: data.country,
                                temperature: data.temperature,
                                description: data.description,
                                address: data.address,
                                flag: data.flag,
                                humidity: data.humidity,
                                weather: data.weather,
                                visibility: data.visibility
                            })
                            console.log(data);
                        }
                    });
                }
            });
        }    
    });
});

app.get('*', (req, res) => {
    res.send('<h1>Error: Page Not found</h1>')
})






app.listen(2000, () => {
    console.log('App is running on port 2000');
})














// hvuwhadsihrgjiojfpohpsiondshni;odfjiofsni










// http://api.weatherstack.com/current?access_key=1234567890&query=lat,lng;

// http://api.openweathermap.org/data/2.5/weather?q=city&units=metric&appid=apiKey
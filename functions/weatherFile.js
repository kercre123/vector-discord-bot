module.exports = {
weatherCommand: function weatherCommand(message, args, longCommand) {
        const config = require('../protected/config.json');
        const weatherapiKey = config.weatherAPI; 
        const sunw1 = "https://i.imgur.com/dbJClV9.gif";
        const sunw2 = "https://i.imgur.com/qTO6lBE.gif";
        const msg = message.content.toLowerCase();
        const sunw = [sunw1, sunw2];
        const sunwmath = Math.floor(Math.random() * sunw.length);
        let zipCode;
        if (longCommand === "no") {
            zipCode = msg.split("her ")[1];
        } else {
            zipCode = msg.split("her in ")[1];
        }
        if (zipCode === undefined || zipCode.length != 5 || parseInt(zipCode) === NaN) {
            message.channel.send("Not a valid ZIP code! Follow the format #####. This only works for the U.S.A!")
                .catch(console.error)
            return;
        } else {
            fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&APPID=${weatherapiKey}&units=imperial`)
                .then(response => {
                    return response.json()
                })
                .then(parsedWeather => {

                    const weatherPics = {
                        "Clouds": "https://i.imgur.com/UbS3wXO.gif",
                        "Rain": "https://i.imgur.com/RU8iwIE.gif",
                        "Thunderstorm": "https://i.imgur.com/MH7QnT8.gif",
                        "Sunny": sunw[sunwmath],
                        "Clear": sunw[sunwmath],
                        "Snow": "https://i.imgur.com/AoxxrJ7.gif"
                    };

                    const weatherWords = {
                        "Clouds": "and cloudy",
                        "Rain": "and rainy",
                        "Thunderstorm": "with thunderstorms",
                        "Sunny": "and sunny",
                        "Clear": "and clear",
                        "Snow": "and snowy"
                    }

                    if (parsedWeather.cod === '404') {
                        message.channel.send("This ZIP code either doesn't exist, or there isn't any information avaliable for it!")
                    } else {
                        const currentWeather = parsedWeather.weather[0].main;
                        const roundedTemp = Math.round(parsedWeather.main.temp);

                        message.channel.send({
                            embeds: [{
                                color: 65280, 
                                fields: [{
                                        name: `Location: ${parsedWeather.name}, ${parsedWeather.sys.country}`, 
                                        value: `${roundedTemp}° F ${weatherWords[currentWeather]}!`
                                    }], 
                                image: {
                                    url: `${weatherPics[currentWeather]}`
                                }, 
                                timestamp: new Date(), 
                                footer: {
                                    text: message.author.username, 
                                    icon_url: message.author.avatarURL(),
                                },
                            }]
                        });

                    }
                })
        }
      }
};
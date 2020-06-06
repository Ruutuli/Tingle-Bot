const weatherConditions = require('../resources/weather-conditions.json')
// const weatherObj = weatherConditions.inariko.winter;

function weatherMechanic(location,season){
    const weatherObj = weatherConditions[location][season];
    const keys = Object.keys(weatherObj);

    let maxNumber = keys[keys.length - 1];
    // console.log(keys);
    // console.log(keys[keys.length - 1]); // will get you last value ALWAYS
    // console.log(keys[0]); // always gives you the first 


    let randomNumber = Math.ceil(Math.random() * maxNumber);
    // console.log(weatherObj[randomNumber]);
    // console.log(randomNumber);

    let results;

    while(!results){
        results = weatherObj[randomNumber];
        randomNumber++;
    }

    return results;
   
}

console.log(weatherMechanic('rudania','fall'));
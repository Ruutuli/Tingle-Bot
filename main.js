// function butts(ok) {
//     const x=Math.floor(Math.random() * ok);
//     return x;
// }
// console.log(butts(45));
// console.log(butts(45));
// console.log(butts(45));
// console.log(butts(45));
// module.exports={butts}

function diceRoller(diceString) {
    const diceArray = diceString.split('d');
    if (diceArray.length !==2) {
        return ' theres no d ya fool'
    }
    let numberOfDice = diceArray[0];
    let sides = diceArray[1];

    if (isNaN(sides)) {
        return 'Number of sides needs to be a number';
    } 
    
    if (isNaN(numberOfDice)) {
        return 'Number of dice needs to be a number';
    }

    numberOfDice = Number(numberOfDice);
    sides = Number(sides);
    
    let resultString = '`'

    let resultNumber = 0

    while (numberOfDice > 0) {
        numberOfDice -= 1;   
        const x=Math.ceil(Math.random()* sides);
        resultString += ' '+ x + ' ';
        resultNumber += x;
    }

    resultString = resultString + ' ==> ' + resultNumber +'`';

   // return {sides, numberOfDice};
   return resultString;    
}
module.exports={diceRoller}



//create a function that randomly outputs one message from an array of messages to show daily to user, 
//and add a lucky number for the day
const adjectives = ['happy', 'sad', 'awesome', 'overwhelming', 'tragic', 'sunny', 'wonderful', 'crazy'];
const luckyNumbers = [];

const myMessageOfTheDay = () => {
    const adjective = adjectives[Math.floor(Math.random()* adjectives.length)];
        console.log(`Good Day! Today you're going to have an ${adjective} day!`);
};

const myNumberOfTheDay = () => {
    const numbers = Math.floor(Math.random()*60);
    console.log(`Your Lucky number for the Day is: ${numbers}!`)
}


myMessageOfTheDay();
myNumberOfTheDay();
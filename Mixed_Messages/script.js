//create a function that randomly outputs one message from an array of messages to show daily to user, 
//and add a lucky number for the day
const message = {
    adjectives: ['happy', 'sad', 'awesome', 'overwhelming', 'tragic', 'sunny', 'wonderful', 'crazy'],
    number: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60]
}

//randomly select the adjective and number and add to message
const myMessageOfTheDay = () => {
    const adjective = message.adjectives[Math.floor(Math.random()* 8)];
    const numbers = message.number[Math.floor(Math.random()* 60)];
    console.log(`Namastê! Today you're going to have an ${adjective} day!`);
    console.log(`Your Lucky number for the Day is: ${numbers}!`);
};


myMessageOfTheDay();
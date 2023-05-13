// 11. Use the Date object to do the following activities
//     - What is the year today?
//     - What is the month today as a number?
//     - What is the date today?
//     - What is the day today as a number?
//     - What is the hours now?
//     - What is the minutes now?
//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.

// **  Start code **

// Get the current date and time

const now = new Date();
console.log(now);

// get the Year Today

const year = now.getFullYear();
console.log(year);

// get the Month Today as a number

const month = now.getMonth();
console.log(month);

// get the Date Today

const date = now.getDate();
console.log(date);

// get the Hours Today

const hours = now.getHours();
console.log(hours);

// get the Minutes Today

const minutes = now.getMinutes();
console.log(minutes);

// Find out the number of seconds elapsed from January 1, 1970 to now

const secondelapsed = now.getTime()/1000;
console.log(secondelapsed);
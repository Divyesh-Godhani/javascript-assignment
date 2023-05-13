// 07. Declare an array containing the multiple values and use lastIndexOf to determine the position of the first and last occurrence of a word "pw skills".

// ** Start code ** 

let skills = ['HTML','CSS','JS','PHP','JAVA','RUBY','PYTHON','pw skill','pw skill'];

let firstindex = skills.indexOf('pw skill');
let lastindex = skills.lastIndexOf('pw skills');

console.log(`this is first of 'pw skill' index ${firstindex}`);
console.log(`this is last of 'pw skill' index ${lastindex} `);
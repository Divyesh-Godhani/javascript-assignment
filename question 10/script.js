// 10. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
//     - 4 > 3
//     - 4 >= 3
//     - 4 < 3
//     - 4 <= 3
//     - 4 == 4
//     - 4 === 4
//     - 4 != 4
//     - 4 !== 4
//     - 4 != '4'
//     - 4 == '4'
//     - 4 === '4'
//     - Find the length of python and jargon and make a falsy comparison statement.



// Comparison expressions


4 > 3; // true
4 >= 3; // true
4 < 3; // false
4 <= 3; // false
4 == 4; // true
4 === 4; // true
4 != 4; // false
4 !== 4; // false
4 != '4'; // false
4 == '4'; // true
4 === '4'; // false

// Falsy comparison statement
let pythonLength = 'python'.length;
let jargonLength = 'jargon'.length;

if (pythonLength < jargonLength) {
    console.log('Python is shorter than jargon');
  } else {
    console.log('Jargon is shorter than python');
  }
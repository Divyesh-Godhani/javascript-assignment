// 15. Write a program which can give grades to students according to theirs scores:
//     - 80-100, A
//     - 70-89, B
//     - 60-69, C
//     - 50-59, D
//     - 0-49, F

// let marks = 15;
function studentmarks(marks){

    if(marks >= 80 && marks <= 100){
        console.log("A Grade");
    }
    else if(marks >= 70 && marks <= 89){
        console.log("B Grade");
    }
    else if(marks >= 60 && marks <= 69){
        console.log("C Grade");
    }
    else if(marks >= 50 && marks <= 59){
        console.log("D Grade");
    }
    else if(marks >= 0 && marks <= 49){
        console.log("E Grade");
    }else{
        console.log("Not a vaild Number");
    }
}

console.log(studentmarks(95)); // Output: A
console.log(studentmarks(75)); // Output: B
console.log(studentmarks(65)); // Output: C
console.log(studentmarks(55)); // Output: D
console.log(studentmarks(25)); // Output: F
console.log(studentmarks(120)); // Output: Invalid score
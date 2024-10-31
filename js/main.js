function greet(name) {
    return "Hola, " + name + "!";
}

console.log(greet("Jah"))

function calculateCircumference(diameter){
    const pi = 3.14159;
    return pi * diameter;
}

console.log(calculateCircumference(20)) // Usage of 20 but can be any number

function firstFunc() {
    console.log("First console.log statement in firstFunction");

    secondFunc();

    console.log("Second console.log statement inside firstFunction, after the secondFunc Call");
}

function secondFunc() {
    console.log("Console.log statement inside the secondFunc")
}

firstFunc();

//Priority goes 1. First console.log statement 2. The second function plays out with its console.log
// 3. The last console.log is played out. 
// This happens because the function plays from top to bottom no matter what. 

function causeKaboom() {
    causeKaboom();
}

causeKaboom();
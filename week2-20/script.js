console.log("hello world");

// question 1
var petArray = ["cat", "cow", "dog"];

// question 2
console.log(petArray)

// question 3
console.log(petArray.push("sheep"));
Array.isArray(petArray)

// question 4
for (var i = 0; i < petArray.length; i++) {
    console.log(petArray[i])
};

// question 5
catObject = {
    name: "Steve",
    colour: "yellow",
    age: 400
};

// question 6
console.log(catObject.age)

// question 7
catArray = [{
    name: "Steve",
    colour: "yellow",
    age: 400
}];

// question 8
for (var i = 0; i < catArray.length; i++) {
    console.log(catArray[i]);
    console.log(catArray[i].name);
    console.log(catArray[i].colour);
    console.log(catArray[i].age);
}

// question 9
function logToConsole(TheMan) {
    console.log(TheMan);
};

// question 10
logToConsole("donkey");
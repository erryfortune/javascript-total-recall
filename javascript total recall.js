// A

// How do we assign a value to a variable? 
// Answer : assigning a varibale is achieved using the = operator 

// How do we change the value of a variable? 
// Answer : we declare the variable name and assign a value to the variable with the = oprator

// How do we assign an existing variable to a new variable?
// Answer : create a new variable and then use the = operator to assign a value

// Remind me, what are declare, assign, and define?
// Answer : declare means creating a variable name and you can declare a variable using the var or the let keyword
// assign means giving a value to the declared variable name 
// and define means assigning a value to a declared varaible 

// What is pseudocoding and why should you do it?
// Answer: pseudocoding is a text base list of instructions of breaking down the steps to build a code or program 
// stating what the program or code will do. its best to pseudocode as it gives the programmer a sense of direction 
// when coding after breaking down the work into steps.

// What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
// Answer : 80/20 rule.

// B strings
// Create a variable called firstVariable
firstVariable;

// Assign it the value of the string "Hello World"
var firstVariable = "Hello World";

// Change the value of this variable to some number
firstVariable = 1234;

// Store the value of firstVariable in a new variable called secondVariable
secondVariable = firstVariable;
// Change the value of secondVariable to any string.

secondVariable = "Beginner";
// What is the value of firstVariable? (Answer : 1234)
console.log(firstVariable)   




console.log ('----------------')



// Create a variable called yourName and set it equal to your name as a string.

let yourName = "Fortune";


// Then, write an expression that takes the string "Hello, my name is " 
// and the variable yourName so that it returns a new string with them concatenated.

console.log("Hello my name is " +  yourName)





console.log('----------------')


// C. Booleans
// Using the provided variable definitions, 
// replace the blanks so that all log statements print true in the console.
 
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' == 'Name');
  // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true || false);
  console.log(false || false || false || false || false || true);
  console.log(false || false);
  console.log(e == 'Kevin');
  console.log(a + b == c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
  console.log(a * a == d); // note: the answer is a simple arithmetic equation, not something "weird"
  console.log(48 == '48');


  console.log('----------------')


//   D. The farm
// Declare a variable animal. Set it to be either "cow" or something else
// Write code that will print out "mooooo" if the it is equal to cow
// Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
// Commit

let varAnimal = 'cow'
if (varAnimal == 'cow') {
    console.log('mooooo');
} else {
    console.log('Hey! you are not a cow');
}


console.log('----------------')


// E. Driver's Ed
// Make a variable that holds a person's age; be semantic
// Write code that will print out "Here are the keys!", if the age is 16 years or older, 
// or, if the age is younger than 16, a message should print "Sorry, you're too young."


let personAge = 33;

if (personAge >=16) {
    console.log('Here are the keys!')
} else {
    console.log('sorry, you are too young')

}


console.log('----------------')


// II. Loops
// Remember: USE let when you initialize your for loops!
// This is GOOD: for(let i = 0; i < 100; i++)

// A. The basics
// Write a loop that will print out all the numbers from 0 to 10, inclusive
for (let i = 0; i<=10; i++) {
    console.log(i)   
}

// Write a loop that will print out all the numbers from 10 up to and including 400
for (let i = 10; i<=400; i++) {
    console.log(i)   
}

// Write a loop that will print out every third number starting with 12 and going no higher than 4000
for (let i = 12; i <=4000 ; i++) {
    if (i % 3 == 0) {
      console.log(i)  
    }
    
}


// B. Get even
// Print out the numbers that are within the range of 1 - 100
// Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
for (let i = 1; i <= 100 ; i++) {
    if (i % 2 == 0) {
        console.log(i + '<-- is an even number')
    
}
    }


    console.log('----------------')


    // C. Give me Five
    // For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five

    for (let i = 0; i <= 100 ; i++) {
        if (i % 5 == 0) {
         console.log("I found a " + i +". High five!")
                
        }
        }
// Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three
for (let i = 0; i <= 100 ; i++) {
    if (i % 3 == 0) {
    console.log("I found a " + i +". three is a crowd")           
}
    }

    // For numbers divisible by both three and five, be sure your code prints both messages
    for (let i= 0; i <= 100; i++) {
        if (i % 5 == 0 && i % 3 == 0) {     
        } else if (i % 5 == 0) {
            console.log("I found a " + i +". High five!")
        } else if (i % 3 == 0) {
            console.log("I found a " + i + ". Three is a crowd")   
    }
    }


//     D. Savings account
// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// Check your work! Your bank_account should have $55 in it.

let bank_account = 0;
for (let i= 1; i <= 10; i++) {
bank_account += i;
}
console.log( bank_account )

// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// Check your work! Your bank_account should have $10,100 in it.

let bankAccount = 0;
for (let i= 1; i <= 100; i++) {
bankAccount += i*2
}
console.log( bankAccount )


console.log('----------------')


// III. Arrays & Control flow

// What are the things in an array called?
// the things in an array are called element
// Do Arrays guarantee those things will be in order?
// it does not guarantee order
// What real-life thing could you model with an array?
// your contact/friends list



console.log('----------------')


// Create an array that contains three quotes and store it in a variable called quotes

let quotes = ["A life lived in love will never be dull.",
"Love is shown more in deeds than in words.","Nothing is impossible."];



console.log('----------------')



// C. Accessing elements

// Given the following array const randomThings = [1, 10, "Hello", true]

// How do you access the 1st element in the array?
// to acess the first element you console.log the array name followed by the bracket index of the element you want to access
console.log(randomThings[0]);
// Change the value of "Hello"to "World"
randomThings[2] = "World";
// Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
console.log(randomThings);



console.log('----------------')



// D. Change values
// Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

// What would you write to access the 3rd element of the array?
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
// to access the third element
console.log(ourClass[2]);
// Change the value of "Github" to "Octocat"
ourClass[4] = "Octocat";
// Add a new element, "Cloud City" to the array
ourClass.push("Cloud City");



console.log('----------------')



// E. Mix It Up
// Note: You don't really need .splice()for these. You could use it,
//  but there are simpler array methods that are more appropriate.

// Given the following array: const myArray = [5, 10, 500, 20]

// Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
const myArray = [5, 10, 500, 20]
myArray.push("Aegon","Beginner")

// Remove the 5 from the beginning of the array.
myArray.shift()
// Add the string "Bob Marley"to the beginning of the array.
myArray.unshift("Bob Marley")
// Remove the string of your choice from the end of the array.
myArray.pop()
// Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? 
// Did the .reverse()method return anything?
console.log(myArray.reverse()) 
// the array did mutate, muatate means to change the initial nature or form of the array. 
// the .reverse()method returned the array in reverse



console.log('----------------')


// F. Biggie Smalls
// Create a variable that contains an integer.

// Write an if ... else statement that:

// console.log()s "little number" if the number is entered is less than 100
// console.log()s big numberif the number is greater than or equal to 100.


let num = 73;

if (num < 100) {
    console.log("little number")
} else {
    console.log("big number")
}



console.log('----------------')



// G. Monkey in the Middle
// Write an if ... else if ... else statement:

// console.log()little number if the number entered is less than 5.
// If the number entered is more than 10, log big number.
// Otherwise, log "monkey".


let number = 12
if (num < 5) {
    console.log("little number")
}
else if (number > 10) {
    console.log("big number")
} else {
    console.log("monkey")
}


console.log('----------------')


// H. What's in Your Closet?
// Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, 
// log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!")

// Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
kristynsCloset.splice(6, 0,"raybans") 
console.log(kristynsCloset)

// Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow
kristynsCloset.splice(5, 1,"stained knit hat")
console.log(kristynsCloset)


// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

// Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
console.log(thomsCloset[0] [0])

// In the same way, access one item from Thom's pants array.
console.log(thomsCloset[1] [2])

// Access one item from Thom's accessories array.
console.log(thomsCloset[2] [2])
// Log a sentence about what Thom's wearing. 
// Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
var shirts = thomsCloset[0][0];

var pants = thomsCloset[1][2];

var accessories = thomsCloset[2][2];
console.log("Thom is looking fierced in a  " + shirts + " and " + pants + " with a " + accessories );

// Get more specific about what kind of PJs Thom's wearing this winter.
//  Modify the name of his PJ pants to Footie Pajamas.
thomsCloset[1] [2] = "Footie Pajamas"
  console.log(thomsCloset[1])
 



  console.log('----------------')



//   IV. Functions

// Write a function printCool that accepts one parameter, name as an argument. 
// The function should print the name and a message saying that that person is cool.

function printCool(name) {
    console.log(name +  " is cool ")
}
printCool("Fortune")

// Write a function calculateCube that takes a single number 
// and prints the volume of a cube made from that number.

function calculateCube (num) {
    console.log(num ** 3)
}
calculateCube(25)



console.log('----------------')


// Write a function isVowel that takes a character (i.e. a string of length 1) 
// and returns true if it is a vowel, false otherwise. 
// The vowel could be upper or lower case. Test your function on every vowel and make sure it's working.
//  In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.

function isVowel(letter){
    if (letter == "a" || letter =="e" || letter =="i" || letter =="o" || letter =="u")
 {
        return true;
    } else {
        return false;
    }
}
    
console.log(isVowel("T"));



//  Write a function getTwoLengthsthat accepts two parameters (strings). 
// The function should return an array of numbers where each number is the length of the corresponding string.

function getTwoLengths(a, b) {
    return[a.length, b.length]
}
console.log(getTwoLengths("Beginner", "Fortune"));


// Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. 
// The function should return an array of numbers where each number is the length of the corresponding string.


function getMultipleLengths(arr){
    return arr.map(function(str){
        return str.length;
    });
}
console.log(getMultipleLengths(["two", "four", "six", "eight", "ten"]));


// Define a function maxOfThreet hat takes three numbers as arguments and returns the largest of them. 
// If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, 
// one of them should be returned. Be sure to test it with larger values in each of the three locations.

 function maxOfThree(x,y,z) {
        let largestNum = (x, y, z)
        return largestNum
    }
    console.log(maxOfThree(4500,5500,6000))

    // Write a function printLongestWordthat accepts a single argument, an array of strings. 
    // The method should return the longest word in the array. In case of a tie, 
    // the method should return the word that appears first in the array.

    function printLongestWord (strAr) {
        var longestWord = " ";
        strAr.forEach((word) => {
            if (word.length > longestWord.length) 
               { longestWord = word;}
            })
        return longestWord;
        }
        
        console.log(printLongestWord(["Beginner", "Materialistic", "Reject", "Grain", "solitude", "destiny"]))
    



// / A. Make a user object
 // Create an object called user.Write in to the object the key-value pairs for name, email, age, and purchased. 
// Set the value of purchased to an empty array []. Set the other values to whatever you would like.
        
        let user = { name:"Fortune", email:"fortune@yahoo.com", age:33, purchased:[]};

// B. Update the user

// Our user has changed his or her email address. Without changing the original userobject, // update the emailvalue to a new email address.

        user.email = "beginner@yahoo.com"
// Our user has had a birthday! Without changing the original userobject, 
//  increment the agevalue using the postfix operator. Hint: age++
user.age++

// C. Adding keys and values
// You have decided to add your user's location to the data that you want to collect.
// Without changing the original userobject, add a new key locationto the object, and give it a value or some-or-other location (a string).

user.location = "Dallas"


// D. Shopaholic!

// Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchasedarray.
user.purchased.push("carbohydrates")

// Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchasedarray.
user.purchased.push("peace of mind")

// Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchasedarray.
user.purchased.push("Merino jodhpurs")

// Console.log just the "Merino jodhpurs" from the purchased array.
console.log(user.purchased[2]);



console.log('----------------')


// E. Object-within-object

// 1. Write a friend object into your user object and give the friend a name, age, location, and purchased array (empty for now)
user.friend = {name:"John", age:32, location:"Germany", purchased:[]};

// 2. Console.log just the friend's name
console.log(user.friend.name);

// 3. Console.log just the friend's location
console.log(user.friend.location);

// 4. CHANGE the friend's age to 55
user.friend.age = 55;

// 5. The friend has purchased "The One Ring". Use .push()to add "The One Ring" to the friend's purchased array.
user.friend.purchased.push("The One Ring");

// 6. The friend has purchased "A latte". Use .push()to add "A latte" to the friend's purchasedarray.
user.friend.purchased.push("A latte");

// 7. Console.log just "A latte" from the friend's purchased array.
console.log(user.friend.purchased[1]);


// F. Loops
// Write a for loop that iterates over the User's purchasedarray (NOT the friend's purchased array), and prints each element to the console.
for (let i=0;i<user.purchased.length;i++) {
    console.log(user.purchased[i]);
}

// Write a for loop that iterates over the Friend's purchasedarray, and prints each element to the console.
for (let i=0;i<user.friend.purchased.length;i++) {
    console.log(user.friend.purchased[i]);
}


// G. Functions can operate on objects

// Write a single function updateUser that takes no parameters. When the function is run, it should:
// it should increment the user's age by 1
// make the user's name uppercase
// The function does not need a return statement, it will merely modify the user object.

function updateUser() {
    user.age++;
    user.name = user.name.toUpperCase();
}
updateUser()

//  Write a function oldAndLoudthat performs the exact same tasks as updateUser, 
// but instead of hard-coding it to only work on our userobject, 
// make it take a parameter person, and have it modify the object that is passed in as an argument
//  when the function is called. Call your oldAndLoudfunction with useras the argument.

function oldAndLoud() {
    person.age++;
    person.name = person.name.toUpperCase();
}
oldAndLoud(user)


        




    
























































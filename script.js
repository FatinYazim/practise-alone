// alert(2+3);
// typeof (2);
// alert("Saya Fatin");
// ------------------------------------------------------------------
// let myName = "Fatin" ;
// alert (myName);

// let Name = prompt ("What is your name?");
// console.log(Name);

// alert ("My Name is " + myName + " welcome to my course," + Name + "!");
// ------------------------------------------------------------------------

// Change my variable 
// let a = "8" ;
// let b = "3" ;

// let c = a;
// a = b ;
// b = c ;

// console.log(" a is " + a );
// console.log("b is " +  b );

// -----------------------------------------
// Using Length  properties

// let myName = "FatinNadhirah" ;
// console.log(myName.length);

// let tweet = prompt ("Please enter your tweet here!");
// let tweetCount = tweet.length;
// alert("Your have written " + tweetCount + " You have remaining  " + (140-tweetCount) + " left ");

// ---------------------------------------------------------

// Using slice , toUpperCase(), toLowerCase() properties 

// let name = prompt ("Please insert your name");
// let firstName = name.slice(0,1);

// console.log(firstName);

// let firstNameCapitalized = firstName.toUpperCase();

// console.log(firstNameCapitalized);

// let restName = name.slice(1,name.length);
// restName = restName.toLowerCase();


// let fullName = firstNameCapitalized + restName;

// alert("Welcome to my website " + fullName + ".");

// ----------------------------------

// using function 

// function lifeInWeeks(age) {
//     let yearsRemaining = 90 - age ;
//     let days = yearsRemaining *365 ;
//     let weeks = yearsRemaining*52 ;
//     let months = yearsRemaining*12 ;

//     console.log("You have " + days + " days, " + weeks + " weeks, " + " and " + months +" months left");
// }

// lifeInWeeks(12);

// -------------------------------

// BMI using function 

// function bmiCalculator (weight,height) {
// let bmi= weight / (height*height);
// return Math.round(bmi);

// }

// let bmiresult = bmiCalculator (60,1.8);
// console.log(bmiresult);

// --------------------------------------

// If else 

// prompt ("what is your name");
// prompt ("What is their name");

// let loveScore = Math.random() *100;
// loveScore = Math.floor(loveScore) + 1;
// alert ("Your love score is " + loveScore + "%");

// ======================================
// if else challenge 

function isLeap(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0){
            if (year % 400 === 0){
                return "Leap year"
            } else {
                return "Not Leap Year."
            }
        } else{
            return "Leap year."
        }
    } else  {
        return "Not Leap Year."
    }
}

isLeap(2023);

console.log(isLeap);
///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the last week at an apple orchard. 
    You will be using your coding skills to gain insights into its daily 
    operations.

    Below are three arrays each containing 7 numbers. You will use them and the 
    price variables to complete the problems in this file.

    The indexes of the arrays correspond with a day of the week.
    The first array is named fujiAcres. Notice that the first item in this array 
    is 2, meaning that 2 acres of Fuji apples were picked on Monday of this week.
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]


// PROBLEM 1

/*
    Using a for loop, calculate the total number of acres picked for the entire 
    week.

    Save the number to a variable called `totalAcres`.
    Log `totalAcres` to the console.
*/

// CODE HERE

//setting a variable for how many acres of apples were collected per week for each variety 
let totalWeekFuji = 0;
let totalWeekGala = 0;
let totalWeekPink = 0;

//for loop that iterates over each variety array and actually calucaltes how many acres of apples were collected per week for each variety. The loop goes over each element of the respective array and adds up all the array elements. 
for(let fuji of fujiAcres){
    totalWeekFuji = totalWeekFuji + fuji
}
for(let gala of galaAcres){
    totalWeekGala = totalWeekGala + gala
}
for(let pink of pinkAcres){
    totalWeekPink = totalWeekPink + pink
}

//variable totalAcres that calculates how many acres of apples were collected of all varieties in a week
totalAcres = totalWeekFuji + totalWeekGala + totalWeekPink
console.log(totalAcres)

// PROBLEM 2

/*
    Using `totalAcres`, calculate the average number of acres picked per day. 

    (Remember that the average is the total divided by the number of days)

    Save the answer to a variable called 
    `averageDailyAcres`, and log `averageDailyAcres` to the console.
*/

// CODE HERE

//calculates how much acres of apples were collected on average per day of all varieties. 
let averageDailyAcres = totalAcres / 7
console.log(averageDailyAcres)




// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number of acres that still have apples left. 
    
    The `days` variable represents how many more days of work are left. It's 
    initialized at 0 because we're going to be using it as a counter.
    
    Write a while loop that will continue to run while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to calculate this number. You might
    think about other ways you could do it more mathematically.
*/

let acresLeft = 174;
let days = 0;

// CODE HERE
//if we have 174 acres left and we collect on average averageDailyAcres amount of apples, how many days until we collect all apples
while(acresLeft > 0){
    days = days + 1;
    acresLeft = acresLeft - averageDailyAcres;
}
console.log(days);

// Note: This is not the most efficient way to calculate this number. You might think about other ways you could do it more mathematically.

//another way to calculate the value of days above, same as numOfDays below
// let numOfDays = Math.ceil(acresLeft / averageDailyAcres)
// console.log(numOfDays)


// PROBLEM 4

/*
    Your next task is to create 3 arrays that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store your new arrays. Make sure that you
    don't modify the original arrays on lines 36 - 38.

    Log each of your arrays to the console.

    (Hint: loop over the original arrays, calculate the tons for that day, then
    add that number into the new list)
*/

// CODE HERE

let fujiTons = [];
let galaTons = [];
let pinkTons = [];

// a loop that calculates how many tonnes of apples we collected on each day of each variety. We iterate over the original arrays of how many acres of apples we collected on each day of the week and then mutiply this value by 6.5 to understand how many tonnes of apples we collected for each variet on each day.
for(let fujiTonsPerDay = 0; fujiTonsPerDay < fujiAcres.length; fujiTonsPerDay++){
    fujiTons.push(fujiAcres[fujiTonsPerDay] * 6.5);
}
for(let galaTonsPerDay = 0; galaTonsPerDay < galaAcres.length; galaTonsPerDay++){
    galaTons.push(galaAcres[galaTonsPerDay] * 6.5);
}
for(let pinkTonsPerDay = 0; pinkTonsPerDay < pinkAcres.length; pinkTonsPerDay++){
    pinkTons.push(pinkAcres[pinkTonsPerDay] * 6.5);
}

console.log(fujiTons);
console.log(galaTons);
console.log(pinkTons);




// PROBLEM 5

/*
    Next, calculate the TOTAL number of pounds picked per variety.

    You'll need to add up the tons per each variety and convert the number 
    into pounds -- store that number in the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 

//with a for loop, we iterate over how many tonnes of apples of each variety we collected on each day and then we multiply the weekly total by 2000 to get how many pounds we collected. 
let fujiTonsTotal = 0;
let fujiPoundsTotal = 0
for(let fujiElement of fujiTons){
    fujiTonsTotal = fujiTonsTotal + fujiElement;
}
let galaTonsTotal = 0;
let galaPoundsTotal = 0
for(let galaElement of galaTons){
    galaTonsTotal = galaTonsTotal + galaElement;
}
let pinkTonsTotal = 0;
let pinkPoundsTotal = 0
for(let pinkElement of pinkTons){
    pinkTonsTotal = pinkTonsTotal + pinkElement;
}

console.log(fujiPoundsTotal = fujiTonsTotal * 2000);
console.log(galaPoundsTotal = galaTonsTotal * 2000);
console.log(pinkPoundsTotal = pinkTonsTotal * 2000);



// PROBLEM 6

/*
    Now that you know the total pounds per variety, use the prices below to 
    figure out how much you'll make from selling each type of apple. 

    The prices are per pound and are written in cents. 

    Log each of the profits to the console. 
*/
const fujiPrice = .89;
const galaPrice = .64;
const pinkPrice = .55;

// CODE HERE

//since we know how many pounds we collected in total for each variety, we multiply the number of pounds we have by the cost per pound to get the total price of each variety
let fujiProfit = fujiPoundsTotal * fujiPrice;
let galaProfit = galaPoundsTotal * galaPrice;
let pinkProfit = pinkPoundsTotal * pinkPrice;

console.log(fujiProfit);
console.log(galaProfit);
console.log(pinkProfit);


// PROBLEM 7

/*
    Add up all your profits and save  the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE

//summin up all the profits and getting the profit in cents
let totalProfit = fujiProfit + galaProfit + pinkProfit;
console.log(totalProfit);

//and in dollars
// let totalProfitInDollars = totalProfit / 100;
// console.log(totalProfitInDollars);
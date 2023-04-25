// NUMBER 1 
//***************EXERCISE 1******************
/*
const existsUserLogin = "the_best_user";
const existsUserPassword = "12345678";

const userLogin = prompt("Enter login: ");
const userPassword = prompt("Enter password: ");

if (existsUserLogin === userLogin.trim() && existsUserPassword === userPassword.trim()) {
   alert("Welcome, userLogin!");
}
else{
    alert("Login and (or) Password entered incorrectly!")
}
*/


//****************EXERCISE 2*********************
/*
let i = 0;
while (i < 3) {
    let newStudent = prompt('Enter the name of the new student!');
    newStudent = newStudent.trim();
    
    if(newStudent) {
        alert(`Welcome ${newStudent}!`)
    }
    i++;
}
*/
/*
let i=0;
do {
    let newStudent = prompt('Enter the name of the new student!');
    newStudent = newStudent.trim();
    
    if(newStudent) {
        alert(`Welcome ${newStudent}!`)
    }
    i++;
}
while (i < 3);
*/


//****************EXERCISE 3*********************
/*
const number = prompt("Enter a number: ");
var sum = 0;
for (let i = 1; i <= number; i++) {
    sum += i;
}
alert("Sum: " + sum);
*/


//****************EXERCISE 4*********************
/*
let answers = ['4', '4', '1', '12', '6'];
let questions = ["What's 2 2?","How much will 2 * 2 be?","Petya had 5 apples. He ate 3 of them and gave 1 to a friend. How many apples does Peter have left?","Masha had 10 sweets. She ate 2 and gave 1 to a friend. After that, mom gave Masha 5 more sweets. How many sweets did Masha have left in the end?","What is 2 + 2 * 2?"];
let result = 0;
for(let i=0;i<5;i++){
    var answerStudent =  prompt(questions[i]);
    if(answerStudent === answers[i]){
        result+=1;
        alert("Correct answer");
    }
    else{
        alert("Incorrect answer");
    }
}
alert(`"End of test! Correct answers - ${result}; Wrong answers are ${5-result}."`)
*/


//****************EXERCISE 5*********************
/*
const  clientName = "Igor";
let clientSpentForAllTime = 110;
let clientSpentToday = 25;
if(100<=clientSpentForAllTime && clientSpentForAllTime<=300){
    let discount = 10;
    clientSpentToday = clientSpentToday-((clientSpentToday * discount) /100);
    alert("You are given a discount in 10%!");

}
else if(300<clientSpentForAllTime && clientSpentForAllTime<=500){
    let discount = 20;
    clientSpentToday = clientSpentToday-((clientSpentToday * discount) /100);
    alert("You are given a discount in 20%!");

}
else if(500<clientSpentForAllTime){
    let discount = 30;
    clientSpentToday = clientSpentToday-((clientSpentToday * discount) /100);
    alert("You are given a discount in 30%!");

}
clientSpentForAllTime += clientSpentToday;
alert( `“Thank you, ${clientName}! Payable ${clientSpentToday}$. For all the time in our restaurant you spent ${clientSpentForAllTime}.”`);
*/


//****************EXERCISE 6*********************
/*
const  clientName = prompt("“Enter the client's name");
let clientSpentForAllTime = Number(prompt("How much did the client spend all time?"));
let clientSpentToday = prompt("How much did the client spend today?");
if(100<=clientSpentForAllTime && clientSpentForAllTime<=300){
    let discount = 10;
    clientSpentToday = clientSpentToday-((clientSpentToday * discount) /100);
    alert("You are given a discount in 10%!");

}
else if(300<clientSpentForAllTime && clientSpentForAllTime<=500){
    let discount = 20;
    clientSpentToday = clientSpentToday-((clientSpentToday * discount) /100);
    alert("You are given a discount in 20%!");

}
else if(500<clientSpentForAllTime){
    let discount = 30;
    clientSpentToday = clientSpentToday-((clientSpentToday * discount) /100);
    alert("You are given a discount in 30%!");

}
clientSpentForAllTime += clientSpentToday;
alert( `“Thank you, ${clientName}! Payable ${clientSpentToday}$. For all the time in our restaurant you spent ${clientSpentForAllTime}.”`);
*/


//FUNCTION
//****************EXERCISE 1*********************
//function declaration
/*
let name = 'Esmira';
function getName1(name) {
	console.log(`“Name equals ${name}”`);
}
getName1(name);

//function expression
let  getName2 = function () {
	console.log(`“Name equals Esmira”`);
};
getName2();

//function arrow
let getName3 = () => {console.log(`“Name equals Esmira”`)};
getName3();
*/


//****************EXERCISE 2*********************
/*
let number = 10;
let type = 'even';
function getSumOfNumbers(number,type) {
    let sum = 0;
    switch(type) {
        case 'odd':
            for(let i=0;i<=number;i++){
                if(i%2!=0){
                    sum += i;
                }
            }
            console.log(sum);
        break;
        case 'even':
            for(let i=0;i<=number;i++){
                if(i%2==0){
                    sum += i;
                }
            }
            console.log(sum);
        break;
        case '':
            for(let i=0;i<=number;i++){
                sum += i;
            }
            console.log(sum);
        break;
        default:
            for(let i=0;i<=number;i++){
                if(i%2!=0){
                    sum += i;
                }
            }
            console.log(sum);
        break;
     }
    
    
}
getSumOfNumbers(number,type);
*/


//****************EXERCISE 3*********************
/*
let number = Number(prompt("Enter a number: "));
let result = 0;
function getDivisors(number){
    for(let i = 1; i<=number; i++){
        if(number%i==0){
            result+=1;
        }
    }
    console.log(result);
}
// getDivisors(number);
if(Number.isInteger(number)!=true || number<0){
    alert("number must be an integer and greater than zero!");
}
else{
    getDivisors(number);
}
*/


//****************EXERCISE 4*********************
/*
function checkQuestionAnswer(question,correctAnswer){
    let userAnswer = prompt(question);
    if(userAnswer.trim() === correctAnswer){
        alert("The answer is correct");
    }
    else{
        alert("The answer is incorrect");
    }
}
checkQuestionAnswer('Is the watermelon a fruit or a berry?', 'A berry');
checkQuestionAnswer('How many teeth does an average adult have?', '32');
checkQuestionAnswer('What is the name of the smallest bird in the world?', 'Hummingbird');
*/


//ARRAY
//****************EXERCISE 1*********************
/*
let number = Number(prompt('Enter a number: '));
function getSumOfSequence(number){
    let array = [];
    for(let i =0; i<number; i++){
        array[i]=i+1;
    }
    let result = array[0] + array[array.length-1];
    console.log(result);

}
getSumOfSequence(number);
*/


//****************EXERCISE 2*********************
/*
const peopleWaiting = ['Kristina', 'Oleg', 'Kirill', 'Maria', 'Svetlana', 'Artem', 'Gleb'];
for(let i=0;i<peopleWaiting.length;i++){
    if(i==2){
        alert("the postal worker says that they will soon have a lunch break and she will have time to serve only Kirill.");
        alert(`“Kirill received the package. There are 0 people left in the queue.”`);
        for(let i=3;i<peopleWaiting.length;i++){
            delete[peopleWaiting[i]];
            alert(`"${peopleWaiting[i]} did not receive the package and left the queue"`);
        }
        break;
    }
    alert(`“${peopleWaiting[i]} received the package. There are ${peopleWaiting.length - (i+1)} people left in the queue.”`);
}
*/


//****************EXERCISE 3*********************
/*
const numbers = [10, 4, 100, -5, 54, 2];
let sum = 0;
for(let i=0; i<numbers.length;i++){
    sum += (numbers[i])**3;
}
console.log(sum);
*/


//****************EXERCISE 4*********************
/*
const coffees = ['Latte', 'Cappuccino', 'Americano'];
let coffeeName =prompt("Search coffee by name: ");
let result = 0;
for(let i=0;i<coffees.length;i++){
    if(coffees[i].toLowerCase() == coffeeName.toLowerCase()){
        result=1;
        alert(`“Keep your favorite ${coffees[i]} coffee. It is ${i+1} most popular in our coffee shop.”`);
        break;
    }
}
if(result==0){
    alert("Unfortunately, this type of coffee is not available")
}
*/


//****************EXERCISE 5*********************
/*
const coffees = ['Latte', 'Cappuccino', 'Americano'];
const prices = [1.5, 1, 2];
const updatedPrices = prices.map(updatedFunction);

function updatedFunction(n) {
   return n+0.5;
}

for(let i=0;i<coffees.length;i++){
    alert(`"${coffees[i]} is now worth ${updatedPrices[i]} euro"`);
}
*/


//****************EXERCISE 6*********************
/*
let clientsEstimations=[];
function askClientToGiveEstimation(){
    let userAnswer = Number(prompt("How do you rate our coffee shop from 1 to 10?"));
    if(userAnswer>=1 && userAnswer<+10){
        clientsEstimations.push(userAnswer);
    }
}
for(let i=0;i<5;i++){
    askClientToGiveEstimation();
}
const  goodEstimations = clientsEstimations.filter(filter);
function filter(n){
    return n>=5;
}
alert(`"Total positive estimates: ${goodEstimations.length}; Total negative ratings: ${5-goodEstimations.length}"`)
*/


//****************EXERCISE 7*********************
/*
const goals = [8, 1, 1, 3, 2, -1, 5];
let max= goals[0];
let min= goals[0];
let sum =0;
let auto = false;
for(let i=1;i<goals.length;i++){
    if(goals[i]>max){
        max = goals[i];
    }
    if(goals[i]<min){
        if(goals[i]<0){
            auto = true;
            continue;
        }
        else{
            min = goals[i];
        }
    }
}
goals.forEach(element => {
    if(element>0){
        sum += element;
    }
});
alert(`"The most scoring match was at ${goals.indexOf(max)+1} number. There were ${max} scored in it."`);
alert(`"The most unsuccessful matches were under the ${goals.indexOf(min)+1} ${goals.indexOf(min)+2}. In each of them, ${min} ball(s) were scored."`);
alert(`"The total number of goals for the season is equal to ${sum}"`);
if(auto){
    alert("There were automatic defeats: yes");
}
else{
    alert("There were automatic defeats: no");
}
alert(`"The average number of goals per match is equal to ${sum / goals.length}"`);
const sortingArray = goals.sort();
*/

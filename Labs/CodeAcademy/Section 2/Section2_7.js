// Check if the user is ready to play!

var choice = true;
var age;
var userAnswer;
var feedback;

//confirm("Would you like to play a game?");

if(confirm("Would you like to play a game?")==choice){
    age = prompt("What is your age");
    if(age < 13){
        console.log("It is reccomended that you should not play this game. If, however, you so chose to continue, we carry no responsibility.")
    }else{
        console.log("Get Ready!")
    }
}else{
    choice = false;
    console.log("Goodbye!");
}

//Introduction
console.log("You are at a Justin Bieber concert, and you hear this lyric 'Lace my shoes off, start racing.'");

//Race
console.log("Suddenly, Bieber stops and says, 'Who wants to race me?'");
userAnswer = prompt("Do you want to race Bieber on stage?");

if(userAnswer == "yes"){
    console.log("You and Beiber start racing. It's neck and neck! You win by a shoelace!");
}else{
    console.log("Oh no! Bieber shakes his head and sings 'I set a pace, so I can race without pacing.'");
}

//Feedback
feedback = prompt("Between 0 and 10, please rate my game!");

if(feedback > 8){
    console.log("Thank you! We should race at the next concert!");
}else{
    console.log("I'll keep practicing coding and racing");
}
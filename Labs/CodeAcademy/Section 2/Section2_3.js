// Check if the user is ready to play!

var choice = true;
var age;

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

console.log("You are at a Justin Bieber concert, and you hear this lyric 'Lace my shoes off, start racing.'")
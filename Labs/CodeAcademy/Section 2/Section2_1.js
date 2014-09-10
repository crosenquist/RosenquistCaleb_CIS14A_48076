// Check if the user is ready to play!

var choice = true;

//confirm("Would you like to play a game?");

if(confirm("Would you like to play a game?")==choice){
    console.log("Get Ready!");
}else{
    choice = false;
    console.log("Goodbye!");
}
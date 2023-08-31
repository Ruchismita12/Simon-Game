var buttonColours = ["red", "blue", "green", "yellow"];   //Creating an array containing all the colours

var gamePattern = [];                    //Creating an array to contain all the colours that will flash randomly
var userClickedPattern = [];             //Creating an array to contain all the colors roundwise when they are getting clicked

var started = false;
var level = 0;

$(document).keypress(function() {         //If there is a keypress on the document, then it will call function
  if (!started) {
    $("#level-title").text("Level " + level);      //The h1 tag changes into particular level
    nextSequence();
    started = true;
  }
});

$(".btn").click(function() {                //Selecting all the buttons which on getting clicked, call the callback function

  var userChosenColour = $(this).attr("id");        //It will choose that particular color which is equal to its id
  userClickedPattern.push(userChosenColour);        //All the chosen colors will be pused into this array     

  playSound(userChosenColour);                       //When button will be clicked, it will call playSound to hear the sound of particular color
  animatePress(userChosenColour);                    //When button is clicked, animation can be seen

  checkAnswer(userClickedPattern.length-1);          //Call check answer function to match the sequence
});

function checkAnswer(currentLevel) {                 //Checking whether the sequence computer is giving and user is giving is same or not

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {     //Check if the the current game colour matches to last colour of userClickedpattern 
      if (userClickedPattern.length === gamePattern.length){                  // If the user got the most recent answer right , then check that they have finished their sequence in correct manner.
        setTimeout(function () {                                              //Call nextSequence() after a 1000 millisecond delay.
          nextSequence();
        }, 1000);
      }
    } else {
      //playSound("wrong");
      $("body").addClass("game-over");                                        //there is a class called "game-over", apply this class to the body of the website when the user gets one of the answers wrong and then remove it after 200 milliseconds.
      $("#level-title").text("Game Over, Press Any Key to Restart");          //Change the h1 title to say "Game Over, Press Any Key to Restart" if the user got the answer wrong.

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      startOver();
    }
}


function nextSequence() {                                                    //From this function we will generate the random sequence required for the game
  userClickedPattern = [];
  level++;                 //Level number increases
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);                   //Creating a random number 
  var randomChosenColour = buttonColours[randomNumber];                //store the corresponding colour 
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);     //Animation for flash of the button
  playSound(randomChosenColour);
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");                    //When button gets clicked inside animatePress(), pressed class is added 
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");              //After 100 ms, pressed class is removed
  }, 100);
}

function playSound(name) {
  var audio = new Audio(name + ".mp3");
  audio.play();
}

function startOver() {          //need to reset the values of level, gamePattern and started variables.
  level = 0;                         
  gamePattern = [];
  started = false;
}
















































/*var buttonColours=["red","blue","green","yellow"];   //Creating an array containing all the colours
var gamePattern=[];  //Creating an array to contain all the colours that will flash randomly
var userClickedPattern=[];   //Creating an array to contain all the colors roundwise when they are getting clicked
var started=false;
var level=0;
$(document).keypress(function()   //If there is a keypress on the document, then it will call function
{
    if(!started)
    {
        $("#level-title").text("Level "+level);  //The h1 tag changes into particular level
        nextSequence();
        started=true;

    }
});

//nextSequence();
$(".btn").click(function()   //Selecting all the buttons which on getting clicked, call the callback function
{
    var userChosenColour=$(this).attr("id");       //It will choose that particular color which is equal to its id
    userClickedPattern.push(userChosenColour); //All the chosen colors will be pused into this array
    playSound(userChosenColour);              //When button will be clicked, it will call playSound to hear the sound of particular color
    animatePress(userChosenColour);           //When button is clicked, animation can be seen

    checkAnswer(userClickedPattern.length-1);  //Call check answer function to match the sequence
})

function checkAnswer(currentLevel) {   //Checking whether the sequence computer is giving and user is giving is same or not

    //Check if the the current game colour matches to last colour of userClickedpattern 
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

      console.log("success");

      // If the user got the most recent answer right , then check that they have finished their sequence in correct manner.
      if (userClickedPattern.length === gamePattern.length){

        //Call nextSequence() after a 1000 millisecond delay.
        setTimeout(function () {
          nextSequence();
        }, 1000);

      }

    } else {

      console.log("wrong");
      playSound("wrong");

      //there is a class called "game-over", apply this class to the body of the website when the user gets one of the answers wrong and then remove it after 200 milliseconds.
      $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      //Change the h1 title to say "Game Over, Press Any Key to Restart" if the user got the answer wrong.
      $("#level-title").text("Game Over, Press Any Key to Restart");

      startOver();
    


    }

}
function nextSequence()         //From this function we will generate the random sequence required for the game
{
    userClickedPattern = [];
    level=level+1;               //Level number increases
    $("#level-title").text("Level "+level); //The h1 tag changes

    var randomNumber=Math.floor(Math.random()*4);   //Creating a random number 
    randomChosenColour=buttonColours[randomNumber];   //store the corresponding colour 
    gamePattern.push(randomChosenColour);

    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);   //Animation for flash of the button
    //var audio=new Audio(randomChosenColour+".mp3");
    playSound(randomChosenColour);

}

//nextSequence();

function playSound(name)
{
    var audio=new Audio(name+".mp3");
    audio.play();

}

function animatePress(currentColour)
{
    $("#"+currentColour).addClass("pressed");   //When button gets clicked inside animatePress(), pressed class is added 
    setTimeout(function()
    {
        $("#"+currentColour).removeClass("pressed"); //After 100 ms, pressed class is removed
    },100);

}   

function startOver()   
{
  var level=0;              //need to reset the values of level, gamePattern and started variables.
  var gamePattern=[];
  var started=false;


  $(document).keypress(function()   //If there is a keypress on the document, then it will call function
  {
    var level=0;  
    if(!started)
    {
        $("#level-title").text("Level "+level);  //The h1 tag changes into particular level
        nextSequence();
        started=true;

        var level=0;

    }
});
}    */

























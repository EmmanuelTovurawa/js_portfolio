var secreteNum;
var input;
var active = true;
secreteNum = Math.floor(Math.random()*10)+1;

function userInput(){
    var input = parseInt(prompt("Please guess the secret number (1-10)"));
    checkCorrect(input);
}

function checkCorrect(input){
    while(active){
        if(input === secreteNum){
            alert("Correct");
            active = false;
            reloadPage();
        }else if(input>secreteNum){
            alert("Incorrect, too high");
            userInput();
        }else if(input < secreteNum){
            alert("Incorrect, too low");
            userInput();
        }else{
            alert("Invalid input, please enter a number");
        }
    }
}
function reloadPage(){
    window.location.reload();
}


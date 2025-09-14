const score = document.querySelector(".score")
const highScore = document.querySelector(".highscore")
const message = document.querySelector(".message")
const guessButton = document.getElementById("checkBtn")
const guess = document.querySelector(".guess")
const resetBtn = document.querySelector(".again")
let randomNumb;

function startGame(){
    resetBtn.style.display = "none";
    score.textContent = 20;
    randomNumb = Math.floor(Math.random() * 20) + 1;
    console.log(randomNumb)
guessButton.style.display = "block";
    message.textContent = "Make a guess...."
}



function makeGuess (guess){


    console.log(guess)
    if (!guess){
        message.innerHTML = "Not a number!!!"
    }

    if (guess === randomNumb){
        console.log("rigtigt gæt")
        message.innerHTML = "YOU WIN!!!!"
        if (parseInt(score.textContent)> parseInt(highScore.textContent)){
            highScore.textContent = score.textContent
        }
        guessButton.style.display = "none";
        resetBtn.style.display = "block"

    }else if (guess>randomNumb){
        console.log("forkert gæt")
        message.innerHTML = "Yo've guessed too high"
        score.innerHTML = parseInt(score.textContent) - 1;
    }
    else if(guess<randomNumb){
        console.log("forkert gæt 2")
        message.innerHTML = "you've guessed to low"
        score.textContent = parseInt(score.textContent) - 1;
    }

    if (parseInt(score.textContent) === 0){
        message.innerHTML = "You lost!!!"
        guessButton.style.display = "none";
        resetBtn.style.display = "block"

    }

}



startGame();
guessButton.addEventListener('click',function () {
    makeGuess(parseInt(guess.value))
})
resetBtn.addEventListener('click', function(){
    startGame();

})




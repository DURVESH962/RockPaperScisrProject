const choices = document.querySelectorAll(".choice")
const score = document.querySelector(".score")
// console.log(score)
const result = document.getElementById("result")
const restart = document.getElementById("restart")
const modal = document.querySelector(".modal");
console.log(modal)

const scoreboard ={
    player:0,
    computer:0
}



function play(e){
    // console.log(e.target)
restart.style.display = "inline-block"
const playerChoice = e.target.id
   // console.log(playerchoice)
const computerChoice = getComputerChoice()
const winner = getWinner(playerChoice,computerChoice);
// console.log("computer choice "+computerChoice,"winner"+winner)
showWinner(winner,computerChoice)
}

function getWinner(p,c){
    // console.log(p,c)
    if(p==c){
        return 'draw';
    }else if(p=="rock"){
        if(c=="paper"){
            return 'computer'
        }else{
            return "player"
        }
    }else if(p=="paper"){
        if(c=="scissors"){
            return"computer"
        }else{
            return"player"
        }
    }else if(p=="scissors"){
        if(c=="rock"){
            return"computer"

        }
    }
}
function getComputerChoice(){
    const randomNumber = Math.random();
    if(randomNumber<0.23){
        return "rock";

    }else if(randomNumber>0.89){
        return "paper"
    
    }else
    return "scissors";
}
function showWinner(winner,computerChoice){
    console.log(scoreboard)
    if(winner=="player"){
        scoreboard.player++;
        result.innerHTML = `
        <h1 class='text-win'> You win</h1>
        <i class='fas fa-hand-${computerChoice} fa-10x'></i>

        `
    }else if(winner == "computer"){
        scoreboard.computer++;
        result.innerHTML = `
        <h1 class='text-lose'>You lose</h1>
        <i class='fas fa-hand-${computerChoice} fa-10x'></i>
        `
    }else{
      
        result.innerHTML = `
        <h1 class='text-lose'>Its a Draw</h1>
        <i class='fas fa-hand-${computerChoice} fa-10x'></i>
        `

    }
    score.innerHTML=`
    <p>Player :${scoreboard.player}</p>
    <p>Computer :${scoreboard.computer}</p>
    `
    modal.style.display = "block"
}

function clearModal(e){
    // console.log("testing!!",e.target)
if(e.target == modal){
    console.log(e)
    modal.style.display = "none"
}
}
function restartGame(){
    console.log("test")
    scoreboard.player = 0;
    scoreboard.computer = 0;
    score.innerHTML = `
    <p>Player : 0</p>
    <p>Computer: 0</p>
    `
}
// Event listener
choices.forEach(function(choice){
    choice.addEventListener("click",play)
        // console.log("hello") 
})
window.addEventListener("click",clearModal)
restart.addEventListener("click",restartGame)


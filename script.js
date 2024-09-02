let userScore = 0;
let compScore = 0;
let userWin = true;


const choices = document.querySelectorAll(".choice");

const genCompChoice = () =>{
    // Rock,Paper,scissors
    const options = ["rock","paper","scissor"]
    const randomIndex = Math.floor(Math.random()*3);
    return options[randomIndex]
}
const playGame = (userChoice)=>{
    console.log("user choice",userChoice);
    const compChoice = genCompChoice();
    console.log("Comp Choice",compChoice);

    if(userChoice === compChoice){
        // Draw Game
        drawGame();
    }
    else{      //If both are not same it will run
        let userWin = true;
        if(userChoice === "rock"){   //if userChoice is rock
            userWin = compChoice==="paper"?false:true;  //CompChoice may be paper or scissor
        }
        else if(userChoice === "paper"){   
            userWin = compChoice==="scissor"?false:true;
        }
        else{   
            userWin = compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice)
    }
}

const drawGame = ()=>{
    console.log("The Game is Tie");
    document.getElementById("msg").textContent="The game was draw again select one";

}

const showWinner = (userWin,userChoice,compChoice)=>{
    if(userWin){
        console.log("User wins ");
        document.getElementById("msg").textContent=`You Won! Your ${userChoice} beats ${compChoice}`;
        document.getElementById("msg").style.backgroundColor = "green"
        userScore++;
        document.getElementById("user-score").textContent = userScore;
    }
    else{
        console.log("Computer wins")
        document.getElementById("msg").textContent=`You Lose ${compChoice} beats your ${userChoice}`;
        document.getElementById("msg").style.backgroundColor = "red"

        compScore++;
        document.getElementById("comp-score").textContent = compScore;

    }
}

choices.forEach((choice) =>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice)
    });
});

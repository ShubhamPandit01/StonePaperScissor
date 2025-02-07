
let arr = ["stone", "paper", "scissor"]; //creat a arr for computer move
let btn = document.querySelectorAll(".buttons button"); // selecting all buttons
let userScore = 0; // user score depend on the per round initial 0
let computerScore = 0;   // computer score depend on the per round initial 0
let userScore_span = document.getElementById("user-score"); //userscore sapn for updat the score
let computerScore_span = document.getElementById("computer-score");   //computercore sapn for updat the score
let vs = document.querySelector("#ans"); // ans for display the moves of user and computer
let final = document.querySelector(".final"); // final for display the finalm result of the round
let head = document.querySelector(".heading")  // head changing color accrding to the score


for(let t of btn){
    t.addEventListener("click", function(e){  // main condition of the game where all the action going on
        let user = e.target.innerText;
        let computer = arr[parseInt(Math.random() * 3)];
        if(user.toLowerCase() === computer){ // for draw
            vs.innerText = `User: ${user} VS Computer: ${computer}`
            vs.style.color = " #13335C"
            final.innerText = "It's a draw!";
            final.style.color = " #13335C";
        }
        else if(user === "Stone" && computer === "scissor"){ // user wins
            userScore++;
            userScore_span.innerText = userScore;
            vs.innerText = `User: ${user} VS Computer: ${computer}`
            vs.style.color = 'green'
            final.innerText = "You won!";
            final.style.color = "green";
        }   
        else if(user === "Scissor" && computer === "paper"){   // user wins
            userScore++;
            userScore_span.innerText = userScore;
            vs.innerText = `User: ${user} VS Computer: ${computer}`
            vs.style.color = 'green'
            final.innerText = "You won!";
            final.style.color = "green";
        }
        else if(user === "Paper" && computer === "stone"){   // user wins
            userScore++;
            userScore_span.innerText = userScore;
            vs.innerText = `User: ${user} VS Computer: ${computer}`
            vs.style.color = 'green'
            final.innerText = "You won!";
            final.style.color = "green";
        }
        else{   // compiuter wins
            computerScore++;
            computerScore_span.innerText = computerScore;
            vs.innerText = `User: ${user} VS Computer: ${computer}`;
            vs.style.color = 'red'
            final.innerText = "You Lose";
            final.style.color = "red";
        }

        if(userScore > computerScore){ // heading changing colors according to the round winning
            head.style.color = "green"
        }
        else if(userScore<computerScore){
            head.style.color = "red"
        }
        else{
            head.style.color = " #13335C"
        }
        
        
        if(userScore >= 5){
            alert(`      !!You Won!!\n User: ${userScore} \n Computer: ${computerScore}`)
            userScore_span.innerText = 0;  // score value 0 for restart the game
            computerScore_span.innerText = 0;
            userScore = 0   // score value 0 for restart the game logically
            computerScore = 0
            head.style.color = " #13335C"
            vs.innerText = "Choose your hand by clicking below"
            vs.style.color = 'black'
            final.innerText = ''
        } 
        else if(computerScore >= 5){
            alert(`      !!You Lose!!\n User: ${userScore} \n Computer: ${computerScore}`)
            computerScore_span.innerText = 0; // score value 0 for restart the game
            userScore_span.innerText = 0; 
            userScore = 0  // score value 0 for restart the game logically
            computerScore = 0
            head.style.color = " #13335C"
            vs.innerText = "Choose your hand by clicking below"
            vs.style.color = 'black'
            final.innerText = ''
        }
    })

}

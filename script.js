let arr = ["stone", "paper", "scissor"];
let btn = document.querySelectorAll(".buttons button");
let userScore = 0;
let computerScore = 0;
let userScore_span = document.getElementById("user-score");
let computerScore_span = document.getElementById("computer-score");
let vs = document.querySelector("#ans");
let final = document.querySelector(".final");

for(let t of btn){
    t.addEventListener("click", function(e){
        let user = e.target.innerText;
        let computer = arr[parseInt(Math.random() * 3)];
        if(user.toLowerCase() === computer){
            vs.innerText = `${user} vs ${computer}`;
            vs.style.color = " #13335C"
            final.innerText = "It's a draw!";
            final.style.color = " #13335C";
        }
        else if(user === "Stone" && computer === "scissor"){
            userScore++;
            userScore_span.innerText = userScore;
            vs.innerText = `${user} vs ${computer}`;
            vs.style.color = 'green'
            final.innerText = "You won!";
            final.style.color = "green";
        }   
        else if(user === "Scissor" && computer === "paper"){
            userScore++;
            userScore_span.innerText = userScore;
            vs.innerText = `${user} vs ${computer}`;
            vs.style.color = 'green'
            final.innerText = "You won!";
            final.style.color = "green";
        }
        else if(user === "Paper" && computer === "stone"){
            userScore++;
            userScore_span.innerText = userScore;
            vs.innerText = `${user} vs ${computer}`;
            vs.style.color = 'green'
            final.innerText = "You won!";
            final.style.color = "green";
        }
        else{
            computerScore++;
            computerScore_span.innerText = computerScore;
            vs.innerText = `${user} vs ${computer}`;
            vs.style.color = 'red'
            final.innerText = "You Lose";
            final.style.color = "red";
        }
    })

}

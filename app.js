let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const sci_div = document.getElementById("s");
// caching the DOM above

function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
}

function convert_text(letter){
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "computer".fontsize(3).sub();
    result_p.innerHTML = `${convert_text(userChoice)}${smallUserWord} beats ${convert_text(computerChoice)}${smallCompWord}. You win.`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(() => {document.getElementById(userChoice).classList.remove("green-glow")}, 400)
}
function lose(userChoice, computerChoice){
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "computer".fontsize(3).sub();
    result_p.innerHTML = `${convert_text(computerChoice)}${smallCompWord} beats ${convert_text(userChoice)}${smallUserWord}. You lose.`;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(() => {document.getElementById(userChoice).classList.remove("red-glow")}, 400)
}
function draw(userChoice, computerChoice){
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `You both had ${convert_text(userChoice)}, DRAW`;
    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout(() => {document.getElementById(userChoice).classList.remove("gray-glow")}, 400)
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "sr":
        case "rp":
        case "ps":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function main(){
    rock_div.addEventListener('click', () => game("r"));
    paper_div.addEventListener('click',() => game("p"));
    sci_div.addEventListener('click', () => game("s"));
}

main();



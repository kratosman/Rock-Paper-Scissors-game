const btn = document.querySelectorAll('.btn')
const playerText = document.querySelector('.container__player')
const computerText = document.querySelector('.container__computer')
const resultsText = document.querySelector('.container__results')
const scoreText = document.querySelector('.container__score')
const enemyScoreText = document.querySelector('.container__enemy-score')
let player;
let computer;
let results;
let score = 0;
let enemyScore = 0;
btn.forEach((item) => {
    item.addEventListener('click', () => {
        computerTurn()
        playerText.innerHTML = `${player = item.textContent}`
        computerText.innerHTML = `${computer}`
        resultsText.innerHTML = `${ResultOfMatch()}`
    })
})
function computerTurn() {
    const computerBot = Math.floor(Math.random() * 3) + 1

    switch (computerBot) {
        case 1:
            computer = 'ROCK'
            break;
        case 2:
            computer = 'PAPER'
            break;
        case 3:
            computer = 'SCISSORS'
            break;
    }
}
function ResultOfMatch() {
    if (player == computer) {
        return "Draw!"
    } else if (computer == "ROCK") {
        if (player == "PAPER") {
            score++;
            scoreText.textContent = score
            return "you win"
        } else {
            enemyScore++;
            enemyScoreText.textContent = enemyScore
            return "you lose"
        }
    } else if (computer == "PAPER") {
        if (player == "SCISSORS") {
            score++;
            scoreText.textContent = score
            return "you win"
        } else {
            enemyScore++;
            enemyScoreText.textContent = enemyScore
            return "you lose"
        }
    } else if (computer == "SCISSORS") {
        if (player == "ROCK") {
            score++;
            scoreText.textContent = score
            return "you win"
        } else {
            enemyScore++;
            enemyScoreText.textContent = enemyScore
            return "you lose"
        }
    }
}
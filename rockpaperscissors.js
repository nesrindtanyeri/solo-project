
// rockPaperScissors.js // player’s move as an input from process.argv.

// 1. Komut satırından kullanıcının seçimi alınır
const playerMove = process.argv[2];

// 2. Bilgisayarın hamlesini rastgele seçiyoruz // randomly generate a move for the computer.
const moves = ["rock", "paper", "scissors"];
const computerMove = moves[Math.floor(Math.random() * moves.length)];

// 3. Oyunun kazananını belirleyen fonksiyon // winner based on the rules of Rock Paper Scissors.
function determineWinner(player, computer) {
    if (player === computer) {
        return "It's a draw!";
    } else if (
        (player === "rock" && computer === "scissors") ||
        (player === "scissors" && computer === "paper") ||
        (player === "paper" && computer === "rock")
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}

// 4. Sonucu ekrana yazdır
console.log(`You chose ${playerMove}. Computer chose ${computerMove}.`);
console.log(determineWinner(playerMove, computerMove));

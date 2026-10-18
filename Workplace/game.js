let timeLeft = 120;

console.log("Starting Timer:", timeLeft);

let timer = setInterval(function() {
    timeLeft = timeLeft - 1;

    console.log("Time Left:", timeLeft);
document.getElementById("timer").textContent = timeLeft;
if (timeLeft <= 10 && timeLeft > 0) {
    document.getElementById("timer").style.color =
        timeLeft % 2 === 0 ? "yellow" : "red";
} else {
    document.getElementById("timer").style.color = "#1de994";
}
    if (timeLeft <= 0) {
        clearInterval(timer);
        console.log("Time's Up!");
        
    }
}, 1000);
function enemyDefeated() {
    let bonusTime = Math.floor(Math.random() * 6) + 5;

    timeLeft = timeLeft + bonusTime;
document.getElementById("timer").textContent = timeLeft;
 document.getElementById("timer").style.color = timeLeft <= 10 ? (timeLeft % 2 === 0 ? "yellow" : "red") : "#1de994";
console.log("Enemy defeated!");
    console.log("Bonus Time:", bonusTime);
    console.log("New Time:", timeLeft);
}
document.addEventListener("keydown", function(event) {

    if (event.key.toLowerCase() === "k" && timeLeft > 0) {

        enemyDefeated();

    }

});
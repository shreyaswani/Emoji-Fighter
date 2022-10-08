const fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"];

const stageEl = document.getElementById("stage");
const fightButton = document.getElementById("fightButton");

fightButton.addEventListener("click", function() {
    var a = Math.floor(Math.random()*fighters.length)
    var b = Math.floor(Math.random()*fighters.length)
   stageEl.textContent = fighters[a]+" VS "+fighters[b]
});

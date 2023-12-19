function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

document.title = "\u200E";
var pjs = "Flash games!"
async function ok() {
var tx = ""
for (let i=0; i < pjs.length; i++) {
  tx += pjs[i]
  await sleep(250);
  document.title = "\u200E" + tx;
}
await sleep(250);
document.title = "\u200E" + pjs;
await sleep(5000);
for (let i=pjs.length; i > -1; i--) {
  tx = tx.slice(0, -1);
  await sleep(250);
  document.title = "\u200E" + tx;
}
}
setInterval(ok, pjs.length()*1000);
ok();

const play = document.querySelector('#play');
const game = document.querySelector('#game');
var swfobject = {};

window.RufflePlayer = window.RufflePlayer || {};
        window.addEventListener("load", (event) => {
            const ruffle = window.RufflePlayer.newest();
            const player = ruffle.createPlayer();
            const container = document.getElementById("container"); 
            container.appendChild(player);
            
            player.style.width = "800px"; 
            player.style.height = "600px";
        });

play.onclick = (event) => {
  player.load({
                url: "lewolfyt.github.io/flash-catalog/" + game.value, 
                backgroundColor: "#000", 
             });
}

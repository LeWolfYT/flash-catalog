function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

document.title = "\u200E";
var pjs = "Flash games!"

async function ok() {
var pjs = "PJ\'S ROOM!"
var tx = ""
for (let i=0; i < pjs.length; i++) {
  tx += pjs[i]
  await sleep(250);
  document.title = "\u200E" + tx;
}
await sleep(250);
document.title = "\u200E" + pjs;
await sleep(pjs.length()*500);
for (let i=pjs.length; i > -1; i--) {
  tx = tx.slice(0, -1);
  await sleep(250);
  document.title = "\u200E" + tx;
}
}

var play = document.querySelector('#play');
var game = document.querySelector('#game');

setInterval(ok, pjs.length()*1000);
ok();

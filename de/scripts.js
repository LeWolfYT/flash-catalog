function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

document.title = "\u200E";
var pjs = "Flash-spiele!"

async function ok() {
var tx = ""
var pjs = "Flash-spiele!"
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

setInterval(ok, 13000);
ok();

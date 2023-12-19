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

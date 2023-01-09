function luckyDraw(player) {
  return new Promise((resolve, reject) => {
    const win = Boolean(Math.round(Math.random()));

    process.nextTick(() => {
      if (win) {
        resolve(`${player} won a prize in the draw!`);
      } else {
        reject(new Error(`${player} lost the draw.`));
      }
    });
  });
}


(async function getResults () {
  try {
    const luckyTina = await luckyDraw ("Tina");
    console.log (luckyTina);
  } catch (e) {
    console.log (e)
  }
  try {
    const luckyJorge = await luckyDraw ("Jorge");
    console.log (luckyJorge);
  } catch (e) {
    console.log (e)
  }
  try {
    const luckyJulien = await luckyDraw ("Julien");
    console.log (luckyJulien);
  } catch (e) {
    console.log (e)
  }
})();
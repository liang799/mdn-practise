const aliceTumbling = [
  { transform: "rotate(0) scale(1)" },
  { transform: "rotate(360deg) scale(0)" },
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: "forwards",
};

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

function spin(aliceNum, callback) {
  const animated = aliceNum.animate(aliceTumbling, aliceTiming);
  callback(animated);
}

/* Callback Hell */
// spin(alice1, spin(alice2, () => alice3.animate(aliceTumbling, aliceTiming)))

/* Callback Hell Part 2 Not working*/
// spin(alice1, setTimeout(
//   spin(alice2, setTimeout(() =>
//     alice3.animate(aliceTumbling, aliceTiming)
//   ), 2000)
// ), 2000)

/* Promise Chain */
alice1.animate(aliceTumbling, aliceTiming).finished
  .then(() => alice2.animate(aliceTumbling, aliceTiming).finished)
  .then(() => alice3.animate(aliceTumbling, aliceTiming).finished)
  .catch((error) => console.log(error));

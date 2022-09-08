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
  callback();
}

/* Callback Hell */
// spin(alice1, () => 
//   spin(alice2, () => 
//     alice3.animate(aliceTumbling, aliceTiming)
//   )
// );

/* Promise version of callback hell */
alice1.animate(aliceTumbling, aliceTiming).finished
  .then(() => {
    alice2.animate(aliceTumbling, aliceTiming).finished 
      .then(() => alice3.animate(aliceTumbling, aliceTiming).finished)
  })


/* Promise Chain */
// alice1.animate(aliceTumbling, aliceTiming).finished
//   .then(() => alice2.animate(aliceTumbling, aliceTiming).finished)
//   .then(() => alice3.animate(aliceTumbling, aliceTiming).finished)
//   .catch((error) => console.log(error));


/* Async and await */
async function spinAlice(aliceNum) {
  const status = await aliceNum.animate(aliceTumbling, aliceTiming).finished;
  if (status) {
    console.log("Spin, sugar, spin");
  } else {
    console.log("Error");
  }
}

// spinAlice(alice1);
// spinAlice(alice2);
// spinAlice(alice3);

//
const promise1 = new Promise(function (resolve, reject) {
  //promise description
});

////////////////////////////////
const promise2 = new Promise(
  (resolve) => {
    setTimeout(() => {
      resolve("I am a promise");
    }, 500);
  },
  (reject) => {}
);

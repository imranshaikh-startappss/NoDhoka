var a = 10;
console.log('1');
setTimeout(() => {
  console.log('2'); //c1
}, 0);

new Promise(resolve => {
  console.log('3');
  fetch(
    'https://help.steampowered.com/public/shared/images/header/logo_steam.svg?t=962016',
  )
    .then(() => {
      console.log('11');
      resolve('nothing');
    })
    .catch(() => {
      console.log('12');
      resolve('nothing');
    });
  //   resolve(5);
}).then(() => {
  // c2
  console.log('4');
  setTimeout(() => {
    console.log('8');
  }, 0);
});

console.log('5');

setTimeout(() => {
  // c3
  console.log('6');
}, 10);

// MA
// MI then
// CS
// CQ c1 c3 c4

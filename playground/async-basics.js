
console.log('starting app');

setTimeout(() => {
  console.log('Inside of Callback')
}, 2000);

setTimeout(() => {
  console.log('Inside of 0')
}, 0);

console.log('finishing up');

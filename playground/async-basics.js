console.log('Starting App');

setTimeout(() => {
  console.log('Inside callback');
}, 2000);

setTimeout(() => {
  console.log('Second setTimeout');
}, 0);

console.log('Finishing up');
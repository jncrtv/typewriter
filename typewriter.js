let sentence = "hello there from lighthouse labs TORONTO";
let i = 0;


for (const char of sentence) {

  setTimeout(() => {
    process.stdout.write(char);
  }, i);

  i += 50;
};

setTimeout(() => {
  console.log('');
},i);


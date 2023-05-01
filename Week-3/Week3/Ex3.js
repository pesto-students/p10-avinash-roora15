
//Given Function :

function createIncrement() {
  let count = 0;
  function increment() {
    count++;
  }
  let message = `Count is${count}`;
  function log() {
    console.log(message);
  }
  return [increment, log];
}

const [increment, log] = createIncrement();

increment();
increment();
increment();
log();// What is logged? The answer is => 0

// The increment logic is working as it is increasing the count value as expected.
// But the issue is that the message variable is declared inside createIncrement() and so it is always assigned the value of count=0 during execution.
// This can be fixed by moving the message variable inside the increment() function.
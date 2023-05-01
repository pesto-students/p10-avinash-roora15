// Call :

function intro(greeting) {
  console.log(`${greeting}, ${this.name}!`);
}
const person = { name: 'Ariel' };
intro.call(person, 'Hello');

// Bind :

function intro(greeting, exclamation) {
  console.log(`${greeting}, ${this.name}${exclamation}`);
}
const person = { name: 'Ariel' };
const sayHello = intro.bind(person, 'Hello', '!');
sayHello();

// Apply :

function intro(greeting, exclamation) {
  console.log(`${greeting}, ${this.name}${exclamation}`);
}
const person = { name: 'Ariel' };
greet.apply(person, ['Hello', '!']);


const p = document.querySelector('p');

const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}
// Regular
console.log('Hello World');

// clearing
console.clear();

// Interpolated
var variable = 'variable';
console.log(`Hello I am ${variable}`);

// Styled
console.log('%c I am some great text', 'font-size: 50px; background: red');

// warning!
console.warn('No');

// Error :|
console.error('error');

// Info
console.info('Crocodiles eat 3-4 people per year');


// Testing
console.assert(1 === 2, 'That is wrong'); // only fire if its false, when true nothing happens 

// Viewing DOM Elements
console.log(p); 
console.dir(p); // all the stuff that lives on that element, console.dir will show you

// Grouping together
dogs.forEach(dog => {
    console.group(`${dog.name}`); // or console.groupCollapsed(`${dog.name}`); // the group will start collapsed
    console.log(`This is ${dog.name}`);
    console.log(`{dog.name} is {dog.age} years old`);
    console.groupEnd(`${dog.name}`);
});

// counting
console.count('Wes');
console.count('Wes');
console.count('Wes');
console.count('Wes');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/user')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
    });

//table
console.table(dogs);


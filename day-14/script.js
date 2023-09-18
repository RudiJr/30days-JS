 // start with strings, numbers and booleans
 let age = 100;
 let age2 = age;
 console.log(age, age2); // 100, 100
 age = 200;                  // if we change the value of the original one, is not going to update the other one. 
 console.log(age, age2); // 200, 100



    // Let's say we have an array
    const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

    // and we want to make a copy of it.
    const team = players;

    // You might think we can just do something like this:
    tean[3] = 'lux'; // in this way this are going to update the original array, updating the values

    // however what happens when we update that array?
    // now here is the problem!
    // oh no - we have edited the original array too!
    // Why? It's because that is an array reference, not an array copy. They both point to the same array!
    // So, how do we fix this? We take a copy instead!
    const team2 = players.slice(); // in this way is only going to update the reference 'team', bacause we created a real copy using .slice

    // one way
    // or create a new array and concat the old one in
    const  team3 = [].concat(players); // works like .slice()

    // or use the new ES6 Spread
    const team4 = [...players]; /* Using the spread operator in JavaScript. It allows you to create a new
    array or object by spreading out the elements of an existing array or object. In
    this case, it is used to create a copy of the `players` array. */
    team4[3] = 'vayne'; 
    console.log(team4); 
    // or 
    const team5 = Array.from(players);
    team5[3] = 'gnar';
    console.log(team5);

    // now when we update it, the original one isn't changed
    // The same thing goes for objects, let's say we have a person object
    // with Objects
    const person = {
      name: 'Wes Bos',
      age: 80
    };

    // and think we make a copy:
    const captain = person; 
    captain.number = 99; // wrong way, because it's referecence to the original and it's changing the values

    // how do we take a copy instead?
    const cap2 = Object.assign({}, person, {number: 99});
    console.log(cap2);
  /* `Object.assign` is a method in JavaScript that is used to copy the values of all enumerable
    properties from one or more source objects to a target object. It takes in a target object as
    the first parameter, followed by one or more source objects. It then copies the properties from
    the source objects to the target object. If there are properties with the same name, the values
    from the later source objects will overwrite the values from the earlier source objects. */

    // We will hopefully soon see the object ...spread
    // const cap3 = {...person};

    // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
    const pet = {
        type: 'cat',
        age: '2', 
        Food: {
            fav: 'salmon',
            lunch: 'wetFood'
        }
    };
    console.clear();
    console.log(pet)
    const pets = Object.assign({}, pet);
    // If we change the value of type or age, will not affect the original one. But if we change the Food property, will update the values on the orginal one. 
    // Because this is only 1 level deep, if we need to go deeper this will not work fine. 

    // poor man deep clone 
    const pets2 = JSON.parse(JSON.stringify(pet));
    JSON.parse(JSON.stringify(pet));
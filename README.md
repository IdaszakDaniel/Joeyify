
Joeyify
=========

*Unreliable automatic thesaurus inspired by "Friends" Joey Tribbiani writing skills*
![alt text](https://i.pinimg.com/originals/8f/8b/b7/8f8bb7fde1f3c47fd53893e8c68ddf42.jpg)

Joeify uses node-thesaurus library https://github.com/daizoru/node-thesaurus

## Installation

  npm install joeyify --save

## Usage

```Javascript
  const joeyify = require("./joeyify");
  const text = "Cheese, qwertyuiop. Boring workout.";

  console.log(joeyify(text));  //Dairy product, qwertyuiop. Deadening exercise.
```

## Tests

  npm test

// function Cat(name, owner) {
//     this.name = name;
//     this.owner = owner;
//   }
  
//   Cat.prototype.cuteStatement = function () {
//     return `${this.owner} loves ${this.name}. :3`;
//   };
  
//   Cat.prototype.meow = function () {
//     return 'meow';
//   };
  
  // TODO: Refactor to ES6 class syntax 
  

// class Cat {

//   constructor(name, owner) {
//     this.name = name;
//     this.owner = owner;
//   }

//   cuteStatement() {
//     return `${this.name} loves ${this.owner}. :3`;
//   }

//   meow() {
//     return 'meow';
//   }

// }

garfield = new Cat("garfield", "john")
console.log(garfield.cuteStatement())
console.log(garfield.meow())
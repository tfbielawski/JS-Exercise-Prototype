/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
    this.name = name;
    this.isFlying = false;
  }
  Airplane.prototype.takeOff = function () {
    this.isFlying = true;
  };
  Airplane.prototype.land = function () {
    this.isFlying = false;
  };
  
  
  /*
  // 👇 COMPLETE YOUR WORK BELOW 👇
  // 👇 COMPLETE YOUR WORK BELOW 👇
  // 👇 COMPLETE YOUR WORK BELOW 👇
  */
  
  /*
    TASK 1
      - Write a Person Constructor that initializes `name` and `age` from arguments.
      - All instances of Person should initialize with an empty `stomach` array.
      - Give instances of Person the ability to `.eat("someFood")`:
          + When eating an edible, it should be pushed into the `stomach`.
          + The `eat` method should have no effect if there are 10 items in the `stomach`.
      - Give instances of Person the ability to `.poop()`:
          + When an instance poops, its `stomach` should empty.
      - Give instances of Person a method `.toString()`:
          + It should return a string with `name` and `age`. Example: "Mary, 50"
  */
  
 //Define the object, pass in name and age
 function Person(name, age) 
 {
    //Set name to this.name
    this.name = name;
    //Set age to this.age
    this.age = age;
    //Initialize stomach to empty array
    this.stomach = [];
 }
 
 //Create an eat() function that can be used by person. Pass in edible 
 Person.prototype.eat = function (edible)
 {
   //If stomage has 10 or fewer...
   if(this.stomach.length <= 10)
   {
     //...the person can eat
     this.stomach.push(edible);
   }
 }

 //Poop method
 Person.prototype.poop = function(edible)
 {
   //Reset stomach to empty
   this.stomach = [];
 }
  
 //toString method
 Person.prototype.toString = function()
 {
   //Return the name and age in a string
   return `${this.name}, ${this.age}`;
 }


/*
  TASK 2
  - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
  - All instances built with Car:
      + should initialize with an `tank` at 0
      + should initialize with an `odometer` at 0
      - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
      - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
          + Should cause the `odometer` to go up.
          + Should cause the the `tank` to go down taking `milesPerGallon` into account.
      - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
          + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/
  
//Define the object
function Car(model, milesPerGallon) 
{
  //Set model to this.model
  this.model = model;
  //Set mpg to this.mpg
  this.milesPerGallon = milesPerGallon;
  //Init tank to 0
  this.tank = 0;
  //Init odometer to 0
  this.odometer = 0;
}

/* Stretch Goal*/
//Define a prototype function
Car.prototype.fill = function(gallons)
{
  //Add gallons to what's already in the tank.
  this.tank += gallons;

  /* Stretch Goal */
  //If the tank is empty...
  if (this.tank == 0)
  {
    //...Print this
    console.log("I ran out of fuel", "at",  "miles!")
  }
}

//Define a prototype drive() function
Car.prototype.drive = function(distance)
{
    //Add miles to what's already on the odometer
    this.odometer += distance;
    //Declare gallonsUsed, assign result of distance / mpg
    let gallonsUsed = distance / this.milesPerGallon;
    //Subtract gallons used from the tank
    this.tank -= gallonsUsed;

}
  
  /*
    TASK 3
      - Write a Baby constructor subclassing Person.
      - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
      - Besides the methods on Person.prototype, babies have the ability to `.play()`:
          + Should return a string "Playing with x", x being the favorite toy.
  */

//Define the subfunction/subclass Baby
function Baby(name, age, favoriteToy) 
{
  //Inherit from Person
  Person.call(this, name, age);

  //Set favoriteToy to this.favoriteToy
  this.favoriteToy = favoriteToy;
}


//Baby inherits from Person
Baby.prototype = Object.create(Person.prototype);

//Creating a play() for baby
Baby.prototype.play = function()
{
  //Return the required string
  return `Playing with ${this.favoriteToy}`;
}
  
  /* 
    TASK 4
    In your own words explain the four principles for the "this" keyword below:
    1. 
    2. 
    3. 
    4. 
  */
  
  
  ///////// END OF CHALLENGE /////////

  /* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
    return 'bar';
}

export default{
    foo,
    Person, 
    Car,
    Baby
}
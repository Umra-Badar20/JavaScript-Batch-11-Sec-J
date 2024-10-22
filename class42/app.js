class Animal{
    constructor(name,age,food){
        this.name = name
        this.age= age
        this.food= food
    }
    eat(){
        console.log(`${this.name} eats ${this.food}`);
    }
    isCute(){
        if(this.age<2){
            console.log(`${this.name} is cute`)
        }
    }
}
let cat = new Animal("cat", 2, "fish")
cat.eat()
cat.isCute()
console.log(cat);

class Fish extends Animal{
    constructor(name,age,food,isAquatic){
        super(name,age,food)
        this.isAquatic = isAquatic
    }
    swim(){
        if(this.isAquatic){
            console.log(`${this.name} can swim`)
        }
    }
}
const shark = new Fish("Shark", 2, "fish", true)
shark.eat()
shark.isCute()
shark.swim()
console.log(shark);

// ----------- CLOSURE ----------- 
function init() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() {
        var name = "APPLE";
      console.log(name); // use variable declared in the parent function
    }
    displayName();
  }
  init();

// --------------- destructuring ------------- 
let user =  [15 , 25 , 50, 125 , 254 , 540]
let [a1, , ,b1,...rest] = user
console.log(a1 , b1 , rest);



  
let x = 15;
let z;
(x>10) ? z ="true" : z = "False"
document.write(z);

Iterator

let num = [100 , 200 , 300];
let itr = num[Symbol.iterator]()
let a = itr.next()
console.log(a)
console.log("Hello")
let b = itr.next()
console.log(b.value)
console.log("Hello")
console.log("Hello")
console.log("Hello")
console.log("Hello")
let c = itr.next()
console.log(c.value)

function *generator()
{
    console.log("Hello1")
    yield "hello2"
    console.log("Hello3")
}
let g = generator()
console.log(g.next())  

const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
  }
  
  const updateMyVehicle = {
    type: 'car',
    year: 2021, 
    color: 'yellow'
  }
  
  const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}
  
//   //Check the result object in the console:
  console.log(myUpdatedVehicle);

var name = "Duke"; 
var color = "Brown"; 
var age = 5; 
  
// Using Object Literal Enhancement 
// Combines all variables into a dog object 
var dog = {name, color, age}; 
console.log(dog); 
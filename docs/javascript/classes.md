# Classes

## 1. What is Class in JavaScript?

In JavaScript, a class is like a blueprint or a template for creating objects. It helps organize and structure code by defining the properties and behaviors that objects of that class will have. Think of it as a set of instructions for making objects with similar characteristics. Here's a simple example of a class in JavaScript:

```javascript
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

// Creating an object of the Animal class
const myAnimal = new Animal("Dog", 3);

// Accessing properties and calling methods of the object
console.log(myAnimal.name); // Output: Dog
console.log(myAnimal.age); // Output: 3
myAnimal.speak(); // Output: Dog makes a sound.
```

In this example, the `Animal` class has properties `name` and `age`, and a method `speak()`. We create an object `myAnimal` from this class and can access its properties and call its methods.

::: tip
- A class in JavaScript is like a blueprint for creating objects.
- It defines the properties and behaviors that objects of that class will have.
:::

## 2. What are the differences between objects and classes in JavaScript?

In JavaScript, objects and classes are both used to create reusable code, but they work a bit differently. An object is like a container that holds data and functions related to that data. You can think of it as a single thing with properties and behaviors. Here's a simple example of creating an object:

```javascript
let car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2022,
  start: function() {
    console.log("Engine started!");
  }
};
```

On the other hand, a class is like a blueprint for creating objects. It defines the properties and behaviors that objects created from it will have. Think of a class as a template for creating objects of the same type. Here's a simple example of defining a class and creating objects from it:

```javascript
class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
  
  start() {
    console.log("Engine started!");
  }
}

let myCar = new Car("Toyota", "Corolla", 2022);
```

So, the main difference is that objects are created directly, while classes are used as blueprints for creating objects.

::: tip
- An object is like a single thing with properties and behaviors.
- A class is a blueprint for creating objects with similar properties and behaviors.
- Objects are created directly, while classes are used to create objects.
:::

## 3. How to get the class name of an object in JavaScript?

In JavaScript, you can get the class name of an object by using the `constructor.name` property. This property returns the name of the constructor function that created the object. Here's a simple example:

```javascript
class MyClass {
  constructor() {
    // constructor code
  }
}

const obj = new MyClass();
console.log(obj.constructor.name); // Output: "MyClass"
```

In this example, `obj.constructor.name` will return `"MyClass"`, which is the name of the class used to create the `obj` object.

::: tip
- You can get the class name of an object in JavaScript using the `constructor.name` property.
:::

## 4. What is constructor in JavaScript?

In JavaScript, a constructor is like a blueprint for creating objects of a certain type. It's typically defined within a class. When you create a new object using this blueprint, the constructor function is automatically called to initialize the object's properties and methods. It's like a special function that runs when you make a new instance of an object. Here's a simple example:

```javascript
// Define a class
class Person {
  constructor(name, age) { // Constructor function
    this.name = name;
    this.age = age;
  }
}

// Create a new object using the constructor
let person1 = new Person('John', 30);

// Now person1 has properties name and age initialized
console.log(person1.name); // Output: John
console.log(person1.age); // Output: 30
```

::: tip
- A constructor in JavaScript is a special function that initializes objects created from a class.
- It's defined within a class and is automatically called when a new object is created.
- The constructor function sets up the initial state of the object by assigning values to its properties.
:::

## 5. What is a static property or method in JavaScript?

In JavaScript, a static property or method is a property or method that belongs to the class itself rather than to instances of the class. This means that you can access static properties or methods without creating an object from the class. They are shared among all instances of the class. Here's a simple example in JavaScript:

```javascript
class MyClass {
  static myStaticProperty = 'Hello';
  
  static myStaticMethod() {
    return 'World';
  }
}

console.log(MyClass.myStaticProperty); // Output: Hello
console.log(MyClass.myStaticMethod()); // Output: World
```

In this example, `myStaticProperty` is a static property and `myStaticMethod` is a static method of the `MyClass` class. They can be accessed directly using the class name without creating an instance of the class.

::: tip
- A static property or method in JavaScript belongs to the class itself, not to instances of the class.
- They are shared among all instances of the class.
- You can access static properties or methods using the class name without creating an object.
:::

## 6. What is extending a class in JavaScript?

Extending a class in JavaScript means creating a new class that inherits properties and methods from another class. This is often done to reuse code and add new functionalities. Let's say we have a class called `Animal` with properties like `name` and methods like `makeSound()`. Now, if we want to create a more specific class, say `Dog`, which shares some characteristics of `Animal` but also has its own unique properties and methods, we can extend the `Animal` class. Here's a simple example in JavaScript:

```javascript
// Parent class
class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log("Some generic sound");
  }
}

// Child class extending Animal
class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  // Method specific to Dog
  wagTail() {
    console.log("Wagging tail!");
  }
}

// Creating an instance of Dog
const myDog = new Dog("Buddy", "Golden Retriever");
console.log(myDog.name); // Output: Buddy
myDog.makeSound(); // Output: Some generic sound
myDog.wagTail(); // Output: Wagging tail!
```

In this example, `Dog` extends `Animal`, inheriting its properties and methods like `name` and `makeSound()`. Additionally, `Dog` introduces its own property `breed` and method `wagTail()`.

::: tip
- Extending a class in JavaScript means creating a new class that inherits properties and methods from another class.
- It allows you to reuse code and add new functionalities.
- The child class can access the properties and methods of the parent class.
:::

## 7. What is the difference between `super()` and `super.method()` in JavaScript?

In JavaScript, `super()` is used to call the constructor of the parent class when you're making a subclass. It's like saying, `Do whatever you need to do in the constructor of the parent class`. On the other hand, `super.method()` is used to call a method from the parent class. It's like saying, `Go to the parent class and execute this specific method`. Here's a simple example to illustrate the difference:

```javascript
class Parent {
  constructor() {
    console.log('Parent constructor called');
  }
  
  greet() {
    console.log('Hello from parent');
  }
}

class Child extends Parent {
  constructor() {
    super(); // calling parent constructor
    console.log('Child constructor called');
  }
  
  greet() {
    super.greet(); // calling parent's greet method
    console.log('Hello from child');
  }
}

const child = new Child();
child.greet();
```

Here, `super()` calls the constructor of the `Parent` class, while `super.greet()` calls the `greet()` method of the `Parent` class.

::: tip
- `super()` is used to call the constructor of the parent class in a subclass.
- `super.method()` is used to call a specific method from the parent class in a subclass.
:::

## 8. What is the difference between `extends` and `implements` in JavaScript?

In JavaScript, `extends` and `implements` are both used in object-oriented programming, but they serve different purposes.

`extends` is used to create a new class that inherits properties and methods from another class. This means the new class gets all the functionalities of the parent class. Here's a simple example:

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog('Buddy');
dog.speak(); // Output: Buddy barks.
```

On the other hand, `implements` is not a native feature in JavaScript, but it's often used in TypeScript, a superset of JavaScript. It's used to declare that a class must have certain methods or properties. However, in vanilla JavaScript, there's no direct equivalent.

::: tip
- `extends` is used to create a new class that inherits properties and methods from another class.
- `implements` is not a native feature in JavaScript but is used in TypeScript to declare that a class must have certain methods or properties.
:::

## 9. What is the difference between `instanceof` and `typeof` in JavaScript?

In JavaScript, `typeof` is used to check the type of a variable or expression, returning a string indicating the data type. It's handy for determining whether a variable is a number, string, boolean, object, function, or undefined. For example:

```javascript
typeof 42; // returns "number"
typeof "hello"; // returns "string"
typeof true; // returns "boolean"
```

On the other hand, `instanceof` is used to check if an object is an instance of a particular class or constructor function. It returns `true` if the object is an instance of the specified class, otherwise `false`. Here's a simple example:

```javascript
class Animal {}
class Dog extends Animal {}

const dog = new Dog();

console.log(dog instanceof Dog); // returns true
console.log(dog instanceof Animal); // returns true, because Dog extends Animal
console.log(dog instanceof Object); // returns true, because all objects inherit from Object
```

So, in summary, `typeof` checks the data type of a variable or expression, while `instanceof` checks if an object is an instance of a particular class or constructor function.

::: tip
- `typeof` is used to check the data type of a variable or expression.
- `instanceof` is used to check if an object is an instance of a particular class or constructor function.
- `typeof` returns a string indicating the data type, while `instanceof` returns `true` or `false`.
:::

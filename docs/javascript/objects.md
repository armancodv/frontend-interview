# Objects

## 1. What is an object?

In JavaScript, an object is like a container that holds pieces of information called properties and actions called methods. Think of it as a box with labels on it. Each label represents a property, which can store things like numbers, text, or even other objects. Methods are like special labels that can perform actions or tasks when called upon. For example, an object representing a car might have properties like color and model, and methods like startEngine() or stopEngine(). Objects help organize and manage data in JavaScript programs, making it easier to work with complex information.

::: tip
- An object in JavaScript is like a container.
- It holds properties and methods.
- Properties store information like numbers or text.
- Methods perform actions or tasks.
:::

## 2. How do you create an object in JavaScript?

In JavaScript, you can create objects using various methods. One way is by using Object Literal Notation, where you define properties and methods directly within curly braces. Here's a simple example:

```javascript
let person = {
  name: 'John',
  age: 30,
  greet: function() {
    console.log('Hello!');
  }
};
```

Another method involves Constructor Functions, where you define a blueprint for objects using a function and then create instances using the `new` keyword. Here's an example:

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function() {
    console.log('Hello!');
  };
}

let person = new Person('John', 30);
```

You can also use `Object.create()` method, which creates a new object with the specified prototype object. Here's how you can do it:

```javascript
let personPrototype = {
  greet: function() {
    console.log('Hello!');
  }
};

let person = Object.create(personPrototype);
person.name = 'John';
person.age = 30;
```

Lastly, JavaScript introduced classes which provide a more structured way to create objects. Here's an example using classes:

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log('Hello!');
  }
}

let person = new Person('John', 30);
```

These are the main ways to create objects in JavaScript, each with its own advantages and use cases.

::: tip
- **Object Literal Notation**: Define properties and methods directly within curly braces.
- **Constructor Functions**: Define a blueprint for objects using a function and create instances using the `new` keyword.
- **Object.create() Method**: Create a new object with the specified prototype object.
- **Classes**: Introduced in ES6, classes provide a more structured way to create objects.
:::

## 3. What is the `new` keyword in JavaScript?

In JavaScript, the `new` keyword is used to create an instance of an object from a constructor function. When you use `new`, it tells JavaScript to make a new object based on the blueprint provided by the constructor function. Here's a simple example:

```javascript
// Constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Creating a new instance using the `new` keyword
var person1 = new Person("John", 30);
```

In this example, `Person` is the constructor function, and `person1` is a new object created using the `new` keyword, with the name "John" and age 30.

::: tip
- The `new` keyword is used to create an instance of an object from a constructor function.
- It tells JavaScript to make a new object based on the blueprint provided by the constructor function.
:::

## 4. What is a prototype chain in JavaScript?

In JavaScript, the prototype chain is a way objects inherit properties and methods from other objects. When you access a property or method of an object, JavaScript first checks if that object has it. If not, it looks at the object's prototype, and if it's not there, it keeps going up the chain until it finds it or reaches the end. This chain allows for a sort of "inheritance" where objects can share behaviors and properties. Here's a simple example:

```javascript
// Define a parent object
let parent = {
  greet: function() {
    console.log("Hello!");
  }
};

// Create a child object with its prototype set to parent
let child = Object.create(parent);

// Now, child can access the greet method from its prototype
child.greet(); // Output: Hello!
```

In this code, `child` object doesn't have its own `greet` method, but it inherits it from its prototype (`parent`), which is in the prototype chain.

::: tip
- The prototype chain in JavaScript is a mechanism through which objects inherit properties and methods from other objects.
- When accessing a property or method of an object, JavaScript checks if it exists on that object. If not, it looks up the chain at the object's prototype.
- If the property or method is still not found, JavaScript continues up the chain until it either finds it or reaches the end.
- This chain allows for a form of "inheritance" where objects can share behaviors and properties.
:::

## 5. What is the difference between `prototype` and `__proto__` in JavaScript?

In simple terms, `prototype` and `__proto__` are related but different concepts in JavaScript. `prototype` is like a blueprint for creating objects in JavaScript. When you create an object using a constructor function, the `prototype` property of that function defines what properties and methods the objects created from it will have. On the other hand, `__proto__` is a hidden property that exists on every JavaScript object, which points to the prototype of the object. It's like a link that connects an object to its prototype, allowing it to inherit properties and methods defined in the prototype. So, while `prototype` is used to define properties and methods for objects, `__proto__` is used to access the prototype of an already created object.

::: tip
- `prototype` is a property of constructor functions that defines what properties and methods objects created from it will have.
- `__proto__` is a hidden property that exists on every JavaScript object, pointing to its prototype.
:::

## 6. What is the `Object.getPrototypeOf()` method in JavaScript?

In JavaScript, the `Object.getPrototypeOf()` method is used to get the prototype of an object. A prototype is like a blueprint that defines properties and methods that other objects can inherit. This method helps you find out what object another object inherits from. Here's a simple example:

```javascript
// Define a sample object
const person = {
  name: 'John',
  age: 30
};

// Get the prototype of the person object
const prototypeOfPerson = Object.getPrototypeOf(person);

// Log the prototype
console.log(prototypeOfPerson); // Output: {}
```

In this code, `Object.getPrototypeOf(person)` returns an empty object `{}`, because `person` object doesn't have any explicit prototype defined.

::: tip
- The `Object.getPrototypeOf()` method in JavaScript is used to get the prototype of an object.
:::

## 7. What is the `Object.setPrototypeOf()` method in JavaScript?

The `Object.setPrototypeOf()` method in JavaScript is used to set the prototype (i.e., the internal prototype property) of a specified object to another object or null. This method allows you to change the prototype of an existing object, which can be useful for modifying the behavior of the object or creating inheritance relationships. Here's a simple example of how to use `Object.setPrototypeOf()`:

```javascript
// Creating objects
let animal = {
  makeSound() {
    console.log('Some generic sound');
  }
};

let dog = {
  bark() {
    console.log('Woof! Woof!');
  }
};

// Setting prototype
Object.setPrototypeOf(dog, animal);

// Now 'dog' inherits from 'animal'
dog.makeSound(); // Outputs: Some generic sound
dog.bark(); // Outputs: Woof! Woof!
```

In this code, `Object.setPrototypeOf(dog, animal)` sets the prototype of the `dog` object to `animal`, allowing `dog` to inherit the `makeSound()` method from `animal`.

::: tip
- The `Object.setPrototypeOf()` method in JavaScript is used to set the prototype of a specified object to another object or null.
:::

## 8. What are the different ways to access properties in JavaScript objects?

In JavaScript, you can access properties in objects in different ways. One way is by using dot notation, where you write the object's name followed by a dot and then the property name. For example:
```javascript
let person = {
  name: "John",
  age: 30
};
console.log(person.name); // Outputs: John
```
Another way is by using square brackets and putting the property name inside them. This is called bracket notation. For example:
```javascript
let person = {
  name: "John",
  age: 30
};
console.log(person['age']); // Outputs: 30
```
Both ways achieve the same result, but bracket notation is useful when the property name contains special characters or when the property name is dynamic and stored in a variable.

::: tip
- You can access properties in JavaScript objects using dot notation or bracket notation.
- Dot notation involves writing the object's name followed by a dot and then the property name.
- Bracket notation involves using square brackets and putting the property name inside them.
- Bracket notation is useful for special characters in property names or when the property name is dynamic.
:::

## 9. How do you add or update a property in a JavaScript object?

To add or update a property in a JavaScript object, you can simply use dot notation or square brackets. Dot notation involves specifying the object name followed by a dot and then the property name, while square brackets involve enclosing the property name within square brackets after the object name. Here's a small code sample demonstrating both methods:

```javascript
// Creating an empty object
let myObject = {};

// Adding or updating a property using dot notation
myObject.property1 = "value1";

// Adding or updating a property using square brackets
myObject['property2'] = "value2";
```

In this code, `myObject` is the object we're modifying. We add a property named `property1` with the value `"value1"` using dot notation, and another property named `property2` with the value `"value2"` using square brackets. If the property already exists, its value will be updated; otherwise, a new property will be added.

::: tip
- To add or update a property in a JavaScript object, use dot notation or square brackets.
:::

## 10. How do you remove a property from a JavaScript object?

To remove a property from a JavaScript object, you can use the `delete` keyword followed by the name of the property you want to remove. Here's a simple example:

```javascript
let myObject = {
  name: "John",
  age: 30,
  city: "New York"
};

delete myObject.age;
```

In this example, `delete myObject.age;` removes the `age` property from the `myObject` object. After executing this line of code, the `myObject` object will no longer have the `age` property.

::: tip
- To remove a property from a JavaScript object, use the `delete` keyword followed by the property name.
:::

## 11. How do you check if a property exists in a JavaScript object?

In JavaScript, you can check if a property exists in an object by using the `hasOwnProperty` method. This method tells you if the object has a specific property or not. Here's a simple example:

```javascript
const myObject = {
  name: 'John',
  age: 30,
  city: 'New York'
};

if (myObject.hasOwnProperty('name')) {
  console.log('The property "name" exists in the object.');
} else {
  console.log('The property "name" does not exist in the object.');
}
```

In this code, we have an object called `myObject` with properties like `name`, `age`, and `city`. We use the `hasOwnProperty` method to check if `name` property exists in `myObject`. If it exists, it prints a message saying it exists; otherwise, it prints a message saying it does not exist.

::: tip
- To check if a property exists in a JavaScript object, use the `hasOwnProperty` method.
:::

## 12. What is object destructuring in JavaScript?

Object destructuring in JavaScript is a convenient way to extract multiple properties from an object and assign them to variables. It allows you to access and use specific properties of an object without having to reference the object itself multiple times. For example, if we have an object called `person` with properties `name` and `age`, we can use object destructuring to create variables `name` and `age` that directly hold the values of the corresponding properties:

```javascript
const person = {
  name: 'John',
  age: 30
};

// Object destructuring
const { name, age } = person;

console.log(name); // Output: John
console.log(age);  // Output: 30
```

This way, we can access `name` and `age` variables directly instead of referencing `person.name` and `person.age` every time.

::: tip
- Object destructuring in JavaScript allows you to extract multiple properties from an object and assign them to variables.
- It provides a convenient way to access and use specific properties of an object without referencing the object itself multiple times.
:::

## 13. How do you clone an object in JavaScript?

In JavaScript, you can clone an object using various methods. One of the simplest ways is by using the spread syntax (`...`). This syntax allows you to create a shallow copy of an object. Here's a small sample code demonstrating how to do it:

```javascript
const originalObject = { name: 'John', age: 30 };
const clonedObject = { ...originalObject };

console.log(clonedObject); // Output: { name: 'John', age: 30 }
```

In this code, `originalObject` is cloned into `clonedObject` using the spread syntax. Now, `clonedObject` holds the same key-value pairs as `originalObject`. Remember, this method creates a shallow copy, meaning if the object contains nested objects, they will be copied by reference, not cloned recursively.

::: tip
- To clone an object in JavaScript, you can use the spread syntax (`...`) to create a shallow copy.
- This method creates a new object with the same key-value pairs as the original object.
:::

## 14. What is the difference between `Object.keys()`, `Object.values()`, and `Object.entries()`?

`Object.keys()`, `Object.values()`, and `Object.entries()` are JavaScript methods used to work with objects in different ways. `Object.keys()` returns an array containing the keys of an object. For example:

```javascript
const myObject = { a: 1, b: 2, c: 3 };
const keysArray = Object.keys(myObject);
console.log(keysArray); // Output: ['a', 'b', 'c']
```

`Object.values()` returns an array containing the values of an object. For example:

```javascript
const myObject = { a: 1, b: 2, c: 3 };
const valuesArray = Object.values(myObject);
console.log(valuesArray); // Output: [1, 2, 3]
```

`Object.entries()` returns an array containing arrays of key-value pairs of an object. For example:

```javascript
const myObject = { a: 1, b: 2, c: 3 };
const entriesArray = Object.entries(myObject);
console.log(entriesArray); // Output: [['a', 1], ['b', 2], ['c', 3]]
```

In summary, `Object.keys()` gives you just the keys, `Object.values()` gives you just the values, and `Object.entries()` gives you key-value pairs as arrays.

::: tip
- `Object.keys()` returns an array containing the keys of an object.
- `Object.values()` returns an array containing the values of an object.
- `Object.entries()` returns an array containing arrays of key-value pairs of an object.
:::

## 15. What is the `Object.assign()` method in JavaScript?

The `Object.assign()` method in JavaScript is used to copy the values of all enumerable own properties from one or more source objects to a target object. It merges the properties from the source objects into the target object. If the target object already has a property with the same name, it will be overwritten. Here's a simple example:

```javascript
// Creating source objects
const source1 = { a: 1, b: 2 };
const source2 = { b: 3, c: 4 };

// Creating an empty target object
const target = {};

// Using Object.assign() to merge properties from source1 and source2 into target
Object.assign(target, source1, source2);

console.log(target); // Output: { a: 1, b: 3, c: 4 }
```

In this example, `source1` and `source2` are merged into `target`, and the properties from `source2` overwrite the properties with the same name in `source1`.

::: tip
- The `Object.assign()` method in JavaScript is used to copy the values of all enumerable own properties from one or more source objects to a target object.
- It merges the properties from the source objects into the target object.
- If the target object already has a property with the same name, it will be overwritten.
:::

## 16. What is the `Object.freeze()` method in JavaScript?

The `Object.freeze()` method in JavaScript is used to make an object immutable, meaning its properties cannot be changed or added after it's frozen. Once an object is frozen, you can't modify its properties, and you can't add new properties to it. This is helpful when you want to ensure that an object's state remains unchanged throughout your program. Here's a small example:

```javascript
const obj = {
  property1: 10,
  property2: 'hello'
};

Object.freeze(obj); // Freeze the object

// Trying to modify the property or add new property
obj.property1 = 20;
obj.property3 = true;

console.log(obj); // Output: { property1: 10, property2: 'hello' }
```

In this example, even though we try to change the value of `property1` and add a new `property3`, the `Object.freeze()` method prevents these changes, and the object remains unchanged.

::: tip
- The `Object.freeze()` method in JavaScript is used to make an object immutable.
- Once an object is frozen, you can't modify its properties or add new properties to it.
- This is useful when you want to ensure that an object's state remains unchanged throughout your program.
:::

## 17. What is the `Object.seal()` method in JavaScript?

The `Object.seal()` method in JavaScript is used to prevent new properties from being added to an object and prevents existing properties from being removed. However, you can still modify the values of existing properties. Once an object is sealed, you cannot add or remove properties, but you can still change the values of existing properties. Here's a simple example:

```javascript
// Creating an object
let person = {
  name: 'John',
  age: 30
};

// Sealing the object
Object.seal(person);

// Trying to add a new property
person.gender = 'male'; // This will not add the property

// Trying to delete an existing property
delete person.age; // This will not delete the property

// Modifying existing property
person.age = 35; // This is allowed

console.log(person); // Output: { name: 'John', age: 35 }
```

In this example, `Object.seal(person)` seals the `person` object, preventing new properties from being added or existing properties from being removed. However, you can still modify the values of existing properties.

::: tip
- The `Object.seal()` method in JavaScript is used to prevent new properties from being added to an object and prevents existing properties from being removed.
- Once an object is sealed, you cannot add or remove properties, but you can still change the values of existing properties.
:::

## 18. How to prevent object extension in JavaScript?

To prevent object extension in JavaScript, you can use `Object.preventExtensions()` method. This method prevents new properties from being added to an object, but allows the modification of existing properties. Here's a simple example:

```javascript
let obj = { a: 1, b: 2 };

// Prevent extension
Object.preventExtensions(obj);

// Trying to add a new property
obj.c = 3;

console.log(obj); // Output: { a: 1, b: 2 }
```

In this example, `Object.preventExtensions(obj)` prevents adding new properties to the `obj` object. So, when we try to add a new property `c`, it won't be added to the object.

::: tip
- To prevent object extension in JavaScript, use the `Object.preventExtensions()` method.
- This method prevents new properties from being added to an object, but allows the modification of existing properties.
:::

## 19. What is the difference between `Object.preventExtensions()`, `Object.seal()`, and `Object.freeze()` in JavaScript?

In JavaScript, `Object.preventExtensions()`, `Object.seal()`, and `Object.freeze()` are used to control the mutability of objects.

- `Object.preventExtensions()`: This method prevents new properties from being added to an object. However, existing properties can still be modified or deleted.

```javascript
let obj = { a: 1, b: 2 };
Object.preventExtensions(obj);
obj.c = 3; // Error: Cannot add property 'c', object is not extensible
obj.a = 5; // Allowed: Existing properties can still be modified
```

- `Object.seal()`: This method seals an object, preventing new properties from being added and marking all existing properties as non-configurable. This means that existing properties cannot be deleted or have their attributes changed.

```javascript
let obj = { a: 1, b: 2 };
Object.seal(obj);
delete obj.a; // Error: Cannot delete property 'a' of sealed object
obj.b = 3; // Allowed: Existing properties can still be modified
```

- `Object.freeze()`: This method freezes an object, making it immutable. It does everything that `Object.seal()` does, plus it prevents the values of existing properties from being changed.

```javascript
let obj = { a: 1, b: 2 };
Object.freeze(obj);
obj.a = 5; // Error: Cannot assign to read only property 'a' of object
```

In summary, `Object.preventExtensions()` allows adding or deleting properties but not extending the object, `Object.seal()` prevents adding or deleting properties but allows modifying existing ones, and `Object.freeze()` makes the object completely immutable by preventing any changes to existing properties.

::: tip
- `Object.preventExtensions()`: Prevents new properties from being added to an object.
- `Object.seal()`: Prevents new properties from being added and marks all existing properties as non-configurable.
- `Object.freeze()`: Freezes an object, making it completely immutable.
:::

## 20. How to determine if the object is frozen in JavaScript?

In JavaScript, you can check if an object is frozen using the `Object.isFrozen()` method. This method returns `true` if the object is frozen, meaning its properties cannot be added, deleted, or modified. Here's a simple example:

```javascript
const obj = {
  prop1: 'value1',
  prop2: 'value2'
};

// Freeze the object
Object.freeze(obj);

// Check if the object is frozen
if (Object.isFrozen(obj)) {
  console.log('The object is frozen.');
} else {
  console.log('The object is not frozen.');
}
```

In this example, `Object.freeze(obj)` is used to freeze the `obj` object, and then `Object.isFrozen(obj)` is used to check if it's frozen. If it's frozen, it prints 'The object is frozen.' Otherwise, it prints 'The object is not frozen.'

::: tip
- To determine if an object is frozen in JavaScript, use the `Object.isFrozen()` method.
:::

## 21. How to determine if the object is sealed in JavaScript?

In JavaScript, you can check if an object is sealed using the `Object.isSealed()` method. When an object is sealed, it means that you cannot add or remove properties from it, but you can still modify the existing properties. Here's a simple code sample to determine if an object is sealed:

```javascript
// Create an object
let myObject = {name: "John", age: 30};

// Seal the object
Object.seal(myObject);

// Check if the object is sealed
if (Object.isSealed(myObject)) {
    console.log("The object is sealed.");
} else {
    console.log("The object is not sealed.");
}
```

In this example, `Object.seal()` seals the `myObject` by preventing any new properties from being added or existing ones from being removed. Then, `Object.isSealed()` is used to check if the object is sealed or not. If it returns `true`, it means the object is sealed, otherwise, it's not.

::: tip
- To determine if an object is sealed in JavaScript, use the `Object.isSealed()` method.
:::

## 22. How to determine if the object is extensible in JavaScript?

In JavaScript, you can check if an object is extensible using the `Object.isExtensible()` method. This method returns `true` if the object is extensible, meaning new properties can be added to it. Otherwise, it returns `false`. Here's a simple example:

```javascript
const obj = {}; // Creating an empty object

// Checking if the object is extensible
const isExtensible = Object.isExtensible(obj);

console.log(isExtensible); // Output will be true
```

In this example, `isExtensible` will be `true` because `obj` is an empty object and by default, all objects in JavaScript are extensible unless made non-extensible using `Object.preventExtensions()` method.

::: tip
- To determine if an object is extensible in JavaScript, use the `Object.isExtensible()` method.
:::

## 23. What are the differences between immutable and mutable objects in JavaScript?

In JavaScript, objects can be classified as either mutable or immutable based on whether their properties can be changed after creation. Mutable objects are those whose properties can be modified, added, or removed after they are created. Examples of mutable objects in JavaScript include arrays and objects. On the other hand, immutable objects are those whose properties cannot be changed once they are set. Examples of immutable objects in JavaScript include strings, numbers, and booleans. Immutable objects are useful for ensuring data integrity and preventing unintended changes to data.

::: tip
- Mutable objects in JavaScript are those whose properties can be modified, added, or removed after they are created.
- Immutable objects in JavaScript are those whose properties cannot be changed once they are set.
:::

## 24. What is the `Object.defineProperty()` method in JavaScript?

The `Object.defineProperty()` method in JavaScript is used to define a new property directly on an object or modify an existing one. It allows you to specify attributes such as whether the property is writable, enumerable, or configurable. This method gives you fine-grained control over how properties behave in JavaScript objects. Here's a simple example:

```javascript
const obj = {};

// Define a new property 'name' with value 'John'
Object.defineProperty(obj, 'name', {
  value: 'John',
  writable: true, // Property can be changed
  enumerable: true, // Property will be included during enumeration
  configurable: true // Property can be deleted or its attributes can be changed
});

console.log(obj.name); // Output: John
```

In this code, we use `Object.defineProperty()` to define a new property `name` on the `obj` object with the value `'John'` and specify that it can be changed, enumerated, and configured.

::: tip
- The `Object.defineProperty()` method in JavaScript is used to define a new property directly on an object or modify an existing one.
- It allows you to specify attributes such as whether the property is writable, enumerable, or configurable.
- `writable`: Property can be changed.
- `enumerable`: Property will be included during enumeration.
- `configurable`: Property can be deleted or its attributes can be changed.
:::

## 25. What are the differences between `writable`, `enumerable` and `configurable` in an object property?

In JavaScript, objects have properties that can be defined with different characteristics. Writable determines if the value of a property can be changed or not. If writable is set to false, you can't change the value later on. Enumerable decides if a property shows up during a loop through the object's properties. If enumerable is set to false, the property won't show up in a for...in loop. Configurable determines if a property's characteristics can be changed later. If configurable is false, you can't change the property's configurable, enumerable, or writable settings. So, writable controls if you can change the value, enumerable controls if you can see it in a loop, and configurable controls if you can change its characteristics later on.

::: tip
- `writable`: Determines if the value of a property can be changed.
- `enumerable`: Decides if a property shows up during a loop through the object's properties.
- `configurable`: Determines if a property's characteristics can be changed later.
- If `writable` is set to false, you can't change the value later on.
- If `enumerable` is set to false, the property won't show up in a for...in loop.
- If `configurable` is false, you can't change the property's configurable, enumerable, or writable settings.
:::

## 26. What is the `Object.getOwnPropertyDescriptor()` method in JavaScript?

The `Object.getOwnPropertyDescriptor()` method in JavaScript is used to get the descriptor of a property defined on an object. A descriptor is an object that contains information about the property, such as whether it is writable, enumerable, configurable, and its value. This method takes two parameters: the object from which to retrieve the property descriptor and the name of the property. It returns the property descriptor as an object if the property exists on the object, otherwise, it returns `undefined`. Here's a simple example:

```javascript
const obj = {
  name: 'John',
  age: 30
};

const descriptor = Object.getOwnPropertyDescriptor(obj, 'name');
console.log(descriptor);
```

This code will output the descriptor of the `name` property of the `obj` object, which might include information like `{ value: 'John', writable: true, enumerable: true, configurable: true }`.

::: tip
- The `Object.getOwnPropertyDescriptor()` method in JavaScript is used to get the descriptor of a property defined on an object.
- A descriptor is an object that contains information about the property, such as whether it is writable, enumerable, configurable, and its value.
:::

## 27. What is the `Object.getOwnPropertyNames()` method in JavaScript?

The `Object.getOwnPropertyNames()` method in JavaScript is used to get an array of all properties (including non-enumerable properties) found directly upon a given object. It returns an array of strings containing the names of the object's own properties. This method does not traverse the prototype chain, meaning it only returns the properties directly defined on the object itself, not those inherited from its prototype. Here's a simple example demonstrating its usage:

```javascript
const person = {
  name: 'John',
  age: 30
};

const propertyNames = Object.getOwnPropertyNames(person);
console.log(propertyNames); // Output: ['name', 'age']
```

In this code, `Object.getOwnPropertyNames(person)` returns an array `['name', 'age']`, which are the properties directly defined on the `person` object.

::: tip
- The `Object.getOwnPropertyNames()` method in JavaScript is used to get an array of all properties (including non-enumerable properties) found directly upon a given object.
- It returns an array of strings containing the names of the object's own properties.
:::

## 28. How to merge two objects in JavaScript?

In JavaScript, you can merge two objects using various methods. One simple way is by using the spread operator (...) or the Object.assign() method. Here's a small code sample demonstrating both methods:

```javascript
// Method 1: Using Spread Operator
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const mergedObj1 = { ...obj1, ...obj2 };
console.log(mergedObj1); // Output: { a: 1, b: 3, c: 4 }

// Method 2: Using Object.assign()
const obj3 = { a: 1, b: 2 };
const obj4 = { b: 3, c: 4 };
const mergedObj2 = Object.assign({}, obj3, obj4);
console.log(mergedObj2); // Output: { a: 1, b: 3, c: 4 }
```

Both methods achieve the same result, combining properties from both objects into a new object. The spread operator expands the properties of the objects, while Object.assign() copies properties from one or more source objects to a target object.

::: tip
- To merge two objects in JavaScript, you can use the spread operator (...) or the Object.assign() method.
- The spread operator expands the properties of the objects, while Object.assign() copies properties from one or more source objects to a target object.
- Both methods create a new object with properties from both objects.
:::

## 29. What is JSON?

JSON (JavaScript Object Notation) is a lightweight data-interchange format that is easy for humans to read and write and easy for machines to parse and generate. It is based on a subset of the JavaScript programming language and is commonly used to transmit data between a server and web application as an alternative to XML. JSON data is represented as key-value pairs, similar to JavaScript objects, and can include arrays, strings, numbers, booleans, and null values. Here's an example of JSON data:

```json
{
  "name": "John Doe",
  "age": 30,
  "isStudent": false,
  "courses": ["Math", "Science"],
  "address": {
    "street": "123 Main St",
    "city": "Anytown"
  }
}
```

JSON is widely used in web development for APIs, configuration files, and data storage due to its simplicity and compatibility with many programming languages.

::: tip
- JSON (JavaScript Object Notation) is a lightweight data-interchange format.
- It is easy for humans to read and write and easy for machines to parse and generate.
- JSON data is represented as key-value pairs, similar to JavaScript objects, and can include arrays, strings, numbers, booleans, and null values.
- JSON is widely used in web development for APIs, configuration files, and data storage.
:::

## 30. How do you convert a JSON string to a JavaScript object?

To convert a JSON string to a JavaScript object, you can use the built-in `JSON.parse()` method. This method takes the JSON string as input and returns a JavaScript object. Here's a simple example:

```javascript
// Sample JSON string
var jsonString = '{"name": "John", "age": 30, "city": "New York"}';

// Convert JSON string to JavaScript object
var jsonObject = JSON.parse(jsonString);

// Now, jsonObject holds the converted JavaScript object
console.log(jsonObject);
```

In this example, `jsonString` holds a JSON string representing an object with properties like name, age, and city. By using `JSON.parse(jsonString)`, we convert it into a JavaScript object stored in the variable `jsonObject`, which we can then use like any other JavaScript object.

::: tip
- To convert a JSON string to a JavaScript object, use the `JSON.parse()` method.
- This method takes the JSON string as input and returns a JavaScript object.
:::

## 31. How do you convert a JavaScript object to a JSON string?

To convert a JavaScript object into a JSON string, you can use the `JSON.stringify()` method. Here's a simple example:

```javascript
const myObject = { 
  name: "John", 
  age: 30, 
  city: "New York" 
};

const jsonString = JSON.stringify(myObject);
```

In this code, `myObject` is a JavaScript object with some properties like `name`, `age`, and `city`. By calling `JSON.stringify(myObject)`, we convert this object into a JSON string, which can then be easily shared or stored. So, `jsonString` will contain the JSON representation of `myObject`.

::: tip
- To convert a JavaScript object to a JSON string, use the `JSON.stringify()` method.
- This method takes the JavaScript object as input and returns a JSON string.
:::

## 32. What are the differences between objects and JSON in JavaScript?

In JavaScript, objects and JSON (JavaScript Object Notation) share similarities but have key differences. Objects are a fundamental data type used to store and organize data in JavaScript. They consist of key-value pairs where keys are strings and values can be any data type, including other objects or functions. On the other hand, JSON is a data interchange format that stands for JavaScript Object Notation. JSON syntax is a subset of JavaScript object literal notation but with some limitations, like requiring keys to be in double quotes and not allowing functions as values. JSON is mainly used for data interchange between systems. Here's a small sample code demonstrating the difference:

```javascript
// Object
let person = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    country: "USA"
  }
};

// JSON
let personJSON = '{"name": "John", "age": 30, "address": {"city": "New York", "country": "USA"}}';

// Converting Object to JSON
let personConvertedToJSON = JSON.stringify(person);

// Converting JSON to Object
let personParsedFromJSON = JSON.parse(personJSON);
```

In the code above, `person` is a JavaScript object, while `personJSON` is a JSON string. The `JSON.stringify()` function converts a JavaScript object to a JSON string, while `JSON.parse()` converts a JSON string to a JavaScript object.

::: tip
- Objects are a fundamental data type used to store and organize data in JavaScript.
- JSON is a data interchange format that stands for JavaScript Object Notation.
- Objects can have functions as values, while JSON does not allow functions.
- JSON is mainly used for data interchange between systems.
:::

## 33. How to compare two objects in JavaScript?

In JavaScript, you can compare two objects using the `JSON.stringify()` method. This method converts a JavaScript object into a JSON string, which can then be compared easily. Here's a simple example:

```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 2, a: 1 };

if (JSON.stringify(obj1) === JSON.stringify(obj2)) {
    console.log("The objects are equal.");
} else {
    console.log("The objects are not equal.");
}
```

In this code, `obj1` and `obj2` are two objects with the same key-value pairs but in different orders. By stringifying them and then comparing the resulting strings, you can determine if they are equal. If the objects are deeply nested or contain functions, this method may not work as expected, and you might need to use more advanced techniques like recursion or libraries like lodash's `isEqual` function.

::: tip
- To compare two objects in JavaScript, you can use the `JSON.stringify()` method to convert them into JSON strings and then compare the strings.
- This method works well for simple objects but may not work as expected for deeply nested objects or objects containing functions.
:::

## 34. How to check if an object is empty in JavaScript?

To check if an object is empty in JavaScript, you can use the `Object.keys()` method to get an array of all the keys in the object. Then, you can check if the length of this array is zero. If it's zero, it means the object has no properties and is empty. Here's a simple code snippet to demonstrate this:

```javascript
function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

// Example usage:
const emptyObject = {};
const nonEmptyObject = { a: 1, b: 2 };

console.log(isEmpty(emptyObject)); // Output: true
console.log(isEmpty(nonEmptyObject)); // Output: false
```

In this code, the `isEmpty()` function takes an object (`obj`) as an argument and returns `true` if the object is empty (i.e., it has no properties), and `false` otherwise.

::: tip
- To check if an object is empty in JavaScript, use the `Object.keys()` method to get an array of all the keys in the object and check if the length of this array is zero.
:::

## 35. Why two similar objects are not equal in JavaScript?

In JavaScript, two objects may look similar, but they are not equal by default because they are stored in different memory locations. When you compare two objects using the equality operator (`==` or `===`), JavaScript checks if they refer to the same memory location, not if their properties/values are the same. To illustrate, consider two objects `obj1` and `obj2` with the same properties and values:

```javascript
let obj1 = { name: "John", age: 30 };
let obj2 = { name: "John", age: 30 };

console.log(obj1 === obj2); // Output: false
```

Even though `obj1` and `obj2` have identical properties and values, they are stored in different memory locations, so JavaScript considers them unequal when compared directly. To check if their properties and values are the same, you would need to compare each property individually.

::: tip
- In JavaScript, two objects are not equal by default because they are stored in different memory locations.
- When comparing objects, JavaScript checks if they refer to the same memory location, not if their properties/values are the same.
- To check if two objects have the same properties and values, you need to compare each property individually.
:::

## 36. What are the differences between shallow copy and deep copy of objects in JavaScript?

In JavaScript, when you make a shallow copy of an object, you're basically creating a new object that has the same properties as the original object. However, if those properties are objects themselves, they still point to the same memory locations as the original object's properties. This means if you change a nested object in the copy, it will also affect the original object. On the other hand, a deep copy creates a completely new object with copies of all nested objects. So, changes made to nested objects in the copied object won't affect the original object. Here's a simple example in JavaScript:

```javascript
// Original object
const original = {
  name: 'John',
  age: 30,
  address: {
    city: 'New York',
    country: 'USA'
  }
};

// Shallow copy
const shallowCopy = Object.assign({}, original);

// Deep copy using JSON
const deepCopy = JSON.parse(JSON.stringify(original));

// Modifying the shallow copy
shallowCopy.name = 'Jane';
shallowCopy.address.city = 'San Francisco';

console.log(original);   // Original object remains unchanged
console.log(shallowCopy); // Shallow copy reflects changes made
console.log(deepCopy);    // Deep copy remains unchanged
```

In this example, modifying the `shallowCopy` affects the `original` object, whereas modifying the `deepCopy` doesn't.

::: tip
- A shallow copy of an object creates a new object with the same properties as the original object, but nested objects still point to the same memory locations.
- A deep copy creates a completely new object with copies of all nested objects, so changes to nested objects in the copied object won't affect the original object.
- You can create a shallow copy using `Object.assign()` and a deep copy using `JSON.parse(JSON.stringify())`.
:::

## 37. What is spread operator in JavaScript?

The spread operator in JavaScript is a handy tool for manipulating arrays and objects. It's represented by three dots (...). When used with arrays, it allows you to spread out elements of an array. For example:

```javascript
const array1 = [1, 2, 3];
const array2 = [...array1, 4, 5, 6];
console.log(array2); // Output: [1, 2, 3, 4, 5, 6]
```

Here, the spread operator `...array1` spreads out the elements of `array1` into `array2`. Similarly, when used with objects, it spreads out the properties of an object. For instance:

```javascript
const obj1 = { foo: 'bar', x: 42 };
const obj2 = { ...obj1, y: 17 };
console.log(obj2); // Output: { foo: 'bar', x: 42, y: 17 }
```

In this case, `...obj1` spreads out the properties of `obj1` into `obj2`, and then we add another property `y: 17`. The spread operator is a versatile feature in JavaScript, commonly used in various scenarios for copying, merging, or manipulating arrays and objects easily.

::: tip
- The spread operator in JavaScript is represented by three dots (...).
- When used with arrays, it allows you to spread out elements of an array.
- When used with objects, it spreads out the properties of an object.
- The spread operator is a versatile feature used for copying, merging, or manipulating arrays and objects easily.
:::

## 38. What are getter and setter methods in JavaScript?

Getter and setter methods are functions in JavaScript that are used to access and modify the properties of an object respectively. Getter methods are used to retrieve the value of a property, while setter methods are used to modify the value of a property. They provide a way to control how properties are accessed and updated within an object. Here's a simple example in JavaScript:

```javascript
// Creating an object with getter and setter methods
const person = {
  firstName: 'John',
  lastName: 'Doe',
  
  // Getter method to retrieve the full name
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  // Setter method to set the full name
  set fullName(name) {
    const [firstName, lastName] = name.split(' ');
    this.firstName = firstName;
    this.lastName = lastName;
  }
};

// Getting the full name using the getter method
console.log(person.fullName); // Output: John Doe

// Setting the full name using the setter method
person.fullName = 'Jane Smith';

// Getting the updated full name
console.log(person.fullName); // Output: Jane Smith
``` 

In this example, `fullName` is both a getter and a setter method. When you access `person.fullName`, the getter method is automatically invoked to retrieve the full name. Similarly, when you assign a value to `person.fullName`, the setter method is invoked to update the `firstName` and `lastName` properties accordingly.

::: tip
- Getter methods are used to retrieve the value of a property, while setter methods are used to modify the value of a property.
- They provide a way to control how properties are accessed and updated within an object.
- Getter methods are defined using the `get` keyword, and setter methods are defined using the `set` keyword.
:::

## 39. How to add getter and setter methods by using Object.defineProperty() in JavaScript?

In JavaScript, you can use `Object.defineProperty()` to add getter and setter methods to objects. Getter methods retrieve the value of a property, while setter methods set the value of a property. Here's a simple example:

```javascript
// Define an object
let person = {};

// Add properties with getter and setter using Object.defineProperty()
Object.defineProperty(person, 'age', {
    get: function() {
        return this._age; // Getter method
    },
    set: function(newAge) {
        if (newAge > 0 && newAge < 150) { // Ensure age is reasonable
            this._age = newAge; // Setter method
        } else {
            console.log("Invalid age");
        }
    }
});

// Usage
person.age = 30; // Setting age
console.log(person.age); // Getting age
```

In this example, we define a `person` object and add an `age` property with a getter and a setter. The getter retrieves the value of `_age`, and the setter sets the value of `_age` after checking if it's within a valid range. We access the `age` property as if it were a regular property, but behind the scenes, the getter and setter methods are called.

::: tip
- You can add getter and setter methods to objects using `Object.defineProperty()`.
- Getter methods retrieve the value of a property, while setter methods set the value of a property.
- Getter methods are defined using the `get` keyword, and setter methods are defined using the `set` keyword.
:::

## 40. What is Proxy in JavaScript?

In JavaScript, a Proxy is an object that lets you intercept and customize operations performed on another object, such as reading properties, setting properties, function invocation, etc. It allows you to define custom behavior for fundamental operations. Here's a simple example:

```javascript
// Creating a target object
let target = {
  name: "John",
  age: 30
};

// Creating a Proxy for the target object
let handler = {
  // Intercepting property access
  get: function(target, prop) {
    console.log(`Getting ${prop}`);
    return target[prop];
  },

  // Intercepting property assignment
  set: function(target, prop, value) {
    console.log(`Setting ${prop} to ${value}`);
    target[prop] = value;
  }
};

let proxy = new Proxy(target, handler);

// Accessing properties through the proxy
proxy.name; // Output: "Getting name"
proxy.age = 35; // Output: "Setting age to 35"
```

In this example, the Proxy intercepts property access and assignment operations on the `target` object, logging messages to the console before performing these operations.

::: tip
- A Proxy in JavaScript is an object that lets you intercept and customize operations performed on another object.
- It allows you to define custom behavior for fundamental operations like reading properties, setting properties, function invocation, etc.
:::

## 41. What are wrapper objects in JavaScript?

Wrapper objects in JavaScript are objects that temporarily wrap primitive data types (like strings, numbers, and booleans) to provide additional functionality through their associated methods and properties. They allow you to access and manipulate primitive values as if they were objects. For example, when you call a method or access a property on a primitive value, JavaScript automatically wraps that value with a corresponding wrapper object, allowing you to perform operations on it. Here's a simple example demonstrating how a wrapper object works:

```javascript
let num = 42; // Primitive number
num.toFixed(2); // Accessing method toFixed() on primitive number
```

In the above code, `toFixed()` is a method available for numbers, but `num` is a primitive number. JavaScript automatically converts `num` into a temporary wrapper object to execute the `toFixed()` method.

::: tip
- Wrapper objects in JavaScript are objects that temporarily wrap primitive data types to provide additional functionality through their associated methods and properties.
- They allow you to access and manipulate primitive values as if they were objects.
:::

## 42. How do you iterate over the properties of a JavaScript object?

To iterate over the properties of a JavaScript object, you can use a for...in loop. This loop allows you to loop through all the enumerable properties of an object. Here's a simple example:

```javascript
const myObject = {
  name: 'John',
  age: 30,
  city: 'New York'
};

for (let key in myObject) {
  console.log(key + ': ' + myObject[key]);
}
```

In this code, we define an object `myObject` with three properties: `name`, `age`, and `city`. Then, we use a for...in loop to iterate over each property of `myObject`. Inside the loop, we access each property's key using `key`, and its corresponding value using `myObject[key]`, and print them out. This loop will print:
```
name: John
age: 30
city: New York
```

::: tip
- To iterate over the properties of a JavaScript object, use a for...in loop.
- This loop allows you to loop through all the enumerable properties of an object.
- Inside the loop, you can access the property key and value using the loop variable and object[key].
:::

## 43. What is an iterator in JavaScript?

In JavaScript, an iterator is like a tool that helps us go through each item in a collection, like an array or an object, one at a time. It keeps track of where we are in the collection so we can move to the next item when we're ready. We can use iterators with loops or special functions like `for...of` to easily access each item without having to worry about managing the index or keys manually. Here's a simple example of using an iterator with an array:

```javascript
const numbers = [1, 2, 3, 4, 5];
const iterator = numbers[Symbol.iterator]();

let result = iterator.next();
while (!result.done) {
  console.log(result.value); // Outputs each number in the array
  result = iterator.next();
}
```

In this code, `Symbol.iterator` is a special property that gets the iterator for the array `numbers`. We then use the iterator to go through each item in the array and print its value.

::: tip
- An iterator in JavaScript is like a tool that helps us go through each item in a collection, like an array or an object, one at a time.
- It keeps track of where we are in the collection so we can move to the next item when we're ready.
- We can use iterators with loops or special functions like `for...of` to easily access each item without having to manage the index or keys manually.
- The `Symbol.iterator` property gets the iterator for an object.
- The `next()` method of the iterator returns the next item in the collection.
- The `done` property of the iterator indicates when the iteration is complete.
:::

## 44. What is an iterable in JavaScript?

An iterable in JavaScript is an object that allows you to loop through its elements. It could be an array, a string, a set, or even custom objects with a special method called `[Symbol.iterator]`. This method returns an iterator object that has a `next()` function, which returns the next value in the sequence. When there are no more values to return, `next()` returns `{ done: true }`. Here's a simple example of how you can use an iterable:

```javascript
const myIterable = {
  [Symbol.iterator]: function* () {
    yield 1;
    yield 2;
    yield 3;
  }
};

const iterator = myIterable[Symbol.iterator]();
console.log(iterator.next()); // Output: { value: 1, done: false }
console.log(iterator.next()); // Output: { value: 2, done: false }
console.log(iterator.next()); // Output: { value: 3, done: false }
console.log(iterator.next()); // Output: { value: undefined, done: true }
```

::: tip
- An iterable in JavaScript is an object that allows you to loop through its elements.
- It could be an array, a string, a set, or even custom objects with a special method called `[Symbol.iterator]`.
- The `[Symbol.iterator]` method returns an iterator object that has a `next()` function to get the next value in the sequence.
- When there are no more values to return, `next()` returns `{ done: true }`.
:::

## 45. What is the difference between `for...in` and `for...of` in JavaScript?

In JavaScript, `for...in` and `for...of` are both used for looping, but they work differently.

`for...in` is used to loop over the enumerable properties of an object. It iterates over all enumerable properties of an object, including those inherited from its prototype chain. Here's a simple example:

```javascript
const obj = {a: 1, b: 2, c: 3};

for (let prop in obj) {
  console.log(prop); // Output: a, b, c
}
```

On the other hand, `for...of` is used to iterate over iterable objects like arrays, strings, maps, sets, etc. It iterates over the values of the object, rather than the keys. Here's an example:

```javascript
const arr = [1, 2, 3];

for (let value of arr) {
  console.log(value); // Output: 1, 2, 3
}
```

So, in simple terms, `for...in` loops through the keys of an object, while `for...of` loops through the values of an iterable object like an array.

::: tip
- `for...in` is used to loop over the enumerable properties of an object.
- `for...of` is used to iterate over iterable objects like arrays, strings, maps, sets, etc.
:::

## 46. How to make an object iterable in JavaScript?

To make an object iterable in JavaScript, you can implement the iterable protocol by defining a method called `[Symbol.iterator]()` on the object. This method should return an iterator object with a `next()` method that defines how to iterate over the object's elements. Here's a simple example demonstrating how to make an object iterable:

```javascript
const myObject = {
  data: [1, 2, 3, 4, 5],
  [Symbol.iterator]: function() {
    let index = 0;
    return {
      next: () => {
        return {
          value: this.data[index],
          done: index++ >= this.data.length
        };
      }
    };
  }
};

// Iterating over the object
for (const item of myObject) {
  console.log(item);
}
```

In this example, `myObject` is made iterable by defining a `[Symbol.iterator]` method which returns an iterator object. The iterator object has a `next()` method that returns the next element in the iteration sequence. The `done` property indicates whether the iteration is complete, and `value` holds the current value being iterated over.

::: tip
- To make an object iterable in JavaScript, define a method called `[Symbol.iterator]()` on the object.
- The `[Symbol.iterator]()` method should return an iterator object with a `next()` method that defines how to iterate over the object's elements.
:::

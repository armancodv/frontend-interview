# Components


## What are React Components?

React components are like building blocks for creating user interfaces in React. Think of them as reusable pieces of code that represent parts of a webpage or application. Each component can have its own functionality and appearance. For example, you might have a component for a button, another for a navigation bar, and so on. Here's a simple example of a React component that represents a basic button:

```jsx
export const Button = () => {
  return (
    <button>
      Click me
    </button>
  );
}
```

In this code, we define a `Button` component that simply renders a button element with the text `Click me`. This component can be used anywhere in our React application by simply importing it and including it in our JSX code.

::: tip
- React components are reusable building blocks for creating user interfaces.
- Each component represents a specific part of a webpage or application.
- Components can have their own functionality and appearance.
- Components can be easily reused across different parts of an application.
:::

## Are components in react reusable?

Yes, components in React are reusable. Think of them like building blocks you can use over and over again in different parts of your application. When you create a component, you're essentially making a custom piece of code that does a specific job. Once you've built it, you can use it wherever you need that functionality without having to rewrite the code each time. This saves time and makes your code easier to manage because you can just plug in the component wherever you need it instead of recreating it from scratch. So, yes, React components are indeed reusable!

::: tip
- React components are reusable.
- Components act like building blocks for your application.
- Once created, components can be used multiple times in different parts of the application.
:::

## What are the differences between function components and class components?

In React, function components and class components are two ways to create reusable parts of a user interface. The main difference between them is how you write them.

Function components are written as regular JavaScript functions that take in props and return React elements. They are simpler and more concise, making them easier to understand and write. Here's a simple example:

```jsx
export const FunctionComponent = () => {
  return <h1>Hello, I'm a function component!</h1>;
}
```

On the other hand, class-based components are defined using ES6 classes and must extend the `React.Component` class. They can be more complex and verbose compared to function components. Here's a basic example:

```jsx
class ClassComponent extends React.Component {
  render() {
    return <h1>Hello, I'm a class component!</h1>;
  }
}

export default ClassComponent;
```

Overall, both types of components achieve the same goal of building user interfaces in React, but they differ in syntax.

::: tip
- Function components are written as regular JavaScript functions, while class-based components are defined using ES6 classes.
- Function components are simpler and more concise compared to class-based components.
- Function components are easier to understand and write due to their simplicity.
- Both types of components serve the purpose of building user interfaces in React, but they differ in syntax.
:::

::: warning
- You should avoid using class components because they are an older way of writing code in React.
:::

## Why should I avoid using class components?

You should avoid using class components because they are an older way of writing code in React, which can make your code longer and more complicated. With newer versions of React, functional components with hooks are preferred because they are simpler, shorter, and easier to understand. Functional components also encourage better code organization and can improve performance in your applications. So, if you can, it's better to use functional components instead of class components in React.

::: tip
- Class components are an older way of writing code in React.
- They can make your code longer and more complex.
- Functional components with hooks are preferred in newer versions of React.
- Functional components are simpler, shorter, and easier to understand.
- It's better to use functional components instead of class components in React.
:::

## What are props in components?

In React, props in components are like messages that one part of your app can send to another. They're pieces of information passed from a parent component to a child component. Let's say you have a parent component called `ParentComponent` and a child component called `ChildComponent`. In `ParentComponent`, you can send a prop like this:

```jsx
function ParentComponent() {
  return (
    <ChildComponent message="Hello from ParentComponent!" />
  );
}
```

Then, in `ChildComponent`, you can receive and use this prop like this:

```jsx
function ChildComponent(props) {
  return <p>{props.message}</p>;
}
```

Here, `props` is an object containing all the props passed to the component. So, `props.message` would give you the message sent from `ParentComponent`. That's how props work in React components!

::: tip
- Props in React components are like messages or data that can be passed from a parent component to a child component.
- They allow for communication between different parts of a React application.
- Props are received as a parameter in the component and are accessed through an object called `props`.
:::

## What are states in components?

In React, states in components are like containers that hold data for the component. They help to manage and update information within the component. For example, imagine a simple counter component where you want to display a number that increments each time a button is clicked. You can use state to keep track of the count. Here's a basic example code:

```jsx {4,7-8}
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

In this example, `useState(0)` is used to declare a state variable named `count` with an initial value of 0. `setCount` is a function that allows you to update the value of `count`. When the button is clicked, it calls `setCount` to increment the count by 1, and React re-renders the component with the updated count value.

::: tip
- States in components in React are containers for holding data within the component.
- They help manage and update information dynamically.
- Syntax: Utilize the `useState()` hook to declare a state variable and its initial value.
- Use the setter function (`setCount`) returned by `useState()` to update the state.
- React re-renders the component automatically when the state changes.
:::

## What is the difference between state and props?

In React, the difference between state and props is important to understand. State is like a memory that each component can keep track of. It's data that can change over time, and when it does, React re-renders the component to reflect those changes. Props, on the other hand, are like parameters that you pass to a component when you first create it. They are immutable (which means they cannot be changed by the component itself) and are used to customize or configure a component when it's rendered. So, while state is internal and can change, props are external and can't be changed by the component receiving them.

::: tip
- State acts like a memory within a component.
- It Represents data that can change over time.
- Changes to state trigger re-renders of the component.
- Props are parameters passed to a component when it's created.
- They are immutable data received from a parent component.
- They used for customizing or configuring a component during rendering.
- They cannot be changed by the component receiving them.
:::

## When should we use state and when should we use props?

In React, we use `state` and `props` to manage and pass data around our components. We use `state` when we need to manage data within a component itself that can change over time, like user input or the result of an API call. `props`, short for properties, are used to pass data from a parent component to a child component. We use props when we want to share information from a parent component to its children. So, to decide when to use state or props, remember: state is for managing data within a component, and props are for passing data from parent to child components.

::: tip
- Use `state` in React to manage data within a component itself.
- State is suitable for managing data that can change over time, like user input or API responses.
- Use `props` (properties) to pass data from a parent component to a child component.
:::

## How do we handle events in React?

In React, handling events is like telling your app what to do when something happens, like clicking a button or typing in a text field. To handle events, you create special functions called event handlers. These functions are triggered when an event occurs, and they can perform tasks like updating data or changing what's shown on the screen. Here's a simple example of how you might handle a click event on a button in React:

```jsx {2-4,7}
function Button() {
  const handleClick = () => {
    alert('Button clicked!');
  }

  return (
    <button onClick={handleClick}>Click me</button>
  );
}
```

In this code, we have a React component called `Button`. Inside this component, there's a function called `handleClick`, which simply shows an alert saying 'Button clicked!' when the button is clicked.

::: tip
- In React, handling events means defining what happens when users interact with your app, like clicking a button.
- To handle events, you create special functions called event handlers.
- Event handlers can perform tasks like updating data or changing what's displayed on the screen.
- In React, you attach event handlers to elements using special attributes like `onClick`, `onChange`, etc.
:::

## How to render different content based on certain conditions?

In React components, you can render different content based on certain conditions using conditional rendering. This means you can show different things depending on what's happening in your app. One common way to do this is by using the `if` statement or the ternary operator `? :`. Here's a small example:

```jsx
function MyComponent({ isLoggedIn }) {
  if (isLoggedIn) {
    return <p>Welcome back!</p>;
  } else {
    return <p>Please log in to continue.</p>;
  }
}
```
or using the ternary operator:

```jsx
function MyComponent({ isLoggedIn }) {
  return <p>{isLoggedIn ? "Welcome back!" : "Please log in to continue."}</p>;
}
```

In this code, `isLoggedIn` is a prop that tells us whether the user is logged in or not. If `isLoggedIn` is `true`, it shows `Welcome back!`, and if it's `false`, it shows `Please log in to continue.` This way, the content changes based on the condition provided.

::: tip
- In React components, you can render different content based on conditions using conditional rendering.
- Common ways to do this include using the `if` statement or the ternary operator `? :`.
- This allows content to dynamically change based on the provided conditions.
:::

## How to render list of items in react component?

To render a list of items in a React component, you can use the `map` function. First, you need to have an array containing the items you want to render. Then, inside your component's render method, you can use the `map` function to iterate over each item in the array and return a JSX element for each item. Here's a small sample code demonstrating this:

```jsx {7-9}
const MyComponent = () => {
  const items = ['Item 1', 'Item 2', 'Item 3'];
  return (
    <div>
      <h1>List of Items:</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
```

In this code, we have an array called `items` containing some sample items. Inside the `ul` element, we use `map` to iterate over each item in the array. For each item, we return a `li` element with the item's content. It's important to include a `key` prop when rendering lists in React to help React identify each list item uniquely.

::: tip
- Inside your component's render method, use the `map` function to iterate over each item in the array.
- For each item, return a JSX element (like `li` for a list item) containing the item's content.
- Include a `key` prop for each rendered item to help React identify them uniquely.
:::

## What is `key` prop in react component?

In React, the `key` prop is a special attribute that you can add to components when you're rendering lists of items. It helps React identify each item in the list uniquely. When you change, add, or remove items in a list, React uses the key prop to efficiently update the DOM without re-rendering the entire list. Here's a simple example:

```jsx {6}
function MyListComponent() {
  const items = ['apple', 'banana', 'orange'];
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
```

In this code, each list item (`<li>`) gets a unique key based on its index in the `items` array. This helps React keep track of each item properly when the list changes.

::: tip
- The `key` prop in React components is used for identifying elements uniquely within a list.
- It is particularly useful when rendering dynamic lists of items.
- React uses the `key` prop to efficiently update the DOM when the list changes, avoiding unnecessary re-renders.
- Each item in the list should have a unique `key` prop value.
- Typically, the `key` prop is set using a unique identifier for each item, such as an ID from a database or the item's index in the list.
- Using the `key prop helps React optimize rendering performance and maintain the component's state accurately.
:::

::: warning
- Never use `index` as a key for list items.
:::

## What is `ref` in react components?

In React components, `ref` is a special attribute used to access the DOM (Document Object Model) nodes or React elements created by JSX. It helps in interacting with these elements directly from the component. For example, if you want to focus on an input field or measure its dimensions, you can use refs. Here's a simple code snippet demonstrating the use of `ref` in a React component:

```jsx {4,6,10}
import { useRef } from 'react';

const MyComponent = () => {
  const myRef = useRef();
  const focusInput = () => {
    myRef.current.focus();
  };
  return (
    <div>
      <input ref={myRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};
```

In this example, `useRef` hook is used to create a ref named `myRef`. This ref is attached to the input field using the `ref` attribute. Later, when the button is clicked, the `focusInput` function is called, which focuses on the input field using the `current` property of the ref.

::: tip
- In React components, `ref` is a special attribute used to access DOM nodes or React elements created by JSX.
- It facilitates direct interaction with these elements from within the component.
- Common uses of `ref` include focusing on input fields, measuring dimensions, or accessing underlying DOM properties and methods.
- To create a ref in a component, the `useRef` hook is used.
- The ref is then attached to the desired element using the `ref` attribute.
- Accessing the DOM node or React element is done through the `current` property of the ref.
:::

## What are forward refs?

In React, forward refs allow a component to pass its ref down to a child component. This is useful when a parent component needs to access or control a specific element in its child component. Forwarding refs makes it easier to manage focus, trigger animations, or interact with DOM elements directly. Here's a simple example:

```jsx {3,16}
import { forwardRef, useRef } from 'react';

const ChildComponent = forwardRef((props, ref) => {
  return <input ref={ref} />;
});

const ParentComponent = () => {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <ChildComponent ref={inputRef} />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
};
```

In this example, `ChildComponent` forwards the `ref` to the `<input>` element it renders. Then, in `ParentComponent`, we create a ref with `useRef()` and pass it to `ChildComponent`. This allows `ParentComponent` to access and control the `<input>` element inside `ChildComponent`, for example, to focus it when a button is clicked.

::: tip
- Forward refs in React allow a component to pass its ref down to a child component.
- Useful for cases where a parent component needs to access or control a specific element in its child component.
- Simplifies tasks like managing focus, triggering animations, or interacting with DOM elements directly.
- Child component uses `forwardRef` to forward the ref to a specific DOM element, like an input field.
:::

## What are controlled components?

Controlled components in web development are input elements like text fields or checkboxes whose values are controlled by the state of the application. This means that the value of the input is directly linked to a piece of state in the code, typically managed by a framework like React. In simpler terms, when you type something into a text field or select an option in a checkbox, the value you see is directly tied to a variable in the code. Here's a simple example in React:

```jsx {4,6-8,14-15}
import { useState } from 'react';

function ControlledComponent() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleChange} 
      />
      <p>You typed: {inputValue}</p>
    </div>
  );
}
```

In this code, the `inputValue` is a piece of state managed by React's `useState` hook. The `value` attribute of the `<input>` element is set to this `inputValue`, making it a controlled component. When you type into the input field, the `handleChange` function updates the `inputValue`, which in turn updates what is displayed in the input field and the `<p>` tag below it.

::: tip
- Controlled components in web development are input elements whose values are directly tied to the state of the application.
- They are commonly used in frameworks like React to manage the state of user input.
- When you type something into a controlled input field, the value is controlled by a variable in the code.
- This allows for better control and manipulation of user input data.
:::

## What are uncontrolled components?

In React, uncontrolled components are elements like input fields where their value isn't controlled by React state. Instead, they manage their own state internally. When using uncontrolled components, they refer to those where the value isn't controlled directly by React state but can still be accessed using refs. Here's a simple example of an uncontrolled input component using a ref in React:

```jsx {4,7,12}
import { useRef } from 'react';

function UncontrolledComponent() {
  const inputRef = useRef(null);

  const handleClick = () => {
    console.log('Input value:', inputRef.current.value);
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Get Value</button>
    </div>
  );
}
```

In this code, the input element doesn't rely on React state to control its value. Instead, it manages its value internally. We use a ref (`inputRef`) to access its current value when needed, like in the `handleClick` function.

::: tip
- Uncontrolled components manage their own state internally, rather than relying on React state.
- Refs are used to access the current value of the uncontrolled component when needed, such as in event handlers or other functions.
:::

## What are lifecycles in functional components?

In React functional components, lifecycles are like the different stages a component goes through during its existence. They include creation, updating, and destruction. For instance, when a component is created, it may need to set up some initial state or fetch data from a server. During updates, it might react to changes in props or state by rerendering. And when a component is removed from the screen, it could clean up resources or unsubscribe from events. Here's a simple example of a functional component with a basic lifecycle:

```jsx {7,10,17}
import { useEffect } from 'react';

function ExampleComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This runs when component is mounted
    console.log("Component is mounted");
    
    // This return function is like componentWillUnmount
    return () => {
      console.log("Component is unmounted");
    };
  }, []);

  useEffect(() => {
    // This runs when count changes
    console.log(count);
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

In this example, `useEffect` hook is used to manage lifecycle events. The first function inside `useEffect` runs when component is mounted, similar to `componentDidMount` in class components. The returned function inside `useEffect` acts like `componentWillUnmount`, executing cleanup when the component is unmounted. The second function inside `useEffect` runs when `count` changes, similar to `componentDidUpdate` in class components.

::: tip
- Lifecycles in React functional components are stages a component goes through: creation, updating, and destruction.
- Creation involves setting up initial state or fetching data.
- Updating happens when props or state change, triggering rerendering.
- Destruction occurs when a component is removed from the screen, allowing cleanup of resources.
- An example of managing lifecycles in a functional component is using the `useEffect` hook, which combines `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` functionalities.
:::


## What are higher order components (HOCs)?

Higher order components (HOCs) in React are like helper functions that enhance the capabilities of other components. They are functions that take a component and return a new component with added features. For example, imagine we have a simple functional component called `Button`. We can create a higher order component called `withColor` that adds a color property to the `Button`. Here's a basic example:

```jsx
// Higher Order Component
const withColor = (WrappedComponent, color) => {
  return (props) => <WrappedComponent {...props} color={color} />;
};

// Original Button Component
const Button = ({ color, onClick }) => (
  <button style={{ backgroundColor: color }} onClick={onClick}>
    Click me
  </button>
);

// Button component enhanced with color
const ColoredButton = withColor(Button, 'blue');
```

In this example, `withColor` is a higher order component that takes `Button` and a color, then returns a new component `ColoredButton` which has the color property added to it. This allows us to reuse the color logic across multiple components.

::: tip
- Higher order components (HOCs) in React are like helper functions that enhance the capabilities of other components.
- They take a component and return a new component with added features.
- HOCs are useful for reusing logic across multiple components.
:::


## What is `children` prop?

In React, the `children` prop is a special prop that allows components to pass elements or content to other components nested within them. It's like a doorway through which a parent component can send information to its child components. For example, imagine a `Parent` component wrapping around a `Child` component. The Parent can pass some content or components to the Child using the `children` prop. Here's a simple code snippet to illustrate:

```jsx {4}
const ParentComponent = () => {
  return (
    <div>
      <ChildComponent>This is passed from Parent!</ChildComponent>
    </div>
  );
};
```

```jsx {1,5}
const ChildComponent = ({ children }) => {
  return (
    <div>
      <p>This is the child component.</p>
      <div>{children}</div>
    </div>
  );
};
```

In this example, the content `This is passed from Parent!` gets sent from the ParentComponent to the ChildComponent through the `children` prop. Then, the ChildComponent can render this content wherever it wants within its own structure.

::: tip
- In React, the `children` prop allows components to pass elements or content to other components nested within them.
- The parent component can send information or components to its child components through the `children` prop.
- Child components can access this content using the `children` prop and render it wherever needed within their structure.
:::


## How to set class and styles in react components?

In React, setting classes and styles in components is pretty straightforward. You can set classes using the `className` attribute, which works similarly to HTML's `class` attribute. For styles, you can use the `style` attribute, passing in a JavaScript object where keys are CSS properties in camelCase and values are the styles you want to apply. Here's a simple example:

```jsx {2-6,9}
const MyComponent = () => {
  const customStyle = {
    color: 'blue',
    fontSize: '18px',
    fontWeight: 'bold'
  };

  return (
    <div className="myClass" style={customStyle}>
      Hello, World!
    </div>
  );
};
```

In this code, the `div` element has a class of `myClass and custom styles defined by the `customStyle` object.

::: tip
- To set classes in React components, use the `className` attribute, which functions like HTML's `class` attribute.
- Define custom styles using the `style` attribute, passing in a JavaScript object where keys are CSS properties in camelCase and values are the styles you want to apply.
:::

## Why do we use `className` instead of `class`?

In React, we use `className` instead of `class` because `class` is a reserved keyword in JavaScript used for defining classes in object-oriented programming. Since React code is written in JavaScript, using `class` directly could cause conflicts or confusion. So, to avoid this, React uses `className` to specify CSS classes for HTML elements. This way, we can style our components using CSS while avoiding any clashes with JavaScript's reserved keywords. Essentially, `className` serves the same purpose as `class` in HTML, allowing us to apply styles to elements.

::: tip
- In React, `className` is used instead of `class`.
- `class` is a reserved keyword in JavaScript for defining classes.
:::

## How to name components in react?

In React, naming components is important for clarity and organization in your code. When naming components, it's best to use descriptive names that accurately reflect their purpose or functionality. Make sure to use PascalCase convention for component names, starting with a capital letter. For example, if you're creating a component for a button, you might name it `Button` or `SubmitButton` if it's specifically for submitting forms. Avoid generic names like `Component` or `Item that don't provide much insight into what the component does. Good naming helps you and other developers understand your code better and makes it easier to maintain and work with in the long run.

::: tip
- Follow the PascalCase convention, starting with a capital letter.
:::

## What are fragments in react?

In React, fragments are a way to group multiple elements together without adding extra nodes to the DOM. Normally, when you return multiple elements in React, you need to wrap them in a single parent element. Fragments allow you to avoid this by letting you return a group of elements as siblings. They're useful when you don't want to add an extra div or span just for the sake of structure. Here's a small sample code to illustrate:

```jsx
function MyComponent() {
  return (
    <>
      <h1>Hello</h1>
      <p>This is a paragraph.</p>
    </>
  );
}
```

In this example, the `<React.Fragment>` tag (`<>` and `</>`) is used as a wrapper around the `<h1>` and `<p>` elements. It allows you to return multiple elements without introducing an unnecessary parent node in the DOM.

::: tip
- Fragments in React are used to group multiple elements together without adding extra nodes to the DOM.
- You can use the shorthand syntax `<>` and `</>` to create fragments, allowing you to return multiple elements cleanly.
:::


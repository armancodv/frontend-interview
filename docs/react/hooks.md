# Hooks

## What are react hooks?

React hooks are a way to add features to functional components in React. They allow you to use state and other React features without writing a class. Think of them as tools that help you manage the state of your app and perform actions like fetching data from a server or handling user input more easily. With hooks, you can organize your code better and make it more reusable, making it simpler to create interactive and dynamic web applications.

::: tip
- React hooks are tools for adding features to functional components in React.
- They enable the use of state and other React features without writing a class.
- Hooks help manage the state of the application and perform actions like fetching data or handling user input.
:::

## What are the most common hooks in react?

In React, some of the most common hooks are useState(), useEffect(), and useContext(). The useState() hook is used to manage state within functional components, allowing you to store and update data dynamically. useEffect() is handy for performing side effects in functional components, like data fetching or subscriptions, after render. Lastly, useContext() helps access data globally across the component tree without prop drilling. These hooks simplify state management, side effects, and context handling in React applications, making development more efficient and organized.

::: tip
- useState(): Manages state within functional components
- useEffect(): Performs side effects like data fetching or subscriptions after render
- useContext(): Accesses data globally across the component tree without prop drilling
:::

## What is `useState` in react?

In React, useState is a hook used to add state to functional components. It allows you to create state variables and update them within your components. Here's a simple example of how to use useState:

```jsx {5}
import { useState } from 'react';

function Counter() {
  // Declare a state variable named "count" and initialize it with the value 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      {/* When the button is clicked, call setCount to update the count state */}
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

In this code, `useState` is used to declare a state variable called `count` and initialize it with the value 0. The setCount function is used to update the value of count` when the button is clicked.

::: tip
- `useState` is a hook in React.
- It adds state management capability to functional components.
- It allows you to create state variables and update them within components.
- It takes an initial value as an argument and returns an array with the current state value and a function to update that value.
- When the state is updated using the setter function , React re-renders the component to reflect the new state value.
:::

## What is `useEffect` in react?

`useEffect` is a special function in React that allows you to perform side effects in your components. Side effects could be anything from fetching data, subscribing to events, or manually changing the DOM. It runs after every render, including the first one. This function takes two arguments: a callback function that represents the side effect you want to perform, and an optional array of dependencies. The dependencies array lets you control when the effect runs. If any of the values in the dependencies array change, the effect will run again. Here's a simple example of how you can use `useEffect` to fetch data when a component mounts:

```jsx {6-10}
import { useState, useEffect } from 'react';

function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('[url]')
      .then(response => response.json())
      .then(data => setData(data));
  }, []); // Empty dependency array means this effect runs only once when component mounts

  return (
    <div>
      {data && <p>{data}</p>}
    </div>
  );
}
```

::: tip
- `useEffect` in React manages side effects in functional components.
- It executes after every render, including the initial one.
- You provide a callback function as the first argument, representing the side effect you want to perform.
- An optional array of dependencies can be provided as the second argument, controlling when the effect runs.
- If the dependencies array is empty, the effect runs only once after the initial render.
- Common use cases include fetching data, subscribing to events, or manipulating the DOM.
:::

## What are dependencies in useEffect?

In React, `useEffect` is a hook used for managing side effects in functional components. Dependencies in `useEffect` are variables or values that the effect depends on. When any of these dependencies change, the effect inside `useEffect` runs again. It helps in controlling when the effect should run based on certain conditions. For example, if you have a variable `count` that you want to watch for changes, you include it in the dependency array of `useEffect`. Here's a simple code snippet:

```jsx {6-9}
import { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect will run whenever `count` changes.
    console.log('Count changed:', count);
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

In this example, the effect inside `useEffect` runs whenever the `count` state changes.

::: tip
- Dependencies in `useEffect` are variables or values that the effect depends on.
- When any of these dependencies change, the effect inside `useEffect` runs again.
- It helps in controlling when the effect should run based on certain conditions.
:::

## What are the use cases of useEffect?

The `useEffect` hook in React is like a Swiss Army knife for managing side effects in your components. It's handy for performing tasks that don't directly involve updating the user interface, such as fetching data from a server, subscribing to events, or setting up timers. Essentially, whenever you need to do something after the component has rendered, `useEffect` comes to the rescue. For example, you can use it to update the title of a webpage dynamically, or to clean up resources when the component unmounts. In simple terms, `useEffect` is your go-to tool for managing all sorts of behind-the-scenes tasks in React components, making your app more interactive and responsive.

::: tip
- `useEffect` is commonly used for fetching data from an API when a component mounts.
- It can dynamically update the title of the webpage based on certain conditions or data.
- You can use `useEffect` to subscribe to events like scrolling or resizing the window.
- Setting up timers or intervals for tasks such as automatic updates or countdowns.
- `useEffect` can be used for cleaning up resources like unsubscribing from events or cancelling timers when the component unmounts.
:::

## How to subscribe to and unsubscribe from an event using the useEffect?

In React, you can subscribe and unsubscribe to events using the `useEffect` hook. To subscribe to an event, you need to provide a function as the first argument of `useEffect`, and within this function, you can add event listeners. For example, if you want to subscribe to a `click` event, you would write something like this:

```jsx {4-14}
import { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    function handleClick() {
      console.log('Button clicked!');
    }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <button>Click me</button>
  );
}
```

In this code, `useEffect` is used with an empty dependency array (`[]`), which means it runs once when the component mounts. Inside it, we define a function `handleClick` that logs a message. We then add an event listener to the document for the `click` event, and when the component unmounts (or when the dependencies change, which is never in this case), we remove the event listener to clean up after ourselves and avoid memory leaks.

::: tip
- To subscribe to an event using `useEffect` define a function to handle the event.
- To unsubscribe from the event return a cleanup function from the `useEffect` hook.
:::

## What is `useMemo in react?

`useMemo` is a feature in React that helps optimize performance by memorizing the result of a function and returning the cached result when the inputs remain the same. It's useful when you have a costly computation that you want to avoid repeating unnecessarily. For instance, if you have a component that renders based on some data, and that rendering process is computationally intensive, you can wrap that computation in `useMemo` to ensure it only recalculates when the data it depends on changes. Here's a simple example:

```jsx {4-7}
import { useMemo } from 'react';

function MyComponent({ data }) {
  const expensiveCalculation = useMemo(() => {
    // Perform some costly computation based on data
    return data.reduce((acc, val) => acc + val, 0);
  }, [data]); // Only recompute if 'data' changes

  return (
    <div>
      <p>Result of expensive calculation: {expensiveCalculation}</p>
    </div>
  );
}
```

In this example, `expensiveCalculation` will only be recalculated if the `data` prop changes, otherwise, it will reuse the previously computed value, improving performance.

::: tip
- `useMemo` in React helps optimize performance by memorizing the result of a function.
- It returns the cached result when the inputs to the function remain the same.
- Useful for avoiding unnecessary recalculations of costly computations.
- Typically used when a component relies on some data that might change, but the result of a computation based on that data doesn't need to be recalculated every time.
- Improves performance by preventing redundant computations.
:::

## What is `useRef` in react?

In React, useRef is a tool that helps to reference a DOM element or a value that persists across renders. It's like a sticky note where you can write something and remember it even if the page changes. Here's a simple example:

```jsx {4,7,12}
import { useRef } from 'react';

function MyComponent() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus(); // Focuses on the input field
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}
```

In this code, useRef is used to create a reference to the input element. Later, when the button is clicked, the input field gets focused because we use the `.focus()` method on the `inputRef.current`. This is just one simple use case, but useRef can be handy for many other situations where you need to keep track of a value across renders.

::: tip
- useRef in React allows you to create references to DOM elements or values that persist across renders.
- With useRef, you can access and manipulate DOM elements directly without resorting to traditional DOM manipulation methods.
- One common use case is to access and modify the properties or methods of a DOM element, such as focusing an input field or measuring its dimensions.
- useRef returns a mutable object with a `.current` property, which holds the reference to the value or DOM element.
:::

## What is `useCallback` in react?

In React, useCallback is a hook that helps in optimizing performance by memoizing (or caching) callback functions. When you use useCallback, it returns a memoized version of the callback function that only changes if one of the dependencies has changed. This can be useful in preventing unnecessary re-renders of child components. Here's a simple example:

```jsx {7-9}
import { useCallback, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  // useCallback to memoize the increment function
  const increment = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```

In this example, the `increment` function is memoized using useCallback, ensuring that it doesn't change between re-renders unless the dependencies (in this case, there are none `[]`) change.

::: tip
- `useCallback` is a hook in React.
- It optimizes performance by memoizing callback functions.
- Memoization means caching the function so that it only changes if its dependencies change.
- Helps prevent unnecessary re-renders of child components.
:::

## What is `useContext` in react?

`useContext` is a tool in React that lets you easily access data from a Context without having to pass it through multiple components. In simpler terms, it helps you share information, like a user's authentication status or theme preference, across different parts of your app without manually passing it down. Here's a basic example:

```jsx {4,9,16}
import { useContext } from 'react';

// Create a context
const ThemeContext = React.createContext('light');

// A component that uses the context
function ThemeDisplay() {
  // Use useContext to access the context
  const theme = useContext(ThemeContext);
  return <p>Current theme: {theme}</p>;
}

// Another component that uses the context
function App() {
  return (
    <ThemeContext.Provider value="dark">
      <div>
        <ThemeDisplay />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
```

In this example, `useContext` is used to access the `ThemeContext` in the `ThemeDisplay` component, allowing it to display the current theme without directly passing it from the `App` component.

::: tip
- `useContext` is a feature in React for accessing data stored in a Context.
- It enables components to consume data from a Context without explicitly passing it down through props.
- It simplifies sharing data like user authentication status, theme preferences, or language selection across different parts of an application.
- With `useContext`, you create a Context using `React.createContext()`.
- Then, you can use `useContext(ContextName)` within a component to access the data stored in that Context.
- This eliminates the need for prop drilling, making code cleaner and more maintainable.
:::

## What is `useLayoutEffect` in react?

`useLayoutEffect` in React is similar to `useEffect`, but it gets executed synchronously after all DOM mutations. This means it's useful for tasks that require you to read layout from the DOM and then make changes immediately, like measuring the size or position of an element. Here's a simple example:

```jsx {7-10}
import { useLayoutEffect, useState, useRef } from 'react';

function Component() {
  const [width, setWidth] = useState(0);
  const ref = useRef();

  useLayoutEffect(() => {
    // Measure the width of the element
    setWidth(ref.current.clientWidth);
  }, []);

  return (
    <div ref={ref}>
      Width: {width}px
    </div>
  );
}
```

In this code, `useLayoutEffect` is used to measure the width of a `div` element and update the state accordingly. The effect runs synchronously after the DOM is updated, ensuring accurate measurements.

::: tip
- `useLayoutEffect` in React executes synchronously after all DOM mutations.
- It's similar to `useEffect` but is preferred for tasks needing immediate DOM layout changes.
- Useful for measuring elements' size or position right after they're rendered.
- Ensures accurate measurements as it runs before the browser paints the screen.
- Perfect for scenarios where you need to update state based on DOM layout calculations.
:::

## What is `useDeferredValue` in react?

In React, `useDeferredValue` is a hook used to defer the update of a value until certain conditions are met, typically to improve performance. It's particularly handy when dealing with user input or network requests where immediate updates might not be necessary. For example, if you have a large list of items and the user is scrolling through them, you might not want to update the UI for every single item scrolled past, but rather wait until the scrolling stops to update. Here's a simple code snippet demonstrating its usage:

```jsx {4}
import { useDeferredValue } from 'react';

function MyComponent() {
  const deferredValue = useDeferredValue(someValue);

  // Use the deferred value in your component
  return <div>{deferredValue}</div>;
}
```

In this code, `someValue` can be any value that you want to defer updating until later.

::: tip
- `useDeferredValue` is a React hook for deferring the update of a value until certain conditions are met.
- It's useful for improving performance, especially with user input or network requests where immediate updates may not be necessary.
- Deferred values can be used in components to avoid immediate updates, enhancing the user experience.
:::

## What is `useId` in react?

In React, `useId` is a special function, known as a React Hook, that helps generate unique IDs. These IDs are useful for adding accessibility attributes to elements in a webpage. When you use `useId`, it creates a unique ID string that you can then use for accessibility-related attributes like `aria-describedby`. This is helpful for connecting different parts of your webpage, such as linking an input field to its description for screen readers. Here's a simple example of how you can use `useId` in a React component:

```jsx {4,12,15}
import { useId } from 'react';

function PasswordField() {
  const passwordHintId = useId();

  return (
    <>
      <label>
        Password:
        <input
          type="password"
          aria-describedby={passwordHintId}
        />
      </label>
      <p id={passwordHintId}>
        The password should contain at least 18 characters
      </p>
    </>
  );
}
```

In this example, `useId` generates a unique ID for the password hint, and we use it for both the `aria-describedby` attribute on the input field and the `id` attribute on the paragraph element. This ensures that even if the PasswordField component is used multiple times on a page, each instance will have its own unique IDs, avoiding conflicts and ensuring accessibility.

::: tip
- `useId` is a React Hook used for generating unique IDs.
- These unique IDs are primarily used for adding accessibility attributes to elements.
- You can use `useId` to generate IDs for elements like input fields and their related descriptions.
- The generated IDs can be passed to attributes like `aria-describedby` to link elements together for accessibility purposes.
- Hardcoding IDs is not recommended in React; instead, use `useId` to dynamically generate unique IDs for components.
:::

::: warning
Avoid using `useId` to generate keys in a list; keys should typically be derived from your data.
:::

## What is `useReducer` in react?

`useReducer` is a function in React that helps manage state more efficiently, especially for complex state logic. It's like a Swiss Army knife for state management. Instead of having multiple `useState` calls for different pieces of state, you can use `useReducer` for managing state transitions based on actions. It takes in a reducer function and an initial state, returning the current state and a dispatch function to trigger state updates. Here's a simple example:

```jsx {4-13,17,21-23}
import { useReducer } from 'react';

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

// Component using useReducer
const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
};

export default Counter;
```

In this example, we define a reducer function that takes the current state and an action, and returns the new state based on that action. Then, in the `Counter` component, we use `useReducer` to manage the state of `count`. We dispatch actions to increment or decrement the count, and the reducer updates the state accordingly.

::: tip
- `useReducer` is a function in React for managing state more efficiently.
- It's particularly useful for complex state logic.
- With `useReducer`, you can handle state transitions based on actions, similar to how Redux works.
- It takes in a reducer function and an initial state, returning the current state and a dispatch function to trigger state updates.
- Reducer function defines how state should change in response to actions.
- `useReducer` simplifies state management compared to having multiple `useState` calls for different pieces of state.
:::

## What is `useTransition` in react?

In React, `useTransition` is a hook that helps in handling animations when adding or removing items from a list. It allows you to smoothly transition between different states of your components, making your UI look more polished and user-friendly. Essentially, it lets you control how elements enter and exit the screen. Here's a simple example:

```jsx {5,8-10,23}
import { useState, useTransition } from 'react';

function App() {
  const [items, setItems] = useState([]);
  const [isPending, startTransition] = useTransition();

  const addItem = () => {
    startTransition(() => {
      setItems([...items, items.length]);
    });
  };

  const removeItem = () => {
    startTransition(() => {
      setItems(items.slice(0, -1));
    });
  };

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      <button onClick={removeItem}>Remove Item</button>
      {isPending ? <p>Adding or Removing...</p> : null}
      <ul>
        {items.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
```

In this example, when you click "Add Item" or "Remove Item", the list items transition smoothly in and out of the list, providing a better user experience. The `useTransition` hook manages the animation process, making it easier to implement animations in your React components.

::: tip
- `useTransition` is a React hook used for handling animations when adding or removing items from a list.
- It helps in smoothly transitioning between different states of components, improving the user interface's visual appeal.
- The hook allows control over how elements enter and exit the screen, making UI interactions more polished.
- It's beneficial for creating animations like fading in/out or sliding in/out of elements.
:::

## What is `useDebugValue` in react?

In React, useDebugValue is a hook that helps developers add debug information to custom hooks. It's handy for making sense of custom hook values in React DevTools. With useDebugValue, you can give meaningful labels or values to your custom hooks, which can make debugging easier. Here's a simple example:

```jsx {7}
import { useDebugValue, useState } from 'react';

function useCustomHook(initialState) {
  const [value, setValue] = useState(initialState);

  // Giving a label to the value for debugging purposes
  useDebugValue(value ? 'Value is true' : 'Value is false');

  return [value, setValue];
}

function MyComponent() {
  const [state, setState] = useCustomHook(false);

  return (
    <div>
      <p>{state ? 'Value is true' : 'Value is false'}</p>
      <button onClick={() => setState(!state)}>Toggle Value</button>
    </div>
  );
}
```

In this example, `useCustomHook` is a custom hook that maintains a state value. By using `useDebugValue`, we attach a label to the state value for debugging purposes. This label will be visible in React DevTools, helping developers understand the state's purpose more easily.

::: tip
- `useDebugValue` is a hook in React.
- It's used to add debug information to custom hooks.
- Helps in understanding custom hook values in React DevTools.
- Allows developers to give meaningful labels or values to custom hooks for easier debugging.
:::

## What is `useImperativeHandle` in react?

`useImperativeHandle` is a hook in React that allows you to customize the instance value that is exposed by a child component when using `forwardRef`. This hook is useful when you want to control what methods or properties are accessible to the parent component when it interacts with the child component's ref. For instance, you might want to expose specific functions from the child component's instance to the parent. Here's a simple example:

```jsx {7-11,21}
import { useRef, useImperativeHandle, forwardRef } from 'react';

const ChildComponent = forwardRef((props, ref) => {
  const inputRef = useRef();

  // Expose specific function 'focusInput' to parent
  useImperativeHandle(ref, () => ({
    focusInput: () => {
      inputRef.current.focus();
    }
  }));

  return <input ref={inputRef} />;
});

const ParentComponent = () => {
  const childRef = useRef();

  const handleClick = () => {
    // Call the function 'focusInput' exposed by ChildComponent
    childRef.current.focusInput();
  };

  return (
    <div>
      <ChildComponent ref={childRef} />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
};

export default ParentComponent;
```

In this example, the `useImperativeHandle` hook is used to expose the `focusInput` function of the child component to its parent. Then, the parent component can call this function to focus on the input element within the child component.

::: tip
- `useImperativeHandle` is a React hook used to customize the instance value exposed by a child component when using `forwardRef`.
- It allows you to control which methods or properties of the child component's instance are accessible to the parent component.
- This hook is particularly useful when you need to expose specific functions or behaviors from the child component to its parent.
- It is commonly used in conjunction with `forwardRef` to provide a more controlled and focused API for interacting with child components.
- By using `useImperativeHandle`, you can enhance encapsulation and provide a cleaner interface between parent and child components in React applications.
:::

## What is `useSyncExternalStore` in react?

The useSyncExternalStore in React is a tool that helps you connect your components to an external data store, like a database or another part of your application. When you use this hook, you can subscribe to changes in the store and get the current snapshot of its data. In simple terms, it's a way for your React components to stay up-to-date with the latest information from outside sources.

Here's a small example of how you might use it:

```jsx {6}
import { useSyncExternalStore } from 'react';
import { todosStore } from './todoStore.js';

function TodosApp() {
  // This line connects our TodosApp component to the todosStore
  const todos = useSyncExternalStore(todosStore.subscribe, todosStore.getSnapshot);
  // Now we can use 'todos' in our component to display or work with the data
  return (
    <div>
      {todos.map(todo => (
        <div key={todo.id}>{todo.text}</div>
      ))}
    </div>
  );
}
```

In this example, whenever the data in `todosStore` changes, our `TodosApp` component will automatically re-render to reflect those changes. This helps keep our UI in sync with the external data source.

::: tip
- `useSyncExternalStore` is a React Hook for connecting components to an external data store.
- It allows subscribing to changes in the store and fetching the current snapshot of its data.
- Helps components stay updated with the latest information from outside sources.
- Usage involves passing subscribe and getSnapshot functions to connect to the store.
- React re-renders the component whenever the store data changes.
- Useful for integrating with third-party state management libraries or browser APIs.
- Ensures components reflect real-time changes in external data.
:::

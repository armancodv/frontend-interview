# React

This page helps explain the core ideas of React in a simple way. It breaks down the main concepts of React, making it easier to understand for beginners.

## What is React?

React is a popular `JavaScript library` used for building user interfaces, particularly for web applications. It allows developers to create reusable UI components that efficiently update and render based on changes in data. React uses a virtual DOM to optimize performance by minimizing the number of updates to the actual DOM, resulting in faster and smoother user experiences. Its declarative approach simplifies the process of building complex UIs by breaking them down into smaller, manageable components. Overall, React streamlines the development of interactive and dynamic web applications.

::: tip Key Points
- React is a JavaScript library for building user interfaces
- React uses a virtual DOM for efficient updates and rendering. 
:::

## What is the origin of React?

React was created by `Facebook` engineer Jordan Walke. It first emerged in 2011 as an internal project at Facebook, and it was later released as an open-source library in 2013. React was developed to make it easier for Facebook developers to build user interfaces for their web applications. It quickly gained popularity due to its efficiency in managing complex user interfaces and its ability to update only the parts of a webpage that need to change, leading to faster and more dynamic web experiences.

::: tip Key Points
- React was created by Facebook engineer Jordan Walke.
- Originated in 2011 as an internal project at Facebook. 
- Released as an open-source library in 2013.
:::

## What is the core concept of React?

The core concept of React is to make building user interfaces easier and more efficient. React is a JavaScript library that helps developers create interactive and dynamic UI components for web applications. It works by breaking down the UI into small, reusable pieces called components, each responsible for a specific part of the UI. React uses a concept called the virtual DOM (Document Object Model) to efficiently update and render these components when the data changes, resulting in faster performance and a better user experience. Overall, React simplifies the process of building complex user interfaces by providing a structured and efficient way to manage UI components and their interactions.

::: tip Key Points
- React breaks down the UI into small, reusable components.
- Each component is responsible for a specific part of the UI.
- React utilizes the virtual DOM (Document Object Model) for efficient updates and rendering.
:::

## What is the Virtual DOM?

The virtual DOM is like a blueprint of a webpage that exists in memory. It's a simplified version of the actual webpage's structure and content. When something changes on a webpage, like a user clicking a button or updating some text, instead of directly changing the real webpage, the virtual DOM gets updated first. Then, a process called `reconciliation` compares the updated virtual DOM with the previous one to identify what exactly changed. After this, only the specific parts of the real webpage that need to change are updated, making the process faster and more efficient. So, the virtual DOM helps in managing and updating webpages smoothly without constantly redrawing the entire page.

::: tip Key Points
- The virtual DOM is a simplified representation of a webpage's structure and content that exists in memory.
- This allows for efficient updates as only the specific parts of the real webpage that need to change are updated.
:::

## What is the difference between Shadow DOM and Virtual DOM?

Shadow DOM and Virtual DOM are both techniques used in web development, but they serve different purposes. The Shadow DOM is a way to encapsulate and isolate components in a web page, keeping their styles and functionality separate from the rest of the page. It helps prevent conflicts between different parts of a web page and makes it easier to manage complex applications. On the other hand, Virtual DOM is a concept used by frameworks like React to improve performance. It's a lightweight copy of the actual DOM (Document Object Model) that the framework uses to track changes. When changes occur, the Virtual DOM is updated instead of the real DOM, which is faster. Then, only the specific parts that have changed are updated in the real DOM, reducing the need for expensive DOM operations. So, in short, Shadow DOM is about encapsulation and isolation, while Virtual DOM is about optimizing performance by minimizing DOM updates.

::: tip Key Points
- Shadow DOM encapsulates and isolates components in a web page.
- It keeps styles and functionality separate from the rest of the page.
- It prevents conflicts between different parts of a web page.
- Virtual DOM is lightweight copy of the actual DOM (Document Object Model).
- It tracks changes in the DOM efficiently.
- It minimizes expensive DOM operations, enhancing performance.
:::

::: warning Hint
- React uses a virtual DOM.
:::

## How react improves the performance?

React improves performance primarily through its virtual DOM (Document Object Model) and reconciliation algorithm. When you make changes to your app's data, React doesn't directly update the actual DOM. Instead, it first updates a virtual representation of the DOM, which is much faster. Then, React compares this virtual DOM with the actual DOM to find the differences efficiently. It only applies the necessary changes to the real DOM, minimizing the number of updates needed and making the app faster.

::: tip Key Points
- React uses a virtual DOM (Document Object Model) to improve performance.
- React's reconciliation algorithm efficiently compares the virtual DOM with the actual DOM to identify differences.
:::

## What is reconciliation?

In React, reconciliation is like a process where React compares the new changes you made in your app with the old version to figure out what needs updating. It's a bit like comparing two lists to see what's different. React does this to be efficient—it only updates the parts of your app that actually changed, instead of redoing everything. This helps in keeping your app fast and responsive, especially when dealing with a lot of dynamic content or frequent updates. So, reconciliation is basically React's way of making sure your app stays up to date without wasting unnecessary resources.

::: tip Key Points
- Reconciliation in React is like comparing changes in your app with the old version.
- React does this comparison to avoid unnecessary updates, keeping the app fast.
:::

## What is JSX in React?

JSX stands for JavaScript XML. It's a syntax extension for JavaScript, often used with React. JSX allows you to write HTML-like code directly within JavaScript. Here's a tiny example:

```jsx
const element = <h1>Hello, world!</h1>;
```

In this example, `<h1>Hello, world!</h1>` looks like HTML, but it's actually JSX. It gets transformed into regular JavaScript by a tool like Babel before it's rendered in the browser. This way, you can write UI components more elegantly and expressively in React.

::: tip Key Points
- JSX stands for JavaScript XML.
- JSX allows you to write HTML-like code directly within JavaScript.
- JSX code gets transformed into regular JavaScript before rendering.
:::

## Why isn't React considered a framework?

React isn't a framework because it doesn't provide a full set of tools and features to build an entire application. Instead, React is a JavaScript library that helps in building user interfaces, specifically for web applications. It focuses on handling the view layer of the application and allows developers to create reusable UI components. Unlike frameworks such as Angular or Vue.js, React doesn't dictate how you should structure your application or handle things like routing or state management. Developers often combine React with other libraries and tools to create a complete solution for building web applications.

::: tip Key Points
- React is not a framework but a JavaScript library.
- React focuses on the view layer of the application.
- Unlike frameworks like Angular or Vue.js, React doesn't offer a complete solution for building applications.
- Developers often combine React with other libraries and tools to create full-fledged web applications.
:::

## What are the differences between a framework and a library?

A framework is like a skeleton that provides a structure for building something. It offers a set of rules and guidelines on how to develop a particular software application. It often dictates the flow of control, and you need to follow its patterns. On the other hand, a library is like a toolbox full of useful functions that you can use to solve specific problems in your code. Unlike a framework, you have more freedom in how you use a library. You can pick and choose which parts of the library to use and integrate them into your code as needed. So, while a framework tells you how to build something, a library provides tools to help you build it.

::: tip Key Points
- Framework provides a structured skeleton for building applications.
- It dictates the flow of control and often imposes specific patterns to follow.
- Users need to adhere to the framework's guidelines and rules.
- Library is a collection of functions and tools that can be used to solve specific problems.
- Unlike a framework, users have more freedom in utilizing libraries.
:::

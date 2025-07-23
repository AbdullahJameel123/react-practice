# React Introduction

## **🔹 What is React JS?**

React JS is a **JavaScript library** for building **fast, interactive, and reusable** user interfaces (UIs).

It is developed and maintained by **Facebook (Meta)** and is widely used in web development.

### **💡 Why Use React?**

✅ **Component-Based** – Build UI using reusable components.

✅ **Fast & Efficient** – Uses the **Virtual DOM** for optimal rendering.

✅ **Declarative** – Code is easier to understand and debug.

✅ **Strong Community Support** – Backed by **Facebook and Open Source** developers.

✅ **SEO-Friendly** – Can work with SSR (Server-Side Rendering).

---

## **🔹 React vs Other Frameworks**

| Feature            | React              | Angular        | Vue         |
| ------------------ | ------------------ | -------------- | ----------- |
| **Type**           | Library            | Full Framework | Library     |
| **Language**       | JavaScript/JSX     | TypeScript     | JavaScript  |
| **Learning Curve** | Easy               | Moderate       | Easy        |
| **Speed**          | Fast (Virtual DOM) | Slower         | Fast        |
| **Size**           | Lightweight        | Heavy          | Lightweight |

---

## **🔹 Setting Up a React Project**

You can create a React project using **Vite** (fastest) or **Create React App**.

### **1️⃣ Installing Node.js & npm**

Before installing React, install **Node.js** (includes npm).

✅ **Download from**: https://nodejs.org/

Check versions:

```bash
node -v
npm -v

```

---

### **2️⃣ Create a New React Project**

### **🔹 Using Vite (Recommended)**

```bash
npm create vite@latest my-app --template react
cd my-app
npm install
npm run dev

```

🔹 **Vite is faster than Create React App.**

---

### **🔹 Using Create React App (CRA)**

```bash
npx create-react-app my-app
cd my-app
npm start

```

✅ **This sets up a React project with Webpack and Babel.**

---

## **🔹 Understanding React Project Structure**

```
my-app/
│── src/              # Main source code
│   ├── App.tsx       # Main React component
│   ├── index.tsx     # Entry point
│── public/           # Static assets
│── package.json      # Dependencies & scripts
│── tsconfig.json     # TypeScript config (for TypeScript projects)
│── vite.config.js    # Vite config (for Vite projects)

```

---

## **🔹 React Components (Building Blocks of UI)**

A **Component** is a reusable piece of UI.

### **1️⃣ Functional Component (Recommended)**

```tsx
import React from "react";

const Welcome = () => {
  return <h2>Welcome to React!</h2>;
};

export default Welcome;
```

🔹 **This is a simple functional component that returns UI.**

---

### **2️⃣ Class Component (Older)**

```tsx
import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return <h2>Welcome to React!</h2>;
  }
}

export default Welcome;
```

🔹 **React now prefers functional components with Hooks.**

---

## **🔹 JSX - JavaScript XML**

JSX is a **syntax extension** that allows writing HTML inside JavaScript.

✅ **Example JSX Code:**

```tsx
const element = <h1>Hello, React!</h1>;
```

✅ **Equivalent JavaScript Code (Without JSX):**

```tsx
const element = React.createElement("h1", null, "Hello, React!");
```

🔹 **JSX makes code more readable.**

---

## **🔹 Handling Events in React**

React uses camelCase for events like `onClick`, `onChange`, etc.

✅ **Example: Click Event**

```tsx
import React from "react";

const Button = () => {
  const handleClick = () => alert("Button Clicked!");

  return <button onClick={handleClick}>Click Me</button>;
};

export default Button;
```

---

## **🔹 State Management in React**

State allows components to **store and update data** dynamically.

✅ **Using `useState()` Hook**

```tsx
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Counter;
```

🔹 **`useState(0)` initializes `count`.**

🔹 **`setCount(count + 1)` updates state, triggering re-render.**

---

## **🔹 Props in React (Passing Data)**

Props allow components to **receive data from their parent**.

✅ **Example: Passing Props**

```tsx
import React from "react";

const Greeting = ({ name }: { name: string }) => {
  return <h2>Hello, {name}!</h2>;
};

export default Greeting;
```

✅ **Using the Component**

```tsx
<Greeting name="Alice" />
```

🔹 **Output: `Hello, Alice!`**

---

## **🔹 React Router (Navigation in React)**

Install React Router:

```bash
npm install react-router-dom

```

✅ **Example: Basic Routing**

```tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Home = () => <h2>Home Page</h2>;
const About = () => <h2>About Page</h2>;

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
```

🔹 **`<Link to="/">Home</Link>` provides navigation.**

🔹 **`<Route path="/" element={<Home />}>` defines routes.**

---

## **🔹 Fetching Data from an API (Using `useEffect`)**

✅ **Example: Fetching Movie Data**

```tsx
import React, { useState, useEffect } from "react";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY")
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, []);

  return (
    <div>
      <h2>Popular Movies</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
```

🔹 **`useEffect()` runs once on mount to fetch data.**

---

## **🎯 Final Takeaways**

✔ **React is a component-based library**.

✔ **JSX allows writing HTML in JavaScript**.

✔ **`useState()` manages state, `props` pass data**.

✔ **React Router handles navigation**.

✔ **`useEffect()` fetches API data**.
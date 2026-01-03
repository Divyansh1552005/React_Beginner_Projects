import React, {useState} from 'react'


// // child with memo
// const Child = React.memo(({ count }) => {
//   console.log("Child rendered");
//   return <h2>Count: {count}</h2>;
// });

// // child without memo
// const Child2 = ({ count }) => {
//   console.log("Child 2 rendered!");
//   return <h2>Count: {count}</h2>;
// };

// function App() {
//   const [count, setCount] = React.useState(0);
//   const [text, setText] = React.useState("");

//   return (
//     <>
//       <Child count={count} />
//       <Child2 count={count} />

//       <button onClick={() => setCount(count + 1)}>+</button>

//       <input
//         placeholder="Enter your text"
//         onChange={(e) => setText(e.target.value)}
//       />

//       <button onClick={() => setCount(count - 1)}>-</button>
//     </>
//   );
// }

// export default App;


// function App() {
//   const [count, setCount] = React.useState(0);
//   const [text, setText] = React.useState("");

//   const expensiveCalculation = React.useMemo(() => {
//     console.log("Calculating...");
//     let sum = 0;
//     for (let i = 0; i < 1e7; i++) sum += i;
//     return sum + count;
//   }, [count])

//   return (
//     <>
//       <h2>{expensiveCalculation}</h2>
//       <button onClick={() => setCount(count + 1)}>+</button>
//       <input onChange={(e) => setText(e.target.value)} />
//     </>
//   );
// }
// 

const Child = React.memo(({ onClick }) => {
  console.log("Child rendered");
  return <button onClick={onClick}>Click</button>;
});

function App() {
  const [count, setCount] = React.useState(0);

  const handleClick = React.useCallback(() => {
    console.log("Clicked");
  }, []);

  return (
    <>
      <Child onClick={handleClick} />
      <button className="bg-blue-500 flex m-4 p-4 text-5xl"onClick={() => setCount(count + 1)}>+</button>
    </>
  );
}

export default App

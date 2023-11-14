import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const date = new Date("jun 21 2027");
  date.setDate(date.getDate() + count);
  const [step, setStep] = useState(1);

  return (
    <div>
      <div>
        <button onClick={() => setStep((c) => c - 1)}> - </button>
        <span>Step :{step}</span>
        <button onClick={() => setStep((plus) => plus + 1)}> + </button>
      </div>
      <div>
        <button onClick={() => setCount((c) => c - step)}> - </button>
        <span>count :{count}</span>
        <button onClick={() => setCount((plus) => plus + step)}> + </button>
      </div>

      <p>
        <span>
          {count === 0
            ? "today is "
            : count > 0
            ? `${count} days from today `
            : `${count} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}
export default App;

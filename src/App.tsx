import React, { useEffect, useState } from "react";
import "./App.css";
import { getQuizData, Questions } from "./lib/api";

function App() {
  const [amount, setAmount] = useState(10);
  const [difficulty, setDifficulty] = useState("easy");
  const [questions, setQuestions] = useState<Questions>();
  const [isLoading, setIsloading] = useState(false);
  useEffect(() => {
    console.log(`amount: ${amount}, difficulty: ${difficulty}`);
  }, [amount, difficulty]);
  const getQustions = async () => {
    if (amount >= 1) {
      setIsloading(true);
      const newQ = await getQuizData(amount, difficulty);
      setQuestions(newQ);
      setIsloading(false);
    }
    // setQuestions(await newQ.data.results);
  };
  return (
    <div className="App">
      <div>
        <label>Set amount of questions</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(+e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <label>
          Pick your favorite flavor:
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </label>
        <button onClick={getQustions}>Fetch data</button>
      </div>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <ul>
          {questions?.map((q) => (
            <li>{JSON.stringify(q)}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;

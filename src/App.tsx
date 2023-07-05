import { useEffect, useState } from "react";
import "./App.css";
import data from "./words.json";

function App() {
  const [search, setSearch] = useState<string>("");
  const [results, setResults] = useState<string[]>([]);

  useEffect(() => {
    const exp = search.split("_").join("[a-zA-Z]");

    const regExp = new RegExp(`^${exp}$`);
    let res = (data as string[]).filter((word) => regExp.test(word));
    setResults(res);
  }, [search]);

  return (
    <div className="App">
      <h1>Smart Suggest</h1>

      <input
        type="text"
        value={search}
        placeholder="Enter a word"
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="suggestion">
        <h2>Suggestions</h2>
        {results.map((word, index) => {
          return <span key={index}>{word}</span>
        })}
      </div>
    </div>
  );
}

export default App;

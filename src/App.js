import React from "react";
import "./App.css";
import { useState } from "react";
import Product from "./Product";

function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const YOUR_APP_ID = "e414c819";
  const YOUR_APP_KEY = "17275beb10efc67c1e7b693783216774";

  const submitHandler = (e) => {
    e.preventDefault();
    fetch(
      `https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=12&calories=591-722&health=alcohol-free`
    )
      .then((response) => response.json())
      .then((data) => setData(data.hits));
  };
  return (
    <div className="App">
      <h1>Food Recipe Search</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Name"
        />
        <input type="submit" value="Search" className="btn btn-primary" />
      </form>
      {data.length >= 1 ? <Product data={data} /> : null}
    </div>
  );
}

export default App;

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ProductList } from "./components/productList/ProductList";
import Header from "components/header/Header";

function App() {
  return (
    <div className="App">
      {/* <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div> */}
      <div className="app">
        <Header />
        <main style={{ padding: "20px" }}>
          <ProductList />
        </main>
      </div>
    </div>
  );
}

export default App;

import React from "react";
import styles from "./App.module.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <Skills />
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";

//Components
import Header from "./components/Header";
import Footer from "./components/Footer";

//Style
import styles from "./App.module.css";

function App() {
  return (
    <>
      <Header />
      <main className={styles.main}></main>
      <Footer />
    </>
  );
}

export default App;

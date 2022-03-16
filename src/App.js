//import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import React from "react";
import Banner from "./Components/Banner";
import Movies from "./Components/Movies";
import MoviesMulti from "./Components/Moviedsahboard";
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Banner />
      <Movies />
      <MoviesMulti />
    </React.Fragment>
  );
}

export default App;

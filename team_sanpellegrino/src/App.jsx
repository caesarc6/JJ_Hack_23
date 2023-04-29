import React from "react";
import "./App.css";
import DrawerAppBar from "./components/DrawerAppBar";
import Intro from './components/Intro'
import Form from "./components/Form";

function App() {
  return (
    <>
      <DrawerAppBar />
      <Intro />
      <Form />
    </>
  );
}

export default App;

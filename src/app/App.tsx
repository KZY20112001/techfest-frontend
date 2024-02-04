import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Fragment } from "react";
import HomePage from "../pages/home";
function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Fragment>
  );
}

export default App;

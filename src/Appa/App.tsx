import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Fragment } from "react";
import HomeTemplate from "../Template/Home";
import Home from "../Pages/Home";
import Results from "../Pages/Results";
function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<HomeTemplate Component={<Home />} />} />
        <Route
          path="/results"
          element={<HomeTemplate Component={<Results />} />}
        />
      </Routes>
    </Fragment>
  );
}

export default App;

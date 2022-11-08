import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Cushook from "./pages/CustomHook/CustomHook";
import Reducer from "./pages/UseReducer/UseReducerPage";
import Error from "./pages/Error/Error";
import Home from "./pages/Home/Home";
import NavBar from "./NavBar";
import ErrorBoundaryTest from "./pages/ErrorBoundary/ErrorBoundaryTest";




function App() {
  return (
    <div className="App" id="outer-container">
      <div id="page-wrap">
      <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/custom-hook" element={<Cushook />} />
        <Route path="/use-reducer" element={<Reducer />} />
        <Route path="/error-boundary" element={<ErrorBoundaryTest />} />
        <Route path="/error-page" element={<Error />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;

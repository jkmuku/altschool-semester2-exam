import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cushook from "./pages/CustomHook";
import Reducer from "./pages/UseReducerPage";
import Error from "./pages/Error";
import ErrorBound from "./pages/ErrorBoundary";

function App() {
  return (
    <div className="App">
    <Cushook />
    <Reducer />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/custom-hook" element={<Cushook />} />
        <Route path="/use-reducer" element={<Reducer />} />
        <Route path="/error-boundary" element={<ErrorBound />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;

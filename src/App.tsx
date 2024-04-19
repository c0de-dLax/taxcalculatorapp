import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import  ErrorPage  from "./pages/ErrorPage";
import  DisclaimerPage  from "./pages/DisclaimerPage";

import "./index.css"

export default function App () {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/disclaimer" element={<DisclaimerPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};